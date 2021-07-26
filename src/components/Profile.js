import React from "react";
import logo from "../images/inklavat_rsz_x-tention_logo_0.png";
import {useAuth0} from "@auth0/auth0-react";


const Profile = () => {
    const {user, isAuthenticated} = useAuth0();

    return (

        isAuthenticated && (
            /*<div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {JSON.stringify(user, null, 2)}
            </div>

             */


            <div>
                <img className={"imgpositionsearch"} src={logo} alt={"logo"}/>
                <span className={"toprightname"}>{user.name}</span>
            </div>


        )

    )
}

export default Profile