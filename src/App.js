import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import LogoXtention from "./components/LogoXtention";
import {useAuth0} from "@auth0/auth0-react";
import Searchbar from "./components/Searchbar";
import Searchresults from "./components/Searchresults";
import Ele from "./components/Ele";
import UserProperties from "./components/UserProperties";

function App() {
  const { isLoading} = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (

      <>

        <div>
          <div className={"container-login100"}>
            <LogoXtention />
          </div>

          <div className={"container-login100"}>
            <LoginButton />
          </div>


        </div>



        <Profile />
        <LogoutButton />
        <Searchbar />

        <UserProperties />
        <Ele />

      </>

  );
}

export default App;
