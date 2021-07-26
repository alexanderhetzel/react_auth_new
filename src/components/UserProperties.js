import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const UserProperties = () => {
    const {isAuthenticated} = useAuth0();

    return (

        isAuthenticated && (

            <div id={"abc"} className="container-userProp100 abc">
                <input type="checkbox" className=" pos-absolute checkboxcss"/>

                <span id="username" className="m-t-60 pos-absolute font-size-15">Bob Baumeister</span>
                <span className="m-t-110  pos-absolute"> <h4>Lock / Unlock Account</h4></span>


                <div className="container-save-form-btn m-t-170 pos-absolute">
                    <button onClick={() => document.getElementById("abc").style.visibility = "hidden"} type="button"
                            className="login100-form-btn">
                        Speichern
                    </button>
                </div>

            </div>


        )
    )

}

export default UserProperties