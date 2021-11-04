import "./detailStyle.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = (props) => {
  const movie = props.movie;

  const[count, setCount] = useState(1);
  const[showCounter,setShowCounter] = useState(true);
  const onAdd= (add) => {
    setCount(add.qty)
    setShowCounter(false)
  }
  
  console.log(count);

  return (
    <article className="detail">
      <h1 className='detailMovieTitle'>{movie.Title}</h1>
      <div className='detailContainer'>
        <section className="imageContainer">
          <img className='poster' src={movie.Poster} alt={movie.Title} />
        </section>
        <section className="description">
          <ul>
            <li><u>Actores:</u> {movie.Actors}</li>
            <li><u>Premios:</u> {movie.Awards}</li>
            <li><u>Genero:</u> {movie.Genre}</li>
            <li><u>Idioma original:</u> {movie.Language}</li>
            <li><u>Duración:</u> {movie.Runtime}</li>
            <li><u>Año de lanzamiento:</u>{movie.Year}</li>
            <li><u>Rating IMDB:</u>{movie.imdbRating}</li>
            <li><u>Sinopsis:</u> {movie.Plot}</li>
          </ul>
        </section>
      </div>
      {showCounter&& <ItemCount stock='100' initial ='1' quote='Alquilar' onClick={onAdd} movieTitle={movie.Title} title='¿Cuántos días la queres alquilar?'/>}   
    </article>
  );
};

export default ItemDetail;
