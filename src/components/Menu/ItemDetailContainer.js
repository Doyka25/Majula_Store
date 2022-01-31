import React,{useEffect,useState} from "react";
import Productos from "../json/Productos.json"
import ItemDetail from "../Menu/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams;
    const [item, setItem] = useState ([]);

    useEffect(() => {
        setTimeout(() =>{
            setItem(
                Productos.filter(item => item.id === parseInt(id))
            )
        },2000);
    },[]);
    if (item.length === 0) {
        return <p>reconociendo productos...</p>;
    } else 
    {
        return (
            <ItemDetail item={item} />
        )
    }
}
export default ItemDetailContainer