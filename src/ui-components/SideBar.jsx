/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SideBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="385px"
      height="762px"
      alignItems="flex-start"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SideBar")}
    >
      <Flex
        gap="32px"
        direction="column"
        height="698px"
        grow="1"
        basis="385px"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767087")}
      >
        <Flex
          gap="32px"
          direction="column"
          height="585px"
          grow="1"
          basis="585px"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 32129767088")}
        >
          <View
            height="80px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(233,235,236,1)"
            {...getOverrideProps(overrides, "Rectangle 1162")}
          ></View>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 414")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="ORGANIZATION"
              {...getOverrideProps(overrides, "ORGANIZATION29767091")}
            ></Text>
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32129767092")}
            >
              <View
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Icon29767093")}
              >
                <Icon
                  width="20px"
                  height="17px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 17 }}
                  paths={[
                    {
                      d: "M10 2.69L15 7.19L15 15L13 15L13 9L7 9L7 15L5 15L5 7.19L10 2.69L10 2.69ZM10 0L0 9L3 9L3 17L9 17L9 11L11 11L11 17L17 17L17 9L20 9L10 0Z",
                      fill: "rgba(13,26,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="12.5%"
                  bottom="16.67%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector29767094")}
                ></Icon>
              </View>
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
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem Ipsum"
                {...getOverrideProps(overrides, "Lorem Ipsum29767095")}
              ></Text>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 322")}
            >
              <View
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Icon29767097")}
              >
                <Icon
                  width="20px"
                  height="17px"
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 17 }}
                  paths={[
                    {
                      d: "M10 2.69L15 7.19L15 15L13 15L13 9L7 9L7 15L5 15L5 7.19L10 2.69L10 2.69ZM10 0L0 9L3 9L3 17L9 17L9 11L11 11L11 17L17 17L17 9L20 9L10 0Z",
                      fill: "rgba(13,26,38,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="12.5%"
                  bottom="16.67%"
                  left="8.33%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector29767098")}
                ></Icon>
              </View>
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
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Lorem Ipsum"
                {...getOverrideProps(overrides, "Lorem Ipsum29767099")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
