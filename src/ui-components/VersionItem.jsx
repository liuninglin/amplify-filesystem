/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function VersionItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="960px"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(245,245,245,1)"
      {...rest}
      {...getOverrideProps(overrides, "VersionItem")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="912px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "all")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="448px"
          height="20px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "div_version")}
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="version:"
            {...getOverrideProps(overrides, "txt_label")}
          ></Text>
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Amplify Studio gives designers the ability to export UI to React code"
            {...getOverrideProps(overrides, "txt_version")}
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
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "footer")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="448px"
            alignItems="center"
            grow="1"
            basis="448px"
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
              {...getOverrideProps(overrides, "MyIcon")}
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
                children="last modified time:"
                {...getOverrideProps(overrides, "label")}
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
                {...getOverrideProps(overrides, "txt_lastmodifiedtime")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="448px"
            justifyContent="flex-end"
            alignItems="center"
            grow="1"
            basis="448px"
            height="40px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "div_buttons")}
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
              children="View "
              {...getOverrideProps(overrides, "btn_view")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
