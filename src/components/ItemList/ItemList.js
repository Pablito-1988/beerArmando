
import Item from "../Item/Item"
import Loading from "../Loading/Loading"
import Search from "../Search/Search"

const ItemList = (props) => {   
    const movies = props.totalMovies
    let title = props.titleInfo
    title==='movie'?title='Peliculas':title='Series'     
    
    if(movies.length===0){
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )
    }else{
      return (
        <> 
            <h1 className='pageTitle'>Listado de {title}</h1> 
            <Search category={props.titleInfo}/>  
        <div className='moviesToShow'>
            {movies.map((e,i)=>{
            return   <Item key={i} titulo={e.Title} year={e.Year} poster={e.Poster} type={e.Type} id={e.id}/> 
            })}
        </div>
        </>
      )
    }
      
    }
    


export default ItemList
