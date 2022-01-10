import { useEffect, useState } from 'react'
import './App.css'
import { ItemList} from './ItemList'

const myPromise = new Promise (
    (resolve => {
        setTimeout(() => {
          const products = [{
            sku: 'sku0001',
            nombre: 'Collar Corazón',
            description: 'Hecho en acero quirúrgico',
            stock: 10,
            precio: s/.43,
          },{
            sku: 'sku0002',
            nombre: 'Aretes largos Party',
            description: 'Hecho en acero quirúrgico',
            stock: 5,
            precio: s/.25,
          }]
          
          resolve(products)
        }, 3000)
     })
)
async function main() {
    const products = await myPromise
    console.log(products)
  }
export function ItemListContainer () {
    const [products, setProducts] = useState
    useEffect (() => {
        myPromise.then (products => {
            setProduct (products)
        })

    },[])
    return <ItemList products={products} />
}
