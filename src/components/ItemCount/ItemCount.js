import "./style.css";
import { useState } from "react";
/* import Succes from "./Succes"; */
import { Link } from "react-router-dom";

const ItemCount = (props) => {
  let stock = Number(props.stock);
  let initial = Number(props.initial);
  let quote = props.quote;
  let title = props.title;
  let [qty, setQty] = useState(initial);
  let [price, setPrice] = useState(80);

  function qtyAdd() {
    if (qty >= 0 && qty < stock) {
      setQty(qty + 1);
    }
    setPrice(price + 80);
  }
  function qtySubs() {
    if (qty >= 1) {
      setQty(qty - 1);
    }
    setPrice(price - 80);
  }
    
  

  return (
    <>
      <div className="formContainer">
        <div className="controls">
          <div className="upperControl">
            <p className="productName">{title}</p>
            <div className="buttons">
              <button onClick={qtySubs} className="controlButtonAdd">
                -
              </button>
              <p className="qty">{qty}</p>
              <button onClick={qtyAdd} className="controlButtonSub">
                +
              </button>
            </div>
          </div>
          <p className="price">Precio por día: $80.00</p>
          <h4 className="totalPrice">Total: ${price}.00</h4>
           <Link  className="linkToCart" to={'/cart'}><button className="addButton" onClick={()=>props.onClick({qty})}>
            {quote} 
          </button></Link>     
        </div>
      </div>
    </>
  );
};

export default ItemCount;
