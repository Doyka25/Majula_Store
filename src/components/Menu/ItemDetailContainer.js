import { ItemDetail} from "./Item";

function fetchItems(){
    return new promise ((resolve)=>{
        resolve({})
    })
}
export function ItemDetailContainer () {
    const [item, setItem] = React.useState ()

React.useEffect (() => {
async function populateState() {
    
const data = await fecthItem()

setItem (data)
}
populateState()
}, [])
console.log({ item })

return <ItemDetail item={item} />
}
