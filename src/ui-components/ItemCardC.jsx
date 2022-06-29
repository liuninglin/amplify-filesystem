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
  Image,
  Rating,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
export default function ItemCardC(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="857px"
      height="356px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ItemCardC")}
    >
      <Image
        width="424px"
        height="356px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        height="356px"
        grow="1"
        basis="393px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="10px 143px 116px 10px"
        {...getOverrideProps(overrides, "Details")}
      >
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
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="large"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Flex
          gap="20px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PriceFrame")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.05px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Price:"
            {...getOverrideProps(overrides, "PriceLabel")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.05px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$0.00"
            {...getOverrideProps(overrides, "Price")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InventoryFrame")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.05px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Items currently in stock:"
            {...getOverrideProps(overrides, "InventoryLabel")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.05px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="0"
            {...getOverrideProps(overrides, "Inventory")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="274px"
          alignItems="flex-start"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Order")}
        >
          <SelectField
            display="flex"
            gap="8px"
            direction="column"
            width="132px"
            justifyContent="center"
            shrink="0"
            height="40px"
            position="relative"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "Quantity")}
          ></SelectField>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="132px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Add to Cart"
            {...getOverrideProps(overrides, "AddToCart")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Description"
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
