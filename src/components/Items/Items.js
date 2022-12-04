import './Items.css'
import { Link } from 'react-router-dom'

const Items = ( {items} ) => {
    
    return (
        <div className="items">
            <img className= "img-prod" src={items.img} alt={items.tittle}/>
            <h2>{items.tittle}</h2>
            <p>{items.category}</p>
            <p>{items.text}</p>
            <Link to = { `/items/${items.id}` }>Ver detalles </Link>
        </div>
    )
}

export default Items;