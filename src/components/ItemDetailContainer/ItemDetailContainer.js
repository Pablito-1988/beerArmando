import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router"
import { useState,useEffect } from "react"
import Loading from "../Loading/Loading"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const apiKey= '2558f221'
    const [movie,setMovie]=useState(null)

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(data => {
            setMovie(
                data
            )           
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
           <ItemDetail movie ={movie}/>
        </div>
    )
    }
}

export default ItemDetailContainer
