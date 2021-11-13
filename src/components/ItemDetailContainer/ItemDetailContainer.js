import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router"
import { useState,useEffect } from "react"
import Loading from "../Loading/Loading"
import { firestore } from '../../firebase';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [movie,setMovie]=useState(null)
    
    useEffect(()=>{
        const  prom = firestore.collection('productos').doc(id).get()
        prom.then(doc=>{
            if(doc.exists){
                setMovie( {id: id , ...doc.data()})
            }
        }) 

    },[id])
    
    if(!movie){
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )
    }else{
    return (
        <div>
           <ItemDetail movie ={movie} />
        </div>
    )
    }
}

export default ItemDetailContainer
