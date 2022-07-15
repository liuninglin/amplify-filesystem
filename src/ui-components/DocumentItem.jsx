/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function DocumentItem(props) {
  const { document, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="960px"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "DocumentItem")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="912px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "all31563178")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "group_top")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="912px"
            height="40px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={document?.name}
            {...getOverrideProps(overrides, "txt_name")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "group_category")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="more_vert"
            {...getOverrideProps(overrides, "MyIcon32422844")}
          ></MyIcon>
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            height="40px"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "category")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="category:"
              {...getOverrideProps(overrides, "label32422846")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=" "
              {...getOverrideProps(overrides, "txt_categoryname")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            height="40px"
            justifyContent="flex-end"
            alignItems="flex-start"
            grow="1"
            basis="768px"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "group_edit")}
          >
            <Flex
              gap="0"
              direction="row"
              width="150px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              border="1px SOLID rgba(0,0,0,0)"
              borderRadius="4px"
              padding="7px 15px 7px 15px"
              backgroundColor="rgba(149,4,149,1)"
              {...getOverrideProps(overrides, "btn_edit")}
            >
              <Icon
                width="16px"
                height="16px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                type="none"
                fontSize="16px"
                {...getOverrideProps(overrides, "Button Icon")}
              ></Icon>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Edit"
                {...getOverrideProps(overrides, "label32342777")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "all32442861")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "filename")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="info"
              {...getOverrideProps(overrides, "MyIcon32032906")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="file name:"
              {...getOverrideProps(overrides, "label32032897")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={document?.filename}
              {...getOverrideProps(overrides, "txt_filename")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 41px 0px 41px"
            {...getOverrideProps(overrides, "filetype")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="file type:"
              {...getOverrideProps(overrides, "label32032888")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={document?.filetype}
              {...getOverrideProps(overrides, "txt_filetype")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "group_tags")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="group"
            {...getOverrideProps(overrides, "MyIcon32173116")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="tags:"
            {...getOverrideProps(overrides, "label32173118")}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="783px"
            justifyContent="center"
            shrink="0"
            height="37px"
            position="relative"
            borderRadius="16px 16px 16px 16px"
            padding="0px 16px 0px 16px"
            {...getOverrideProps(overrides, "div_tags")}
          ></Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          height="100px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "group_description")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="arrow-right"
            {...getOverrideProps(overrides, "MyIcon31563185")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="872px"
            height="100px"
            grow="1"
            basis="872px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={document?.description}
            {...getOverrideProps(overrides, "txt_description")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="912px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "group_time")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="912px"
            alignItems="center"
            grow="1"
            basis="912px"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "div_time")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="more_horiz"
              {...getOverrideProps(overrides, "MyIcon32173060")}
            ></MyIcon>
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="flex-start"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "createdtime")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="created time:"
                {...getOverrideProps(overrides, "label32422840")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={document?.createdAt}
                {...getOverrideProps(overrides, "txt_createdtime")}
              ></Text>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="flex-start"
              shrink="0"
              height="24px"
              position="relative"
              padding="0px 100px 0px 100px"
              {...getOverrideProps(overrides, "updatedtime")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="updated time:"
                {...getOverrideProps(overrides, "label32173062")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={document?.updatedAt}
                {...getOverrideProps(overrides, "txt_updatedtime")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="912px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "group_buttons")}
        >
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="150px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            filename={document?.filename}
            children="View"
            {...getOverrideProps(overrides, "btn_view")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="150px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            filename={document?.filename}
            children="Download"
            {...getOverrideProps(overrides, "btn_download")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="150px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            filename={document?.filename}
            children="Versions"
            {...getOverrideProps(overrides, "btn_versions")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
