import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const Login = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const [formUser, setFormUser] = useState({
        userEmail: "",
        userPass: "",
    });

    function handleInputChange(e) {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        });
    }

    const handleClik = () => {
        history.replace("/signup");
    };

    async function handleSubmit(e) {
        e.preventDefault(); //No queremos que el formulario haga refresh de la  pagina
        const lastPath = localStorage.getItem("lastPath") || "/";
        const identifier = formUser.userEmail;
        const password = formUser.userPass;
        dispatch({
            type: types.login,
            payload: {
                name: identifier.slice("@"),
                password,
            },
        });
        history.replace(lastPath);
    }

    return (
        <React.StrictMode>
            <div className="flex w-full content-center justify-center">
                <div className="max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="pb-4 text-center text-gray-700 text-2xl">
                        Iniciar sesión
                    </h1>

                    <form className="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="userEmail"
                            placeholder="Introduce tu nombre"
                            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleInputChange}
                            value={formUser.userEmail}
                        />

                        {/* <input
                            type="password"
                            name="userPass"
                            placeholder="Contraseña"
                            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            maxLength="150"
                            onChange={handleInputChange}
                            value={formUser.userPass}
                        /> */}

                        <div className="mt-4 flex items-center justify-center">
                            <button
                                className="mb-2 self-center text-sm px-4 py-2 mx-2 leading-none font-bold border rounded text-gray-700  border-gray-700 hover:bg-gray-700 hover:text-white"
                                //className="bg-blue-400 text-sm px-4 py-2 leading-none font-bold py-2 px-4 rounded text-white border border-transparent hover:border-blue-400 hover:text-blue-400 hover:bg-white mt-2 lg:mt-0"
                                type="submit"
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    {/* <p className="text-center text-gray-500 text-xs pt-4 cursor-pointer">
                        ¿No tienes cuenta?{" "}
                        <span
                            className="underline text-blue-600"
                            onClick={() => handleClik()}
                        >
                            Registrate.
                        </span>
                    </p> */}
                </div>
            </div>
        </React.StrictMode>
    );
};
export default Login;
