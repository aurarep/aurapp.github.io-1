import React, { useState } from "react";

const Buscador = () => {
    // Estado para almacenar los elementos y el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Lista de elementos que queremos filtrar
    const elementos = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];

    // Filtra los elementos basados en el término de búsqueda
    const elementosFiltrados = elementos.filter((elemento) =>
        elemento.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <div className="buscador">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
        </div>

        <style jsx>{`
            .buscador {
                padding: 20px;
                max-width: 400px;
                margin: 0 auto;
                text-align: center;
            }

            input[type="text"] {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                margin-bottom: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                padding: 10px;
                background-color: #f4f4f4;
                margin-bottom: 10px;
                border-radius: 5px;
                font-size: 18px;
                border: 1px solid #ddd;
            }
        `}</style>
    </>
    );
};

export default Buscador;
