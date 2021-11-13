
import { useRef } from 'react'
import './search.css'
import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";



const Search = (params) => {
    let category = params.category
    category==='movie'?category='Peliculas':category='Series'

    const { search }=useContext(CartContext)

    const keyWord = useRef()

    function searchWord (e){
        e.preventDefault()
        search(keyWord.current.value) 
    }


    return (
        <div className='search'>
            <form action=""onSubmit={searchWord}>
            <input id='searchBar' ref={keyWord}  placeholder={`  Busca las ${category} que mas te gusten.`}  type="search" />
            <button className='searchButton'   type='submit'><i className="fas fa-search"></i></button> 
            </form>
        </div>
    )
}

export default Search
