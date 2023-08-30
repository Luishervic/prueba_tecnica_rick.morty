import React from "react"
import styles from './Cartas.module.scss'
// Función para representar las cartas de los personajes.
const Cartas = ({results, openModal }) => {
    let imprimir;
    // Valida si hay resultados para representarlos.
    if (results) {
      imprimir = results.map(x=>{
        // Extraigo los datos que me interesan para la carta.
        let{id, name, status, image, species, origin, episode, type, gender} = x;
        
        // Obtiene el número del episodio de la url (solo el numero).
        let episodioUno = '';
        let episodioDos = '';
        let episodioTres = '';
        
        if (episode.length >= 1) {
          episodioUno = episode[0].split('/').slice(-1)[0];
        }
        if (episode.length >= 2) {
          episodioDos = episode[1].split('/').slice(-1)[0];
        }
        if (episode.length >= 3) {
          episodioTres = episode[2].split('/').slice(-1)[0];
        }

        return(
        
        <div key={id} className="col-3 mb-4 position-relative" onClick={() => openModal(x)}>
          <div className={styles.cartas}>
            <img src={image} alt= {`Imagen de: ${name} del tipo ${type} y genero ${gender}`} className={`${styles.img} img-fluid`} />
            <div className={styles.contenido}>
              <div className="fs-6 fw-bold">Nombre:</div>
                <div>{name}</div>
                <div className="">
                <div className="fs-6 fw-bold">Especie:</div>
                <div>{species}</div>
                <div className="fs-6 fw-bold">Origen: </div>
                <div>{origin.name}</div>
                <div className="fs-6 fw-bold">Episodios: </div>
                <div>{episodioUno} {episodioDos} {episodioTres}</div>
              </div>
            </div>
          </div>
          {(()=>{
            // Valida el estado del personaje para mostrar el badge correspondiente.
            if (status === "Dead") {
              return <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
            }
            else if(status === "Alive"){
              return <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
            }else{
              return <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
            }
          })()}
          
        </div>
        )
      });
    }else{
      // Si no hay resultados, muestra el mensaje.
      imprimir = "Ningun personaje encontrado...";
    }
    
    
    return (<>{imprimir}</>);
};

export default Cartas;
