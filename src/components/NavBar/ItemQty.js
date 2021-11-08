

const ItemQty = (props) => {
   if(props.number=== 0) {
       return (
           <>
           </>
       )
   }else{
    return (
        <>
            <p id="cartLength">({`${props.number}`})</p>
        </>
    )
   }
}

export default ItemQty
