import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <>
        <div className="video-background">
            <video autoPlay muted loop>
                <source src="/video/log.mp4" type="video/mp4" />
            </video>

            <div className="contenido-superpuesto">
                <div className="login-screen">
                    <div className="contenedor-titulos">
                        <center>
                            <h1>Bienvenido/a a Aura!</h1>
                            <br />
                            <h3>Tu espacio virtual seguro</h3>
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
            </div>
        </div>

        <style>
            {`

            h1,h2,h3{
                color: #fff;
            }

            .video-background {
                position: relative;
                width: 100%;
                height: 100vh;
                overflow: hidden;
            }

            .video-background video {
                position: absolute;
                top: 50%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                z-index: -1;
                transform: translate(-50%, -50%);
                /* opacity: 0.5;  Ajusta la opacidad al 50% */
            }

            .login-screen {
                width: 100%;
                height: 900px;
            }

            .contenedor-titulos {
                font-weight: 700;
                margin-top: 30%;
            }

            .llamado-accion {
                margin-top: 60%;
            }
            `}
        </style>
    </>
}
