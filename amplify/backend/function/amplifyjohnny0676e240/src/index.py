from cgitb import reset
from curses import resetty
import json
import boto3

def generate_signed_url(s3_client, bucket_name, key, expire_seconds, all_versions):
    res = []

    if all_versions == True:
        versions = s3_client.list_object_versions (Bucket = bucket_name, Prefix = key)
        for version in versions['Versions']:
            url = s3_client.generate_presigned_url(
                'get_object',
                Params={
                    'Bucket': bucket_name,
                    'Key': key,
                    'VersionId': version.get("VersionId"),
                },
                ExpiresIn=expire_seconds,
            )
            version['url'] = url
            res.append(version)
    else:
        url = s3_client.generate_presigned_url(
            'get_object',
            Params={
                'Bucket': bucket_name,
                'Key': key,
            },
            ExpiresIn=expire_seconds,
        )
        res.append({'url': url})

    return res


def download_file(s3_client, bucket_name, key, tmp_file_location):
    versions = s3_client.list_object_versions (Bucket = bucket_name, Prefix = key)
    for version in versions['Versions']:      
        s3_client.download_file(
            bucket_name, 
            key,
            tmp_file_location + '/tmpfile' + "." + version.get("VersionId"), 
            ExtraArgs={"VersionId": version.get("VersionId")}
        )
    

def handler(event, context):
    print('received event:')
    print(event)

    # checking whether generating presigned url for all versions or just the latest version
    if event['queryStringParameters']['all_versions'] == True:
        all_versions = True
    else:
        all_versions = False

    bucket_name = 'amplifyjohnny1a26ad73f9694ef799c6c9a8d21ad9cd151847-staging'
    key = 'public/' + event['queryStringParameters']['filename']

    session = boto3.session.Session()
    s3 = session.client('s3')
    res = generate_signed_url(s3, bucket_name, key, 10, all_versions)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(res, indent=4, sort_keys=True, default=str)
    }
