import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const MenuBar = () => {
    return (
        <>
        <section className="MenuBar">
            <center>
                <Link to="/"><h3>Aura</h3></Link>
            </center>
            </section>
            <style>
                {`
                        .MenuBar{
                            background: var(--col-2);
                            padding-top: 3%;
                            padding-bottom: 3%;
                            margin-bottom: 5%;
                            color: #fff;
                        }
                       
                    `}
            </style>
        </>
    );
}
export default MenuBar;