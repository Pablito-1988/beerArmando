import { useContext } from "react";
import { useEffect, useState } from "react";
import {CartContext} from "../context/cartContext.js";
import ItemQty from "./ItemQty.js";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const {cart, clear,removeItem } = useContext(CartContext);
    
    const [number,setNumber] = useState(cart.length)
    console.log(cart)
    useEffect(()=>{
        setNumber(cart.length)
    },[cart])
    
    return (
        <>
            <div className="cart-widget">
                <div className="dropdown">
                <Link to={'/cart'} className="dropbtn"><i className="fas fa-shopping-cart"></i></Link>
                {cart.length > 0 ?<div className="cartdropdown-content">
                    <p className='previewTitle'>Esto es lo que tenes en el carrito hasta ahora:</p>
                    <ul> 

                        {cart.map((item,index)=>{ 
                            return <li className="dropbtn" >
                                <div className='cartPreview'>
                                    <img className='cartListImg' src={item.Producto.Poster} alt="" />
                                    <div className='previewdata'>
                                    <p>Titulo: {item.Producto.Title}</p>
                                    <p>Cantidad de dias: {item.Cantidad}.</p>
                                    <p>Precio: ${item.Precio},00</p>
                                    <button className='deleteObjetPreview' onClick={()=>removeItem(item.Producto.id)}>Eliminar del carrito    <i id='trash' className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                                </li>
                        })}
                    </ul>
                </div>:''}
                
                </div>
               <ItemQty number ={number}/> 
            </div>
        </>
    )
}

export default CartWidget
