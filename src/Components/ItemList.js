import React from 'react'
import Item from './Item'


//Recorre el arreglo pasado por props "items" que serian los productos hace un map y uno por uno llama a Item para que lo muestre

const ItemList = ({ items }) => {
  return (
    <div>
        {items.map((el) => (
            <Item 
                id={el.id} 
                titulo={el.titulo}
                descripcion={el.descripcion}
                precio={el.precio}
                stock={el.stock}
                categoria={el.categoria}
                marca={el.marca}
                images={el.images}
                key={el.id}
            />
        ))}
    </div>
  )
}

export default ItemList