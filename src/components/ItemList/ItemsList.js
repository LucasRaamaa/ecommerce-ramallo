import Items from "../Items/Items";
import './ItemsList.css'

const ItemsList = ( {items} ) => {

    return (
        <div className = "productos">
                {
                    items.map(items =>(
                        <Items key = {items.id} items = {items} />    
                ))
            }
        </div>
    )
}

export default ItemsList;