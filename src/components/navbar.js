import React from "react";
import { useAuthenticator, Menu, MenuItem, Image } from "@aws-amplify/ui-react";
import { NavBar as UINavBar } from "../ui-components";
import Profile from "./profile";
import { useAuthContext } from "../contexts/AuthContext";

const NavBar = ({ authUser, signOut }) => {
  const overrides = {
    name: {
      children: authUser?.attributes?.email
    },
    sub: {
      children: authUser?.attributes?.sub
    },
    btn_logout: {
      onClick: (e) => signOut(),
    }  
  };

  return <UINavBar width={"100vw"} overrides={overrides} ></UINavBar>;
};

export default NavBar;