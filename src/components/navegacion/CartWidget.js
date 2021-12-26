export function CartWidget(props) {
    const { numOfItems } = props
    return (
    <div className= " .car-widget">
       <i class="bi bi-cart3"></i>
       <spam> {numOfItems} </spam>
    </div>
    )
}
