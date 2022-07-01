/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Alert, Flex } from "@aws-amplify/ui-react";
export default function AlertWarning(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="750px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AlertWarning")}
    >
      <Alert
        display="flex"
        gap="16px"
        direction="row"
        width="750px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="750px"
        height="96px"
        position="relative"
        padding="12px 16px 12px 16px"
        heading="Warning"
        variation="warning"
        isDismissible={true}
        hasIcon={true}
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        {...getOverrideProps(overrides, "Alert")}
      ></Alert>
    </Flex>
  );
}
