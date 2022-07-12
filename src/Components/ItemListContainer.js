import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import productos from "../productos.json";

const ItemListContainer = ({greeting}) => {

  return ( <div>
    {greeting}
    <ItemCount 
      stock={5} 
      inicial={1} 
      onAdd={(n) => alert(`Se agregaron ${n} productos al carrito`)} />
    <ItemList items={productos} />
    </div> 
  )
}

export default ItemListContainer