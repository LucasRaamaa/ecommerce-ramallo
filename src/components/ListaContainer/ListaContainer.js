import ItemsList from "../ItemList/ItemsList";
import { getItems, getCategoryById } from "../../MockAsynk";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const ListaContainer = ({greeting}) =>{


    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(()=>{
        if(categoryId){
            getCategoryById(categoryId)
            .then(response =>{
                setItems(response)
            })
            .catch(error =>{
                console.log(error)
            })
        }else{
        getItems()
            .then(response =>{
                setItems(response)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    },[categoryId])

    return (
        <div>
             <h1> {greeting} </h1> 
             <ItemsList items={items} />
        </div>
    )
}

export default ListaContainer;