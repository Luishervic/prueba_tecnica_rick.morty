import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";



import Search from "./components/Search/Search";
import Cartas from "./components/Cartas/Cartas";
import CartaDetalles from "./components/Cartas/CartaDetalles";


function App() {
  
  let [fetchedData, updatedFetchedData] = useState([]);
  let [results, setResults] = useState([]);
  let [search, setSearch] = useState(1);
  let [backgroundColor, setBackgroundColor] = useState('#CCFFD5');

  // API para obtener los datos de la Ubicación.
  let api = `https://rickandmortyapi.com/api/location/${search}`;

  // Obtiene los datos de la Ubicación.
  useEffect(() => {
    (async function(){
      let datos = await fetch(api).then(res => res.json());
      // Actualiza el estado de fetchedData.
      updatedFetchedData(datos);
      // Obtiene los datos de los personajes de la Ubicación.
      let a = await Promise.all(
        datos.residents.map((x)=>{
          return fetch(x).then((res)=> res.json());
        })
      );
      // Ordena los resultados por nombre antes de representarlos.
      a.sort((cartaA, cartaB) => cartaA.name.localeCompare(cartaB.name));
      // Actualiza el estado de results.
      setResults(a);
    })();
    }, [api]);
  
  // Estado para controlar si mostrar o no el modal
  const [showModal, setShowModal] = useState(false);

  // Estado para almacenar los datos de la carta seleccionada
  const [selectedCarta, setSelectedCarta] = useState(null);

  // Función para abrir el modal y establecer la carta seleccionada
  const openModal = (carta) => {
    setSelectedCarta(carta);
    setShowModal(true);
  };

  
  return (
    <div className="App" style={{backgroundColor}}>
      <h1 className="text-center mb-3">Personajes</h1>
      <Search setSearch={setSearch} setBackgroundColor={setBackgroundColor}/>
      <h3 className="text-center  fs-4 fw-bold ">Nombre de la ubicación: {fetchedData.name}</h3>
      <h4 className="text-center fs-6 mb-4">Tipo: {fetchedData.type}</h4>
      <div className="container">
        <div className="row">
            <Cartas results ={results.slice(0,5)} openModal={openModal}/>
            <CartaDetalles
              carta={selectedCarta}
              showModal={showModal}
              setShowModal={setShowModal}/>
        </div>
      </div>
  </div>
  );
}

export default App;
