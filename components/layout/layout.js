import React from "react";

import Dashboard from "./dashboard/dashboard";

const Layout = ({ children }) => {
  return (
    <>
      <Dashboard content={children} />
    </>
  );
};

export default Layout;
