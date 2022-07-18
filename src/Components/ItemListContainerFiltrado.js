import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import productos from "../productos.json";
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

const ItemListContainerFiltrado = () => {

  let params = useParams();

  let productosFiltrados = [];

  productos.map((el) => {
    if (el.categoria.includes(params.categoria1.toString()) 
        && el.categoria.includes(params.categoria2.toString())) {
      productosFiltrados.push(el);
    }
  })

  const [loading, setLoading] = useState (true);

  useEffect(() => {
    setTimeout( ()=> {
      setLoading(false);
    }, 2000);
  }) 

  return ( 
    <div>
      <NavBar />
      {loading? (
        <img src = "https://c.tenor.com/hQz0Kl373E8AAAAj/loading-waiting.gif" width="70px" height = "70px" alt="Cargando" />
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <ItemList items={productosFiltrados} />
          </div>
        </>
      )}
    </div> 
  )
}

export default ItemListContainerFiltrado