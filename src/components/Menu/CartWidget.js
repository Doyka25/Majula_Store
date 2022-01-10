import { CartWidget } from "./CartWidget"
import './App.css'

export function CartWidget (props) {
    const { numOfItems } = props
    return (
    <div className= " .car-widget">
       <i className="bi bi-cart3"></i>
      <Spam> {numOfItems} </Spam>
    </div>
    )
}
