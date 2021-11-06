

const CartCounter = (props) => {
    
    return (
        <div className="cartFinal">
          <div className="innerFinal">
            <h3 className='finalh3'>Total: ${props.total},00.</h3>
          <h3 className='finalh3'>Total de dias: {props.totalDias}.</h3>
          <button className='endButton'>Finalizar</button>
          <button className='delete' onClick={props.onClickClear}>Vaciar carrito</button>
          </div>
        </div>
    )
}

export default CartCounter
