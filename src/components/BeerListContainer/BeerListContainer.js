import { useState,useEffect } from "react/cjs/react.development"
import BeerList from "./BeerList"

const BeerListContainer = () => {
    const[beerList,setBeerList]=useState()
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => {
            setBeerList(
                data
            )           
        })
        
    }, [])
    console.log(beerList)
    
       return (
        <>
            <BeerList beers={beerList}/>
        </>
       )
    
}

export default BeerListContainer
