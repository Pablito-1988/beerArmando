import './style.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'



const ItemListContainer = (props) => {
    const{greeting}=props
    const apiKey= '2558f221'
    const [movies,setMovies]=useState({})

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=space`)
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
        <ItemCount stock='6' initial ='1' onAdd={onAdd()} />
        <ItemList totalMovies={movies}/>
        </>
    )
}

export default ItemListContainer
