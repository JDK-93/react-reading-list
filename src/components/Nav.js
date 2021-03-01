import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import logo from "../logo.png";

export const Nav = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    toggleExpansion(!isExpanded);
  };

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: {},
    });
  };

  return (
    <>
      <div
        className={`w-full p-4 px-0 flex lg:flex-row flex-col-reverse lg:justify-between items-center z-0`}
      >
        <div className="lg:w-1/12 hidden lg:block px-4">
          <img src={logo} alt="Logo" width="84" height="34" />
        </div>

        <div className="lg:w-8/12 w-screen pb-2 lg:pb-0 flex flex-row justify-center lg:justify-start items-center ">
          <NavLink
            exact
            to="/wishes"
            activeClassName="pb-0 border-b-4 border-cuatro"
            className="block p-2 pb-0  lg:inline-block  text-cuatro  text-2xl  hover:shadow-md cursor-pointer border-b-4 border-transparent"
            onClick={() => handleClick()}
          >
            Deseos
          </NavLink>
          <NavLink
            exact
            to="/read"
            activeClassName="pb-0 border-b-4 border-cuatro"
            className="block p-2 pb-0 lg:inline-block  text-cuatro  text-2xl  hover:shadow-md cursor-pointer border-b-4 border-transparent"
            onClick={() => handleClick()}
          >
            Leídos
          </NavLink>
        </div>
        <div className="lg:w-3/12 w-full flex flex-row pt-4 p-2 lg:pt-0 lg:justify-end justify-between items-center">
          <img
            className="lg:hidden block"
            src={logo}
            alt="Logo"
            width="84"
            height="34"
          />

          <h1 className="p-4 text-2xl pl-2 text-dos cursor-pointer">
            {user.name}
          </h1>
          <button
            className="inline-block text-xl px-4 py-2 leading-none border rounded text-cuatro  border-cuatro hover:border-transparent hover:text-cuatro hover:bg-uno mt-4 lg:mt-0"
            onClick={() => handleLogout()}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};
