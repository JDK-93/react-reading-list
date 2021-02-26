import React, { useContext }  from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import Navigation from "../components/Navigation";
import { Route_2Screen } from "../pages/Route_2Screen";
import { Route_1Screen } from "../pages/Route_1Screen";
import { Route_3Screen } from "../pages/Route_3Screen";

export const AuthRoutes = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="h-screen w-screen overflow-x-hidden">
                <div className="h-1/6 w-screen">
                    <Navigation isAuthenticated={user.logged}/>
                </div>
                <div className="h-5/6 w-screen flex flex-col content-center justify-center">
                    <Switch>
                        <Route
                            exact
                            path="/route_1"
                            component={Route_1Screen}
                        />
                        <Route
                            exact
                            path="/route_2"
                            component={Route_2Screen}
                        />
                        <Route
                            exact
                            path="/route_3/:id/:name"
                            component={Route_3Screen}
                        />
                        <Redirect to="/route_1" />
                    </Switch>
                </div>
            </div>
        </>
    );
};
