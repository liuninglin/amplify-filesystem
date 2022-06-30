import React from "react";
import { ProfileCard as UIProfileCard } from "../ui-components";

const Profile = ({ user, signOut }) => {
  const overrides = {
        username: '123',
      Avatar: {
          src: 'https://picsum.photos/id/1005/160/160?blur=2'
      },
      SignOutBtn: {
          onClick: (e) => signOut(),
      }
  };

  return <UIProfileCard user={user} overrides={overrides} />;
};

export default Profile;
