import React from "react";
import {Button, Modal} from "react-bootstrap";
import styles from './CartaDetalles.module.scss'

// Componente que muestra los detalles de una carta.
const CartaDetalles = ({ carta, showModal, setShowModal }) => {
  // Valida si hay una carta para mostrar.
  if (!carta) {
    return null;
  }
  // Retorna el componente Modal de Bootstrap.
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del personaje</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className={styles.cartas}>
            <img src={carta.image} alt= {`Imagen de: ${carta.name} del tipo ${carta.type} y genero ${carta.gender}`} className={`${styles.img} img-fluid`} />
            <div className={styles.contenido}>
              <div className="fs-6 fw-bold">Nombre:</div>
                <div>{carta.name}</div>
                <div className="">
                <div className="fs-6 fw-bold">Tipo:</div>
                <div>{carta.type}</div>
                <div className="fs-6 fw-bold">Genero:</div>
                <div>{carta.gender}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if (carta.status === "Dead") {
              return <div className={`${styles.badge} position-absolute badge bg-danger`}>{carta.status}</div>
            }
            else if(carta.status === "Alive"){
              return <div className={`${styles.badge} position-absolute badge bg-success`}>{carta.status}</div>
            }else{
              return <div className={`${styles.badge} position-absolute badge bg-secondary`}>{carta.status}</div>
            }
          })()}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartaDetalles;