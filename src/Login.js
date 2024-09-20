import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <>
        <div className="login-screen">
            <div className="contenedor-titulos">
                <center>
                    <h1>Bienvenido/a a Aura!</h1>
                    <h1>bla bla bla</h1>
                </center>
            </div>
            <div className="llamado-accion">
                <center>
                    <div onClick={() => loginWithRedirect()}>
                        <button className="btn-global-1">Comencemos!</button>
                    </div>
                </center>
            </div>
        </div>
    </>
}
