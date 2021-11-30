import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export const CartContext = createContext();

const { Provider } = CartContext;

const CustomeComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [word, setWord] = useState("space");
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const addItem = (product, cantidad, precio) => {
    const item = isInCart(product);
    console.log(item);
    if (item >= 0) {
      setCart([
        ...cart,
        { Producto: product, Cantidad: cantidad, Precio: precio },
      ]);
      setCartItems([
        ...cartItems,
        { Producto: product, Cantidad: cantidad, Precio: precio },
      ]);
    } else {
      setCart(
        cart.filter((item) =>
          item.Producto.id !== product.id
            ? (item.Cantidad = cantidad)
            : (item.Cantidad = item.Cantidad + cantidad)
        )
      );
      setCartItems(
        cartItems.filter((item) =>
          item.Producto.id !== product.id
            ? (item.Cantidad = cantidad)
            : (item.Cantidad = item.Cantidad + cantidad)
        )
      );
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.Producto.id !== itemId));
    setCartItems(cart.filter((item) => item.Producto.id !== itemId));
  };

  const clear = () => {
    setCart([]);
    setCartItems([]);
  };

  const isInCart = (product) => {
    const existe = cart.filter((item) => item.Producto.id === product.id);
    return existe;
  };
  const search = (word) => {
    setWord(word);
  };

  const cartContextValue = {
    cart: cart,
    cartItems: cartItems,
    word: word,
    isInCart: isInCart,
    addItem: addItem,
    clear: clear,
    removeItem: removeItem,
    search: search,
  };
  return <Provider value={cartContextValue}>{children}</Provider>;
};

export default CustomeComponent;
