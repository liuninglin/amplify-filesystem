/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, SearchField, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const buttonThreeOneFiveFourTwoSixEightZeroOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const buttonThreeOneFiveFourTwoSixEightSevenOnClick = useNavigateAction({
    type: "url",
    url: "/file",
  });
  const buttonThreeOneFiveFourTwoSixNineOneOnClick = useNavigateAction({
    type: "url",
    url: "/upload",
  });
  const buttonThreeOneFiveEightTwoSevenTwoOneOnClick = useNavigateAction({
    type: "url",
    url: "/user",
  });
  const buttonThreeOneFiveEightTwoSevenTwoFiveOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="fit-content"
        height="45px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo29767073")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logo"
          {...getOverrideProps(overrides, "Logo29767075")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="Home"
        onClick={() => {
          buttonThreeOneFiveFourTwoSixEightZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Button31542680")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="File"
        onClick={() => {
          buttonThreeOneFiveFourTwoSixEightSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button31542687")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="Upload"
        onClick={() => {
          buttonThreeOneFiveFourTwoSixNineOneOnClick();
        }}
        {...getOverrideProps(overrides, "Button31542691")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="User"
        onClick={() => {
          buttonThreeOneFiveEightTwoSevenTwoOneOnClick();
        }}
        {...getOverrideProps(overrides, "Button31582721")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="33px"
        position="relative"
        size="small"
        isDisabled={false}
        variation="link"
        children="Profile"
        onClick={() => {
          buttonThreeOneFiveEightTwoSevenTwoFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button31582725")}
      ></Button>
      <Flex
        gap="20px"
        direction="row"
        width="874px"
        height="45px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="874px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="689px"
          height="45px"
          alignItems="center"
          grow="1"
          basis="689px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 322")}
        >
          <SearchField
            display="flex"
            gap="8px"
            direction="column"
            width="300px"
            shrink="0"
            height="40px"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="Placeholder"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "SearchField")}
          ></SearchField>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          shrink="0"
          height="42px"
          position="relative"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "Frame 406")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="name"
            {...getOverrideProps(overrides, "name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="21px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="sub"
            {...getOverrideProps(overrides, "sub")}
          ></Text>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="87px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="40px"
          overflow="hidden"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Logout"
          {...getOverrideProps(overrides, "btn_logout")}
        ></Button>
      </Flex>
    </Flex>
  );
}
