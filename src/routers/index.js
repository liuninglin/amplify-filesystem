import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';
import { ViewProfile } from '../components';
// import SearchRoute from './SearchRoute';

const RouteNavigation = () => {
//   const { dbUser } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<ViewProfile />} />
      {/* <Route path="/doc/:id" element={<Document />} /> */}
      {/* <Route path="/profile" element={<EditProfile />} /> */}
    </Routes>
  )
};

export default RouteNavigation;