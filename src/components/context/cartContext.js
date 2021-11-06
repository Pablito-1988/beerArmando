
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const CustomeComponent =({children}) =>{

    const [cart, setCart] = useState([])
    
    //agrega elementos al carrito
    const addItem = (product,cantidad, precio) =>{
        const item = isInCart(product)
       if(item>=0){
        setCart([...cart,{Producto:product,Cantidad:cantidad, Precio:precio}])
       }
            
        
       
    }
    //elmina elementos del carrito
    const removeItem = (itemId) =>{
        setCart(cart.filter((item,index)=> item.Producto.imdbID !== itemId))
        console.log(itemId)

    }
    //elimina todos los elementos del carrito 
    const clear=()=>{
        setCart([])
    }
    //chequea que si el producto ya esta en el carrito
    const isInCart = (product) =>{
        const existe = cart.filter(item => item.Producto.imdbID === product.imdbID)
        return existe
    }



    const cartContextValue = {
         cart : cart,
         addItem : addItem,
         clear : clear,
         removeItem : removeItem,
    } 
    return(
        <Provider value={cartContextValue}>
            {children}
        </Provider>    
    )
}

export default CustomeComponent