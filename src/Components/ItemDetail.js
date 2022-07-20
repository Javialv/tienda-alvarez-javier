import React from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  const ventas = [];

  const insertarVentaNueva = (n) =>{

    ventas.push({
      idProducto: item.id,
      cantidad: n,
      total: (n * item.precio)
    })
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card" >
            <h1>{item.descripcion}</h1>
            <img src={item.images} alt={item.titulo} />
            <p>Descripcion del producto: {item.descripcion}</p>
            <p>Precio: $ {item.precio}</p>
        </div>

        <ItemCount 
          stock={item.stock} 
            inicial={1} 
            onAdd={(n) =>{
              insertarVentaNueva(n);
          }} 
        />
    </div>
  )
}

export default ItemDetail