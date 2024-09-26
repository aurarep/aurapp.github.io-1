// Función pura para obtener el saludo
const obtenerSaludo = () => {
  const ahora = new Date();
  const hora = ahora.getHours();

  if (hora >= 5 && hora < 12) {
    return 'Buenos días, ';
  } else if (hora >= 12 && hora < 20) {
    return 'Buenas tardes, ';
  } else {
    return 'Buenas noches, ';
  }
};

// Exporta la función en lugar del componente si solo necesitas la cadena
export default obtenerSaludo;
