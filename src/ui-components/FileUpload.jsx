/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function FileUpload(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1000px"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FileUpload")}
    >
      <Flex
        gap="24px"
        direction="column"
        grow="1"
        basis="1000px"
        alignSelf="stretch"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 406")}
      >
        <TextField
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Name"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "field_name")}
        ></TextField>
        <SelectField
          display="flex"
          direction="column"
          justifyContent="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Type"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "select_type")}
        ></SelectField>
        <Flex
          padding="0px 0px 0px 0px"
          height="30px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          {...getOverrideProps(overrides, "Group 28")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="936px"
            height="30px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 29")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="936px"
              height="30px"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Group 31")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="936px"
                height="30px"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Group 30")}
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
                  width="936px"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="calc(50% - 468px - 0px)"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Tags"
                  {...getOverrideProps(overrides, "label")}
                ></Text>
              </View>
            </View>
          </View>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          borderRadius="16px 16px 16px 16px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "div_tags")}
        ></Flex>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          borderRadius="16px 16px 16px 16px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "div_choose")}
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
          children="Upload"
          {...getOverrideProps(overrides, "btn_upload")}
        ></Button>
      </Flex>
    </Flex>
  );
}
