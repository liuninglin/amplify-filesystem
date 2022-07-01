import React from "react";
import { ProfileCard as UIProfileCard } from "../ui-components";

const Profile = ({ user, signOut }) => {
  const overrides = {
      img_avatar: {
          src: 'https://picsum.photos/id/1005/160/160?blur=2'
      },
      txt_name: user?.name,
      btn_logout: {
          onClick: (e) => signOut(),
      }
  };

  return <UIProfileCard user={user} overrides={overrides} />;
};

export default Profile;
