import React from "react";
import { Ruta1 } from "../components/Ruta1";

export const Route_1Screen = ({ history }) => {

    return (
        <div className=" relative w-full flex flex-col items-center space-y-4 overflow-auto p-6">
            <Ruta1 history={history} />
        </div>
    );
};
