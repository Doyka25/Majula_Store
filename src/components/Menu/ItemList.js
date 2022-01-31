import Item from './Item'

const ItemList = ({param}) => {
  return (
    <>
    { param && param.length > 0 ?
    param.map(item => {
      return <div key={item.id}>
        <Item item={item} />
      </div>
    })
    :"Error al recibir la lista de productos..."}
    </>
  )
}
export default ItemList