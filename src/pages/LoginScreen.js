import React, { useContext }  from "react";
import { AuthContext } from "../auth/AuthContext";

import Login from "../components/Login";
import Navigation from "../components/Navigation";

export const LoginScreen = ({ history }) => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="h-screen w-screen">
                <div className="h-1/6 w-screen">
                    <Navigation isAuthenticated={user.logged}/>
                </div>
                <div className="h-5/6 w-screen flex flex-col content-center justify-center">
                    <Login history={history} />
                </div>
            </div>
        </>
    );
};
