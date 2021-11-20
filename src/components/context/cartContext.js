
import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export const CartContext = createContext()

const { Provider } = CartContext

const CustomeComponent =({children}) =>{

    const [cart, setCart] = useState([])
    const [word, setWord] = useState("space")
    const [cartItems, setCartItems] = useLocalStorage("cartItems", [])
    console.log(cartItems)
    
    //agrega elementos al carrito
    const addItem = (product,cantidad, precio) =>{
        
        const item = isInCart(product)
       if(item>=0){
        setCart([...cart,{Producto:product,Cantidad:cantidad, Precio:precio}])
        setCartItems([...cartItems,{Producto:product,Cantidad:cantidad, Precio:precio}]) 
    }
            
        
       
    }
    //elmina elementos del carrito
    const removeItem = (itemId) =>{
        setCart(cart.filter((item)=> item.Producto.id !== itemId))
        setCartItems((cart.filter((item)=> item.Producto.id !== itemId)))

    }
    //elimina todos los elementos del carrito 
    const clear=()=>{
        setCart([])
        setCartItems([])
    }
    //chequea que si el pr
    const isInCart = (product) =>{
        
        const existe = cart.filter(item => item.Producto.id === product.id)
        return existe
    }
    const search = (word) =>{
        setWord(word)
        

    }



    const cartContextValue = {
         cart : cart,
         cartItems : cartItems,
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