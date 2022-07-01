import React from "react";
import { useAuthenticator, Menu, MenuItem, Image } from "@aws-amplify/ui-react";
import { NavBar as UINavBar } from "../ui-components";
import Profile from "./profile";
import { useAuthContext } from "../contexts/AuthContext";

const NavBar = ({ handleSearch }) => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const { dbUser } = useAuthContext();

  const overrides = {
    name: {
      children: dbUser?.name
    },
    sub: {
      children: dbUser?.sub
    },
    btn_logout: {
      onClick: (e) => signOut(),
    }  
  };

  return <UINavBar width={"100vw"} overrides={overrides}></UINavBar>;
};

export default NavBar;