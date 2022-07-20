import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({stock, inicial, onAdd}) => {

    const [count, setCount] = useState(inicial);

    const aumentar = () => {
        setCount(count + 1);
    };

    const disminuir = () => {
        setCount(valAnt => valAnt > 0 ? count - 1 : count);
    };

    const validarStock = () => {
        if (count <= stock) {
            onAdd(count);
            alert('Se agrego la compra al carrito');
        }
        else {
            alert (`No se puede agregar al carrito, ${count} supera el stock permitido`)
        }
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={disminuir}>-</button>
            <button onClick={aumentar}>+</button>
            {" "} | {" "}
            <Link className="btn btn-outline-danger" to="/carrito" onClick={validarStock} >Agregar al Carrito</Link>
        </div>
    );
};

export default ItemCount;