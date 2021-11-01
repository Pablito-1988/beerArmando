import './style.css'
import ItemList from '../ItemList/ItemList'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router'





const ItemListContainer = (props) => {
    const[category,setCategory] = useState('')
    let {id} = useParams()
    useEffect(()=>{
        setCategory(id)
    },[id])
    
   
    
    const{greeting}=props
    const apiKey= '2558f221'
    
    const [info,setInfo]=useState({})

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=${category}&s=space`)
        .then(response => response.json())
        .then(data => {
            setInfo(
                data
            )           
        })
    },[category])
   
    

    return (
       <> 
        <div className='greeting'>  
            <p>{greeting}</p>           
        </div>
        <div className='listContainer'>
        <ItemList titleInfo={id} totalMovies={info}/>
        </div>
        </>
    )
}

export default ItemListContainer
