import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import {CartContext} from "../context/cartContext.js";
import ItemQty from "./ItemQty.js";


const CartWidget = () => {

    const {cart} = useContext(CartContext);
    const [number,setNuber]= useState(cart.length)
    
    

    useEffect(()=>{
        setNuber(cart.length)
        

    },[cart])
    
    return (
        <>
            <div className="cart-widget">
                <button  className="dropbtn"><i className="fas fa-shopping-cart"></i></button>
               <ItemQty number ={number}/> 
            </div>
        </>
    )
}

export default CartWidget
