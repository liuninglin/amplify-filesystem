/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function ItemCardA(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ItemCardA")}
    >
      <Image
        width="320px"
        height="256px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        overflow="hidden"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "content")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="22px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0.07px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Title"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          display="flex"
          gap="8px"
          direction="row"
          width="287px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="default"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Roboto"
          fontSize="28px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0.13px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$99"
          {...getOverrideProps(overrides, "$99")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="288px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add to Cart"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
