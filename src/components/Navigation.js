import React, { useState } from "react";

import {Nav} from "./Nav";
import logo from "../logo.png";

function Navigation({isAuthenticated}) {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <>
            <nav className="w-full px-4 flex flex-row flex-wrap items-center justify-between bg-white shadow-md">
                <img src={logo} alt="Logo" width="252" height="102" />
                {isAuthenticated ? <Nav
                        isExpanded={isExpanded}
                        toggleExpansion={toggleExpansion}
                    />:''}
                    
            </nav>
        </>
    );
}

export default Navigation;
