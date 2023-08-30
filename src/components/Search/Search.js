import React from "react"
import styles from "./Search.module.scss"

// Función para buscar por Id la Ubicación.
const Search = ({setSearch, setBackgroundColor}) => {
  // Función para manejar el evento submit del formulario y hacer validaciones antes de ciertas acciones.
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const inputValue = e.target.form.querySelector("input").value;
    // Valida que el valor ingresado sea un número entre 1 y 126.
    if (inputValue >= 1 && inputValue <= 126) {
      setSearch(inputValue);
      
      let newBackgroundColor = '';
      // Cambia el color de fondo dependiendo del valor ingresado de acuerdo con los requerimientos de la prueba.
      if (inputValue < 50) {
        newBackgroundColor = '#CCFFD5';
      } else if (inputValue >= 50 && inputValue < 80) {
        newBackgroundColor = '#CCFFFF';
      } else {
        newBackgroundColor = '#FFCCCC';
      }

      setBackgroundColor(newBackgroundColor);
    } else {
      alert("Sólo se permiten los números del 1 al 126");
    }
  };  
  
  return (
    // Formulario para buscar por Id la Ubicación.
      <form className="d-flex justify-content-center gap-4 mb-5">
          <input placeholder='Ingresa el Id de la ubicación...' type="number" className={styles.input}/>
          <button onClick={handleSubmit} className='btn btn-primary'>Buscar</button>
      </form>
    )
  }

export default Search
