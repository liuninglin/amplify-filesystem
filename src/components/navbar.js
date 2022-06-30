import React from "react";
import { useAuthenticator, Menu, Image } from "@aws-amplify/ui-react";
import { NavBar as UINavBar } from "../ui-components";
import Profile from "./profile";

const NavBar = ({ handleSearch }) => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const { user } = useAuthenticator();

  const handleUserOpen = () => (
    <Image
      src={'https://picsum.photos/id/1005/45/45?blur=2'}
      ariaLabel="avatar"
      width="45px"
      height="45px"
      borderRadius="45px"
    />
  );

  const overrides = {
    username: {
      "children": user.username
    }
  };

  return <UINavBar width={"100vw"} overrides={overrides}></UINavBar>;
};

export default NavBar;