
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const CustomeComponent =({children}) =>{

    const [cart, setCart] = useState([])
    const [word, setWord] = useState("space")
    
    
    //agrega elementos al carrito
    const addItem = (product,cantidad, precio) =>{
        const item = isInCart(product)
       if(item>=0){
        setCart([...cart,{Producto:product,Cantidad:cantidad, Precio:precio}])
       }
            
        
       
    }
    //elmina elementos del carrito
    const removeItem = (itemId) =>{
        setCart(cart.filter((item)=> item.Producto.imdbID !== itemId))
        

    }
    //elimina todos los elementos del carrito 
    const clear=()=>{
        setCart([])
    }
    //chequea que si el pr
    const isInCart = (product) =>{
        const existe = cart.filter(item => item.Producto.imdbID === product.imdbID)
        return existe
    }
    const search = (word) =>{
        setWord(word)
        

    }



    const cartContextValue = {
         cart : cart,
         word : word,
         addItem : addItem,
         clear : clear,
         removeItem : removeItem,
         search : search,
    } 
    return(
        <Provider value={cartContextValue}>
            {children}
        </Provider>    
    )
}

export default CustomeComponent