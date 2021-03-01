import React, { useState } from "react";

import { Nav } from "./Nav";
import logo from "../logo.png";

export const Navigation = ({ isAuthenticated }) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <nav className="w-full h-full flex flex-row flex-wrap items-center justify-between bg-uno z-40 ">
        {isAuthenticated ? (
          <Nav isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
        ) : (
          <div className="lg:w-1/12 hidden lg:block px-4">
            <img src={logo} alt="Logo" width="84" height="34" />
          </div>
        )}
      </nav>
    </>
  );
};
