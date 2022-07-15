from cgitb import html
import json
import boto3


def handler(event, context):
    print('received event:')
    print(event)

    for record in event['Records']:
        event_name = record['eventName']
        if (event_name == 'INSERT'):
            sender = record['dynamodb']['NewImage']['sender']['S']
            receivers = record['dynamodb']['NewImage']['receivers']['S']
            subject = record['dynamodb']['NewImage']['subject']['S']
            html_body = record['dynamodb']['NewImage']['html_body']['S'] if 'html_body' in record['dynamodb']['NewImage'] else None
            text_body = record['dynamodb']['NewImage']['text_body']['S'] if 'text_body' in record['dynamodb']['NewImage'] else None 

            email_body = ''
            if (html_body is not None and html_body != ''):
                email_body = {'Html': {'Charset': 'UTF-8', 'Data': html_body}}
            if (text_body is not None and text_body != ''):
                email_body = {'Text': {'Charset': 'UTF-8', 'Data': text_body}}

            # Send email
            client = boto3.client('ses')

            try:
                response = client.send_email(
                    Source=sender,
                    Destination={
                        'ToAddresses': receivers.split(',') 
                    },
                    Message={
                        'Subject': {
                            'Data': subject
                        },
                        'Body': email_body
                    }
                )
                print(response)
            except Exception as e:
                print('Error: ' + str(e))

                return {
                    'statusCode': 500,
                    'headers': {
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
                    },
                    'body': json.dumps({
                        'message': 'Error occur: ' + str(e)
                    })
                }

        else:
            print('Event not supported')

    if (event_name == 'INSERT'):
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Email sent, sender: ' + sender + ', receivers: ' + str(receivers) + ', subject: ' + subject)
        }
    else:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Event not supported, event name: ' + event_name)
        }
