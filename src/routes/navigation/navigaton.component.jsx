import { Outlet } from "react-router-dom";

import React from "react";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
