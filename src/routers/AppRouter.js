import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { SignUpScreen } from "../pages/SignUpScreen";
import { LoginScreen } from "../pages/LoginScreen";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                    />
                    <PublicRoute
                        exact
                        path="/signup"
                        component={SignUpScreen}
                        isAuthenticated={user.logged}
                    />

                    <PrivateRoute
                        path="/"
                        component={AuthRoutes}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};
