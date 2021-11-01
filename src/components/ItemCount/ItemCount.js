import "./style.css";
import { useState } from "react";
import Succes from "./Succes";

const ItemCount = (props) => {
  let stock = Number(props.stock);
  let initial = Number(props.initial);
  let quote = props.quote;
  let title = props.title;
  let movieTitle = props.movieTitle;
  let [qty, setQty] = useState(initial);
  let [showSucces, setShowSucces] = useState(false);
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
  function onAdd() {
    if (qty === 1) {
      alert(`gracias por alguila ${movieTitle} por ${qty} día`);
      setShowSucces(true);
    } else if (qty > 1) {
      alert(`gracias por alguila ${movieTitle} por ${qty} dias`);
      setShowSucces(true);
    } else {
      alert("por el momento no contamos con stock");
    }
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
          <spam className="price">Precio por día: $80.00</spam>
          <h4 className="totalPrice">Total: ${price}.00</h4>
          <button className="addButton" onClick={onAdd}>
            {quote} {showSucces && <Succes />}
          </button>         
        </div>
      </div>
    </>
  );
};

export default ItemCount;
