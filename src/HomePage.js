import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import obtenerSaludo from './modulos/Saludo';
import { Link } from "react-router-dom";
import Buscador from "./modulos/Buscador";
import BotonFlotante from "./modulos/BotonFlotante";

export const HomePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        const saludo = obtenerSaludo();

        return (<>
            <section className="homepage-p1">
                <div className="container">
                    <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>

                    <label htmlFor="btn-nav" className="btn-nav-label">
                        <Link to="/Profile">
                            <i className="fa-solid fa-user iconos" aria-hidden="true"></i>
                        </Link>
                    </label>

                    <div className="saludador container">
                        <h3>
                            <span>{saludo}</span>
                            <span>{user.given_name}</span>
                        </h3>
                    </div>
                    <Buscador />
                </div>
            </section>

            <br />

            <div className="gall container">
                <ol>
                    <li>
                        <Link to="./Diario">
                            <img src="./img/btn-1.png" alt="Diario" />
                        </Link>
                        <p>Diario</p>
                    </li>

                    <li>
                        <Link to="./Informacion">
                            <img src="./img/btn-2.png" alt="Informacion" />
                        </Link>
                        <p>Informacion</p>
                    </li>

                    <li>
                        <Link to="./Meditacion">
                            <img src="./img/btn-3.png" alt="Meditacion" />
                        </Link>
                        <p>Meditacion</p>
                    </li>

                    <li>
                        <Link to="./AyudaPro">
                            <img src="./img/btn-4.png" alt="Ayuda Profesional" />
                        </Link>
                        <p>Ayuda Profesional</p>
                    </li>

                    <li>
                        <Link to="./AuraIA">
                            <img src="./img/btn-5.png" alt="Aura IA" />
                        </Link>
                        <p>Aura IA</p>
                    </li>
                </ol>
            </div>
            <br></br>
            <div className="container">
                <h3>Te puede interesar</h3>
                <br></br>
                <div className="container">

                    <div className="entrada">
                        <h4>Como combatir la anorexia</h4>
                        <p>Un breve articulo de como...</p>
                    </div>

                    <div className="entrada">
                        <h4>Como encontrar la felicidad</h4>
                        <p>Un breve articulo de como...</p>
                    </div>

                    <div className="entrada">
                        <h4>Que hago si me siento vacio</h4>
                        <p>Un breve articulo de como...</p>
                    </div>

                </div>

            </div>
            <style>
                {`
                    .gall {
                        width: 100%;
                        overflow-x: auto; /* Permitir scroll horizontal */
                        white-space: nowrap; /* Evita que los elementos se rompan a la siguiente línea */
                    }

                    .gall ol {
                        display: inline-flex; /* Muestra los elementos uno al lado del otro */
                        padding: 0;
                        margin: 0;
                        list-style: none;
                    }

                    .gall ol li {
                        margin-right: 10px;
                        text-align: center;
                        display: inline-block; /* Los elementos se alinean horizontalmente */
                    }

                    img {
                        width: 130px;
                        border-radius: 8px;
                    }

                    /* Texto debajo de las imágenes */
                    p {
                        font-size: 14px;
                        margin-top: 8px;
                        color: #333;
                    }

                    .entrada{
                        background-color: #cacaca;
                        padding: 3.5%;
                        border-radius: 10px;
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </>
        );
    }

    return <div>You are not authenticated.</div>;
};
