import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import productos from "../productos.json";

const ItemListContainer = () => {

  const [loading, setLoading] = useState (true);

  useEffect(() => {
    setTimeout( ()=> {
      setLoading(false);
    }, 3000);
  })

  return ( 
    <div>
      {loading? (
        <img src = "https://c.tenor.com/ZseF5Ruyd_UAAAAC/cargando-loading.gif" />
      ) : (
        <>
          <ItemCount stock={5} inicial={1} onAdd={(n) => alert(`Se agregaron ${n} productos al carrito`)} />

          <ItemList items={productos} />
        </>
      )}
    </div> 
  )
}

export default ItemListContainer