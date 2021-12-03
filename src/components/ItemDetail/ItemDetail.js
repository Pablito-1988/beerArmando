import "./detailStyle.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../context/cartContext.js";

const ItemDetail = (props) => {
  const movie = props.movie;
  
  
  const { push } = useHistory();
  const [mostrar, setMostrar] = useState(false);
  const { addItem  } = useContext(CartContext);

  const onAdd = (add) => {
    addItem(movie, add.qty, add.price);
    setMostrar(true);
  };

  const redirect = () => {
    push("/cart");
  };

  return (
    <article className="detail">
      <h1 className="detailMovieTitle">{movie.Title}</h1>
      <div className="detailContainer">
        <section className="imageContainer">
          <img className="poster" src={movie.Poster} alt={movie.Title} />
        </section>
        <section className="description">
          <ul>
            <li>
              <u>Actores:</u> {movie.Actors}
            </li>
            <li>
              <u>Premios:</u> {movie.Awards}
            </li>
            <li>
              <u>Género:</u> {movie.Genre}
            </li>
            <li>
              <u>Idioma original:</u> {movie.Language}
            </li>
            <li>
              <u>Duración:</u> {movie.Runtime}
            </li>
            <li>
              <u>Año de lanzamiento:</u> {movie.Released}
                
            </li>
            <li>
              <u>Rating IMDB:</u> {movie.imdbRating}
              
            </li>
            <li>
              <u>Sinopsis:</u> {movie.Plot}
            </li>
            
          </ul>
          {mostrar && (
            <button className="cartButton" onClick={redirect}>
              Terminar compra
            </button>
          )}
        </section>
      </div>
      <ItemCount
        stock="100"
        initial="1"
        quote="Alquilar"
        onClick={onAdd}
        movieTitle={movie.Title}
        title="¿Cuántos días la queres alquilar?"
      />
    </article>
  );
};

export default ItemDetail;
