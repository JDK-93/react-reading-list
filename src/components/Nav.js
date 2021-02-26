import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

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
            <div className="lg:hidden">
                <button
                    onClick={() => handleClick()}
                    className="flex items-center px-3 py-2 border rounded text-gray-400 border-blue-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3 text-blue-600"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div
                className={`${
                    isExpanded ? `block` : `hidden`
                } w-full p-4 block flex-grow lg:flex lg:items-center lg:w-auto bg-white z-40`}
            >
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-base lg:flex-grow">
                        <NavLink
                            exact
                            to="/route_1"
                            activeClassName="pb-0 border-b-4 border-blue-400"
                            className="block p-2 lg:inline-block  text-gray-700 text-2xl  hover:shadow-md cursor-pointer"
                            onClick={() => handleClick()}
                        >
                            Ruta 1
                        </NavLink>
                        <NavLink
                            exact
                            to="/route_2"
                            activeClassName="pb-0 border-b-4 border-blue-400"
                            className="block p-2 lg:inline-block lg: text-gray-700 text-2xl  hover:shadow-md cursor-pointer"
                            onClick={() => handleClick()}
                        >
                            Ruta 2
                        </NavLink>
                        <NavLink
                            exact
                            to="/route_3/:idPrueba/:namePrueba"
                            activeClassName="pb-0 border-b-4 border-blue-400"
                            className="block p-2 lg:inline-block lg: text-gray-700 text-2xl  hover:shadow-md cursor-pointer"
                            onClick={() => handleClick()}
                        >
                            Ruta 3
                        </NavLink>
                    </div>
                </div>
                <div
                    className="flex flex-col lg:flex-row pt-4 p-2 lg:pt-0 justify-center items-center"
                    onClick={() => handleLogout()}
                >
                    <h1 className="p-4 text-2xl pl-2 text-gray-700">
                        {user.name}
                    </h1>

                    <button
                        className="inline-block text-xl px-4 py-2 leading-none border rounded text-gray-700  border-gray-700 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                        onClick={() => handleLogout()}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </>
    );
};
