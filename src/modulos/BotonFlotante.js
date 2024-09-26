import React from "react";
import { Link } from "react-router-dom";

const BotonFlotante = () => {
    return (
        <>
        <Link to="/"> {/* La ruta es '/' para HomePage */}
            <button className="boton-flotante">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </Link>
        <style>
            {`
            .boton-flotante {
                position: fixed;
                bottom: 20px; 
                right: 20px; 
                background-color: var(--col-1); 
                color: white;
                border: none;
                border-radius: 50%; 
                width: 60px;
                height: 60px; 
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                cursor: pointer;
                z-index: 1000; 
            }

            .boton-flotante:hover {
                background-color: #0056b3; 
            }
            `}
        </style>
        </>
    );
};

export default BotonFlotante;
