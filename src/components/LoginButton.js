import '../css/main.css';
import '../css/util.css';

import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <button className={"login100-form-btn"} onClick={() => loginWithRedirect()}>
                Login
            </button>
        )
    )
}

export default LoginButton