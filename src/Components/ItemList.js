import React from 'react'
import Item from './Item'

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