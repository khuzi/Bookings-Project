import React from "react";

import Dashboard from "./dashboard/dashboard";

const Layout = ({ children }) => {
  return (
    <>
      <Dashboard />
      {children}
    </>
  );
};

export default Layout;
