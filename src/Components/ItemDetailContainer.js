import React, { useEffect, useState } from 'react';
import productos from "../productos.json";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    let params = useParams();

    const [item, setItem] = useState([]);

    function getItem () {

        const asyncMockProducto = new Promise(function (resolve) {

            setTimeout(() => {
                resolve(productos[params.id])
            })
            
        })
        asyncMockProducto.then((item)=> setItem(item));

    }

    useEffect (()=> {
        getItem()
    }, []);
    

    return (
        
    <div>
       <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer