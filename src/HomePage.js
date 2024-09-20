import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import obtenerSaludo from './Saludo';
import Logout, { LogoutButton } from './Logout';
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        // Llama a la función para obtener el saludo
        const saludo = obtenerSaludo();

        return (
            <div className="homepage homepage-p1 container">
                <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>

                <label htmlFor="btn-nav" className="btn-nav-label">
                    <i className="fa-solid fa-user iconos" aria-hidden="true"></i>
                </label>


                <div className="saludador container">
                    <h2>
                        <span>{saludo}</span>
                        <span>{user.given_name}</span>
                    </h2>
                    <br></br>
                    <div className="container container-cards">

                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <Link to="/Diario"><h3>Diario</h3></Link>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card"><h3>Informacion</h3></div>
                            </div>
                            <div className="column">
                                <div className="card"><h3>Terapia</h3></div>
                            </div>
                            <div className="column">
                                <div className="card"><h3>Aura.ai</h3></div>
                            </div>
                            <LogoutButton />
                        </div>


                    </div>
                </div>
            </div>
        );
    }

    return <div>You are not authenticated.</div>;
};
