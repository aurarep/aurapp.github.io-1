import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Importamos la configuración de Firebase
import { useAuth0 } from "@auth0/auth0-react"; // Para obtener la información del usuario
import MenuBar from "../modulos/MenuBar";
import BotonFlotante from "../modulos/BotonFlotante";

const Diario = () => {
  const [text, setText] = useState(""); // Estado para el texto del diario
  const [feel, setFeel] = useState(""); // Estado para el sentimiento
  const [entradas, setEntradas] = useState([]); // Estado para almacenar las entradas
  const { user, isAuthenticated } = useAuth0(); // Obtenemos la información del usuario autenticado

  // Guardar un escrito
  const handleSave = async () => {
    if (isAuthenticated) {
      try {
        // Subir el escrito a Firestore
        await addDoc(collection(db, "entradas"), {
          uid: user.sub,  // Vinculamos el escrito con el ID del usuario
          texto: text,    // Texto del diario
          sentimiento: feel, // Sentimiento de la persona
          fecha: new Date() // Fecha actual
        });
        alert("¡Escrito guardado!");
        setText(""); // Limpiar el campo de texto
        setFeel(""); // Limpiar el campo de sentimiento
        fetchEntradas(); // Volver a cargar las entradas
      } catch (e) {
        console.error("Error al guardar el escrito: ", e);
      }
    }
  };

  // Función para obtener las entradas guardadas del usuario
  const fetchEntradas = async () => {
    if (isAuthenticated) {
      const q = query(collection(db, "entradas"), where("uid", "==", user.sub)); // Consulta por entradas del usuario
      const querySnapshot = await getDocs(q);
      const fetchedEntradas = querySnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data() // Incluimos todos los datos de la entrada
      }));
      setEntradas(fetchedEntradas); // Actualizamos el estado con las entradas
    }
  };

  // Función para eliminar una entrada
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "entradas", id)); // Eliminamos la entrada de Firestore
      alert("Entrada eliminada");
      fetchEntradas(); // Volver a cargar las entradas
    } catch (e) {
      console.error("Error al eliminar la entrada: ", e);
    }
  };

  // Cargar las entradas al cargar el componente
  useEffect(() => {
    fetchEntradas(); // Obtener las entradas cuando el componente se monta
  }, [isAuthenticated]);

  return (
    <>
    <MenuBar/>
    <div>
      <center>
        <h1>Aura Journal</h1>

        <br></br>
        <textarea
          value={text} // Asignamos el estado del texto
          onChange={(e) => setText(e.target.value)} // Actualizamos el estado al escribir
          placeholder="Escribe aquí tu diario..."
        />
        <br></br><br></br>
        <textarea
          value={feel} // Asignamos el estado del sentimiento
          onChange={(e) => setFeel(e.target.value)} // Actualizamos el estado del sentimiento
          placeholder="¿Cómo te sientes?"
        />
        <br></br><br></br>
        <button onClick={handleSave}>Guardar</button>
      </center>
    </div>
    <br></br>
    <section className="container">
      <h2>Últimos sentimientos</h2>
      <div>
        {entradas.length > 0 ? (
          entradas.map((entrada) => (
            <div key={entrada.id} className="entrada">
              <p><strong>Texto:</strong> {entrada.texto}</p>
              <p><strong>Sentimiento:</strong> {entrada.sentimiento}</p>
              <p><strong>Fecha:</strong> {new Date(entrada.fecha.seconds * 1000).toLocaleString()}</p>
              <button onClick={() => handleDelete(entrada.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No tienes entradas guardadas.</p>
        )}
      </div>
    </section>
    <BotonFlotante/>
    </>
  );
};

export default Diario;
