import './style.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = (props) => {
    const{greeting}=props
   

    return (
       <> 
        <div className='greeting'>  
            <p>{greeting}</p>           
        </div>
        <ItemCount stock='6' initial ='1'  />
        </>
    )
}

export default ItemListContainer
