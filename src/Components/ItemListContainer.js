import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import productos from "../productos.json";

const ItemListContainer = () => {

  const [loading, setLoading] = useState (true);

  useEffect(() => {
    setTimeout( ()=> {
      setLoading(false);
    }, 2000);
  })

  return ( 
    <div>
      {loading? (
        <img src = "https://c.tenor.com/hQz0Kl373E8AAAAj/loading-waiting.gif" width="70px" height = "70px" alt="Cargando" />
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <ItemList items={productos} />
          </div>
        </>
      )}
    </div> 
  )
}

export default ItemListContainer