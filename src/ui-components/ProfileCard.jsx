/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProfileCard(props) {
  const { overrides, ...rest } = props;
  const btnUnderScoreeditUnderScoreprofileOnClick = useAuthSignOutAction({
    global: true,
  });
  return (
    <View
      width="208px"
      height="355px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileCard")}
    >
      <Image
        width="160px"
        height="160px"
        position="absolute"
        top="24px"
        left="24px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "img_avatar")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="208px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Melinda Marcus"
        {...getOverrideProps(overrides, "txt_name")}
      ></Text>
      <Flex
        gap="8px"
        position="absolute"
        top="257px"
        left="24px"
        direction="column"
        width="160px"
        justifyContent="flex-end"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Edit Profile"
          onClick={() => {
            btnUnderScoreeditUnderScoreprofileOnClick();
          }}
          {...getOverrideProps(overrides, "btn_edit_profile")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          backgroundColor="rgba(149,4,4,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Logout"
          {...getOverrideProps(overrides, "btn_logout")}
        ></Button>
      </Flex>
    </View>
  );
}
