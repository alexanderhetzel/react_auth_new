import React from "react";
import logo from "../images/x-tention_Logo_0.png";
import {useAuth0} from "@auth0/auth0-react";

const LogoXtention = () => {
    const {isAuthenticated} = useAuth0();
    return (

        !isAuthenticated && (
            <img className={"imgposition"} src={logo} alt={"logo"}/>
        )
    )
}

export default LogoXtention