import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import { initAxiosInterceptors } from "./auth/authHelper";
const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

initAxiosInterceptors();

function App() {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
}

export default App;
