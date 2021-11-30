import "./cartStyle.css";
import { useContext,useState } from "react";
import { CartContext } from "../context/cartContext.js";

import CartCounter from "./CartCounter";
import SuccesBuy from "./SuccesBuy";
import EmptyCart from "./EmptyCart";
import { firestore } from "../../firebase";

const Cart = () => {
  const { cartItems , clear, removeItem } = useContext(CartContext);
  
  const total = []
    const dias= []
    cartItems.forEach(item => {
        total.push(item.Precio)
        dias.push(item.Cantidad)
    })
    const totalPrice = total.reduce((acc, curr) => acc + curr, 0)
    const totalDias = dias.reduce((acc, curr) => acc + curr, 0)

    const [user, setUser] = useState(null)
    
    function userData(data){
      setUser(data)
    }
    let today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    const order ={
      buyer: user,
      items : cartItems,
      date :  date,
      total : total[0]
    }
    
    const [orderId, setOrderId] = useState(null)

    function sendOrder(){
        firestore.collection("orders").add(order)
        .then((data)=>{
          setOrderId(data.id)
          clear()
        })
        .catch(err=>{
          console.log(err)
        })
      
    }
    
  if(orderId){
    return (
      <>
        <SuccesBuy setOrderId={setOrderId} id={orderId}/>
      </>
    )
  }else{
    return (
      <>
      <div className="wrapper">
          <h1 className='pageTitle'>Estas pelis estan a un paso de ser tuyas</h1>
        <div className="cartWrapper">
          {cartItems.length > 0 ?
          <> 
           <div className="cart">
          {cartItems.map((item,i) => {
            return (
              <div key={i} className="cartItem">
                <div className="itemImg">
                <img className='imageCover' src={item.Producto.Poster} alt="" />
                </div>
                <div className="itemInfo">
                  <h3>Titulo: {item.Producto.Title}</h3>
                  <p className='itemInfop'>Descripcion: {item.Producto.Plot}</p>
                  <p className='itemInfop'>Precio: ${item.Precio}.</p>
                  <p className='itemInfop'>Total de dias con esta peli: {item.Cantidad}.</p>
                  <button className='deleteObjet' onClick={()=>removeItem(item.Producto.id)}>Eliminar de la lista  <i id='trash' className="far fa-trash-alt"></i></button>
                </div>
              </div>
            );
            })}
          </div>
          <CartCounter totalDias={totalDias} total={totalPrice} sendOrder={sendOrder} userData={userData} onClickClear ={clear} />
          </> : <EmptyCart/>}
        </div>
      </div>
      </>
    );
  }  

};

export default Cart;
