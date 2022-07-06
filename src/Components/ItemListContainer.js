import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return ( <div>
    {greeting}
    <ItemCount 
      stock={5} 
      inicial={1} 
      onAdd={(n) => alert(`Se agregaron ${n} productos al carrito`)} />
    </div> 
  )
}

export default ItemListContainer