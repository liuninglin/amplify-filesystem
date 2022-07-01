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
  CheckboxField,
  Flex,
  SelectField,
  Text,
  TextField,
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
          {...getOverrideProps(overrides, "TextField")}
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
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
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
          {...getOverrideProps(overrides, "label31563067")}
        ></Text>
        <CheckboxField
          display="flex"
          gap="12px"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Checkbox "
          size="large"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Flex
          gap="60px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 318")}
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
            overflow="hidden"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Choose File"
            {...getOverrideProps(overrides, "Button31563068")}
          ></Button>
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="File"
            {...getOverrideProps(overrides, "label31563073")}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Button31563077")}
        ></Button>
      </Flex>
    </Flex>
  );
}
