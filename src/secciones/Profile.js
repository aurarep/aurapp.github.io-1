import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import Logout, { LogoutButton } from '../modulos/Logout';
import MenuBar from "../modulos/MenuBar";
import '../App.css';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
            <MenuBar/>
            <center>
                
                <img src={user.picture} alt={user.name} />
                </center>
                <div className="container">
                <br></br>
                <h2>Nombre:</h2>
                <h3>{user.name}</h3>
                <br></br>
                <h2>Correo: </h2>
                <h3>{user.email}</h3>
                <br></br>
                </div>
                <LogoutButton/>
            </>
        )
    );
}

export default Profile;
