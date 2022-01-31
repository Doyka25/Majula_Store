import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Productos from "../../json/Productos.json";

const ItemListContainer = ( param ) => {
  const { categoryId } = useParams()
  const [items,setItems] = useState([])

  useEffect(() => {
    setTimeout(()=>{
      if (categoryId){
        const Productos_Seleccionados = Productos.filter(producto => producto.category === categoryId)
        console.log(Productos_Seleccionados)
        setItems (Productos_Seleccionados)
      } else {
        setItems(Productos);
      }
    }, 2000);

  }, [categoryId]);
  if (items.length === 0){
    return <p>Cargando productos...</p>; 
  } else {
    return (
      <>
      <ItemList param ={items} />
      </>
    )
  }
}
export default ItemListContainer;