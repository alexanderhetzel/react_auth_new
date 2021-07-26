import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import lougout from "../images/logout-icon.png";



const LogoutButton = () => {
    const{logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (

                <button className={"logoutbutton"} type={"button"} onClick={() => logout()} ><img src={lougout} alt={"logo"}/></button>

        )
    )
}

export default LogoutButton