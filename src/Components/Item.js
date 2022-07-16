import React from 'react';
import { Link } from "react-router-dom";

//Recibe id, titulo, descripcion, precio e imagen y agrega un div con la card y los datos de cada articulo

const Item = ({id,titulo,precio,images}) => {
  return (
      <div className="col">
        <div className="card">
          <img src={images} className="card-img-top" alt={titulo}/>
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">Precio: $ {precio}</p>
            <Link className="card-link" to={"producto/" + id}>Ver detalles</Link> | {" "}
            <a type="button" className="btn btn-outline-danger" id={id}>Agregar al Carrito</a>
          </div>
        </div>
      </div>
  )
}

export default Item