import "./cartStyle.css";
import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import CartCounter from "./CartCounter";
/* import emptyImg from "./emptyImg.jpg" */
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart , clear, removeItem } = useContext(CartContext);
    const total = []
    const dias= []
    cart.forEach(item => {
        total.push(item.Precio)
        dias.push(item.Cantidad)
    })
    const totalPrice = total.reduce((acc, curr) => acc + curr, 0)
    const totalDias = dias.reduce((acc, curr) => acc + curr, 0)
    

  return (
    <>
    <div className="wrapper">
        <h1 className='pageTitle'>Estas pelis estan a un paso de ser tuyas</h1>
      <div className="cartWrapper">
        {cart.length > 0 ?
        <> 
         <div className="cart">
        {cart.map((item,i) => {
          return (
            <div key={i} className="cartItem">
              <div className="itemImg">
              <img className='imageCover' src={item.Producto.Poster} alt="" />
              </div>
              <div className="itemInfo">
                <h3>Titulo:{item.Producto.Title}</h3>
                <p className='itemInfop'>Descripcion:{item.Producto.Plot}</p>
                <p className='itemInfop'>Precio: ${item.Precio}.</p>
                <p className='itemInfop'>Total de dias con esta peli: {item.Cantidad}.</p>
                <button className='delete' onClick={()=>removeItem(item.Producto.imdbID)}>Eliminar de la lista</button>
              </div>
            </div>
          );
          })}
        </div>
        <CartCounter totalDias={totalDias} total={totalPrice} onClickClear ={clear} />
        </> : <EmptyCart/>}
      </div>
    </div>
    </>
  );
};

export default Cart;
