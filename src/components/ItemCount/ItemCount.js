import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial)


    const increment = () => {
        if (count < stock ){
            setCount (prev => prev + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount (prev => prev - 1)
        }
            
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment()}> Sumar producto </button>
            <button onClick={() => decrement()}> Restar producto </button>
            <button onClick={() => onAdd(count)} disabled={!count}> Agregar al carrito </button>
        </div>
    )

}

export default ItemCount;