import { useState } from 'react';

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
            onAdd(count)
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
            <button onClick={validarStock}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;