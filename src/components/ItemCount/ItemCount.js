import "./style.css";
import { useState } from "react";
import Succes from "./Succes";

const ItemCount = (props) => {
    let stock = Number(props.stock)
    let initial = Number(props.initial)
    let [qty,setQty]=useState(initial)
    let [showSucces,setShowSucces]=useState(false)
    
    
   function qtyAdd(){
        if(qty>=0 && qty<stock){
            setQty(qty+1)
        }
   }
   function qtySubs(){
        if(qty>=1){
            setQty(qty-1)
        }
   } 
   function onAdd (){
       if(qty===1){
           alert(`se agrego ${qty} producto al carrito`);
           setShowSucces(true)
       }else if ( qty>1){
        alert(`se agregaron ${qty} productos al carrito`);
        setShowSucces(true)
       }
       else{
           alert('por el momento no contamos con stock')
           
       }
   } 
     
  return (
    <>
      <div className="formContainer">
        <div className="controls">
          <p className="productName">Camisa tiger</p>
          <div className="buttons">
            <button onClick={qtySubs} className="controlButtonAdd">-</button>
            <p className="qty">{qty}</p>
            <button onClick={qtyAdd} className="controlButtonSub">+</button>           
          </div>
          <button className='addButton' onClick={onAdd} >Agregar al carrito {showSucces && <Succes/>}</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
