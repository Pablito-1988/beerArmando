import { useContext } from "react";
import { useEffect, useState } from "react";
import {CartContext} from "../context/cartContext.js";
import ItemQty from "./ItemQty.js";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const {cart} = useContext(CartContext);
    
    const [number,setNumber] = useState(cart.length)
   
    useEffect(()=>{
        setNumber(cart.length)
    },[cart])
    
    return (
        <>
            <div className="cart-widget">
                <Link to={'/cart'} className="dropbtn"><i className="fas fa-shopping-cart"></i></Link>
               <ItemQty number ={number}/> 
            </div>
        </>
    )
}

export default CartWidget
