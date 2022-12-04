import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, img, tittle, text, stock}) => {
    const handleOnAdd = (quantity) => {
        if (quantity !== 0){
              console.log ('Se agrego al carrito ' + quantity)
        }
    }

    return (
        <div className="items">
            <img className= "img-prod" src={img} alt={tittle} />
            <h2>{tittle}</h2>
            <p>{text}</p>
            { stock > 0 ? <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} /> : <h2> No hay Stock </h2> }
        </div>
    )
}

export default ItemDetail;