import React from 'react'

//Recibe id, titulo, descripcion, precio e imagen y agrega un div con la card y los datos de cada articulo

const Item = ({id,titulo,descripcion,precio,images}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card" >
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>$ {precio}</p>
            <img src={images} alt={titulo} />
            <a href={"/" + id}>ver detalles</a>
        </div>
    </div>
  )
}

export default Item