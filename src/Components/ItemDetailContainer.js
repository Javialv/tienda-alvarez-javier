import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';
import productos from "../productos.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    function getItem () {

        const asyncMockProducto = new Promise(function (resolve) {

            setTimeout(() => {
                resolve(productos[1])
            }, 3000)
            
        })
        asyncMockProducto.then((item)=> setItem(item));

    }

    getItem();
    
    return (
        
    <div>
       <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer