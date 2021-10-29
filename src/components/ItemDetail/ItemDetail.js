import "./detailStyle.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const movie = props.movie;

  return (
    <article className="detail">
      <h1 className='detailMovieTitle'>{movie.Title}</h1>
      <div className='detailContainer'>
        <section className="imageContainer">
          <img src={movie.Poster} alt={movie.Title} />
        </section>
        <section className="description">
          <ul>
            <li><u>Sinopsis:</u> {movie.Plot}</li>
            <li><u>Actores:</u> {movie.Actors}</li>
            <li><u>Premios:</u> {movie.Awards}</li>
            <li><u>Genero:</u> {movie.Genre}</li>
            <li><u>Idioma original:</u> {movie.Language}</li>
            <li><u>Duración:</u> {movie.Runtime}</li>
            <li><u>Año de lanzamiento:</u>{movie.Year}</li>
            <li><u>Rating IMDB:</u>{movie.imdbRating}</li>
          </ul>
			 <ItemCount stock='100' initial ='1' quote='Alquilar' title='Cuantos días la queres alquilar?'/>
        </section>
      </div>
    </article>
  );
};

export default ItemDetail;
