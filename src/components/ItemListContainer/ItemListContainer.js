import './style.css'
import ItemList from '../ItemList/ItemList'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";





const ItemListContainer = (props) => {
    const[category,setCategory] = useState('')
    let {id } = useParams()
    
    const [search,setSearch] = useState('space')

    const { word } = useContext(CartContext)
    
    useEffect(()=>{
        setCategory(id)
        setSearch(word)
    },[id,word])
    
    const{greeting}=props
    const apiKey= '2558f221'
    
    const [info,setInfo]=useState({})
     

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=${category}&s=${search}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setInfo(
                data
            )           
        })
    },[category, search])
   
    

    return (
       <> 
       {/*  <div className='greeting'>  
            <p>{greeting}</p>           
        </div> */}
        <div className='listContainer'>
        <ItemList titleInfo={id} totalMovies={info}/>
        </div>
        </>
    )
}

export default ItemListContainer
