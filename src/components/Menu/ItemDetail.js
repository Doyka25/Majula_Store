import "./ItemDetail.css"
import ItemCount from "../Menu/ItemCount"
import { Link } from 'react-router-dom';
import { Button }  from "react-bootstrap"

const ItemDetail = ({ item }) => {
  const { id, branch,title,description1,description2,price,pictureUrl,stock,category } = item[0];
  return (
    <div className="itemDetail" key={id} id={id}>
      <div className="itemDetail__info" >
        <h2>
          {branch} . {title}
       </h2>
        <img className="itemDetail__img" src={pictureUrl} alt="" />
        <div className="itemDetail__description">
          <ul>
            <li key="1" className="itemDetail__li">{description1}</li>
            <li key="2" className="itemDetail__li">{description2}</li>
          </ul>

<h3 className="itemDetail__price">Precio:{price}</h3>
<div className="itemDetail__Count">
  <ItemCount qty={1} stock={10} />
</div>
<div>
  <Button>
    add to Cart
  </Button>
</div>
<ul>
  <li className="itemDetail__li">
    <Link to={'/'}> Regresar</Link>
  </li>
</ul>
        </div>
      </div>

    </div>
  )
}
export default ItemDetail