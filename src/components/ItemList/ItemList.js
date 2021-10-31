import Item from "../Item/Item"
import Loading from "../Loading/Loading"

const ItemList = (props) => {
    const movies = props.totalMovies.Search
    let title = props.titleInfo
    title==='movie'?title='Peliculas':title='Series'
    
    if(!movies){
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )
    }else{
      return (
        <> 
            <h1 className='pageTitle'>Listado de {title}</h1> 
        <div className='moviesToShow'>
            {movies.map((e,i)=>{
            return   <Item key={i} titulo={e.Title} year={e.Year} poster={e.Poster} type={e.Type} id={e.imdbID}/> 
            })}
        </div>
        </>
      )
    }
      
    }
    


export default ItemList
