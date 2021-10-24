import Item from "../Item/Item"
import reactLoading from 'react-loading'
import Loading from "../Loading/Loading"

const ItemList = (props) => {
    const movies = props.totalMovies.Search
    console.log(movies)
    if(!movies){
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )
    }else{
      return (
        <div className='moviesToShow'>
            {movies.map((e,i)=>{
            return   <Item key={i} titulo={e.Title} year={e.Year} poster={e.Poster} type={e.Type}/> 
            })}
            
        </div>
    )  
    }
    
}

export default ItemList
