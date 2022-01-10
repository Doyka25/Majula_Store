import { Item } from './Item'

export function ItemList ({ products}) {
    [{
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
    return (
        <div>
     
            {products.map (product => {
 return <Item key ={product.id} product ={product} />

            })}
        </div>
    )
}