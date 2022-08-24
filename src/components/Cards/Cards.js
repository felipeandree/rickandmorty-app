import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((item) => {
      let { id, name, species, image, location, status } = item;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'
        >
          <div className={` ${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt='' className={`${styles.img} img-fluid`} />

            <div style={{ padding: "10px" }} className='card-body'>
              <h5 className='fs-4 fw-bold mb-4'>{name}</h5>
              <p className='fs-6'>Specie: {species} </p>
              <p className='fs-6'>Local: {location.name} </p>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                (status = "Morto"),
                (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger `}
                  >
                    {status}
                  </div>
                )
              );
            } else if (status === "Alive") {
              return (
                (status = "Vivo"),
                (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success `}
                  >
                    {status}
                  </div>
                )
              );
            } else {
              return (
                (status = "Desconhecido"),
                (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                )
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "Não encontramos o que procura:/";
  }
  return <>{display}</>;
};

export default Cards;
