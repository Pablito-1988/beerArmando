import './style.css'
import ItemList from '../ItemList/ItemList'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'




const ItemListContainer = (props) => {
    const{greeting}=props
    const apiKey= '2558f221'
    const [movies,setMovies]=useState({})

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=space`)
        .then(response => response.json())
        .then(data => {
            setMovies(
                data
            )           
        })
    },[])
   
    function onAdd(){

    }

    return (
       <> 
        <div className='greeting'>  
            <p>{greeting}</p>           
        </div>
        <ItemList totalMovies={movies}/>
        </>
    )
}

export default ItemListContainer
