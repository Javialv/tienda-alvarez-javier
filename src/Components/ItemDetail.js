import React from 'react'

const ItemDetail = ({ item }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card" >
            <h1>{item.descripcion}</h1>
            <img src={item.images} alt={item.titulo} />
            <p>Descripcion del producto: {item.descripcion}</p>
            <p>Precio: $ {item.precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail