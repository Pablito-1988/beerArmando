import Beer from "./Beer"
import Loading from "../Loading/Loading"

const BeerList = (props) => {
    const beerList = props.beers
    console.log(beerList)
    if(!beerList){
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )
    }else{
        return (
        <> 
        <h2 className='listTitle'>Listado de cervezas</h2>   
        <div className='moviesToShow'>
           
            {beerList.map((e,i)=>{
              return  <Beer nombre={e.name} ibu={e.ibu} image={e.image_url} ph={e.ph} />
            })}
            
        </div>
        </>
    )}
    
}



export default BeerList
