import { useEffect, useState } from "react";
import { getItemsById } from "../../MockAsynk";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({greeting}) => {

    const [items, setItems] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(()=>{
        getItemsById( itemId )
            .then(response =>{
                setItems(response)
             })
             .catch(error =>{
                 console.log(error)
             })
             .finally(() => {
                setIsLoading(false)
             })
     },[ itemId ])

     if(isLoading) {
        return <h1>Cargando Productos...</h1>
     }
     
     

     return (
         <div>
              <h1> {greeting} </h1> 
              <ItemDetail {...items} />
         </div>
     )
}

export default ItemDetailContainer;

