import React from "react";
import { useAuthenticator, Menu, Image } from "@aws-amplify/ui-react";
import { NavBar as UINavBar } from "../ui-components";
import { useAuthContext } from "../contexts/AuthContext";
import Profile from "./profile";

const NavBar = ({ handleSearch }) => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const { dbUser } = useAuthContext();

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
    Avatar: {
      children: 
        <Menu trigger={handleUserOpen()}>
          <Profile user={dbUser} signOut={signOut} />
        </Menu>,
    },
    SearchField: {
      onSubmit: (txt) => handleSearch(txt),
    }
  };

  return <UINavBar width={"100vw"} overrides={overrides}></UINavBar>;
};

export default NavBar;