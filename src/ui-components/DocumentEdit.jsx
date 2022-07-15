/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function DocumentEdit(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="847px"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DocumentEdit")}
    >
      <Flex
        gap="20px"
        direction="column"
        width="847px"
        grow="1"
        basis="847px"
        height="auto"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 406")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reupload File"
          {...getOverrideProps(overrides, "label32352790")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          borderRadius="16px 16px 16px 16px"
          padding="0px 16px 0px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "div_choose")}
        ></Flex>
        <TextField
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Name*"
          placeholder="type the name of this document"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "field_name")}
        ></TextField>
        <TextField
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Description*"
          placeholder="type the file description"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "field_description")}
        ></TextField>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          borderRadius="16px 16px 16px 16px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "div_category")}
        ></Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tags"
          {...getOverrideProps(overrides, "label32352795")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          borderRadius="16px 16px 16px 16px"
          padding="0px 16px 0px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "div_tags")}
        ></Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          overflow="hidden"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Submit"
          {...getOverrideProps(overrides, "btn_submit")}
        ></Button>
      </Flex>
    </Flex>
  );
}
