import React from "react";
import styles from "./Cards.module.scss";

const Cards = ({ results = [] }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      let { id, name, species, image, location, status } = item;
      return (
        <div key={id} className='col-4 mb-4 position-relative'>
          <div className={styles.cards}>
            <img src={image} alt='' className={`${styles.img} img-fluid`} />

            <div style={{ padding: "10px" }} className='card-body'>
              <h5 className='fs-4 fw-bold mb-4'>{name}</h5>
              <p className='fs-6'>
                {/* {()=>{
                if(species === "Human"){
                  return(
                    species = "Humano"
                  )
                } else if(species = "Alien") {
                  return( 
                    species = "Alienígena"
                  )
                } else {
                  return( 
                    species = "Fantasma"
                  )
                }
              }} */}
              Specie: {species} </p>
              <p className='fs-6'>Local: {location.name} </p>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                status = "Morto" ,
                <div
                  className={`${styles.badge} position-absolute badge bg-danger `}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                status = "Vivo" ,
                <div
                  className={`${styles.badge} position-absolute badge bg-success `}
                >
                  {status}
                </div>
              );
            } else {
              return (
                status = "Desconhecido" ,
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "Não encontramos o que procura:/";
  }
  return <>{display}</>;
};

export default Cards;
