

const ItemQty = (props) => {
   if(props.number=== 0) {
       return (
           <>
           </>
       )
   }else{
    return (
        <>
            
              <p className="cartLength">({`${props.number}`})</p>  
          
            
        </>
    )
   }
}

export default ItemQty
