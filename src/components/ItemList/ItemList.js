import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import Search from "../Search/Search";
import ErrorSearch from "./ErrorSearch";

const ItemList = (props) => {
  const response = props.totalMovies.Response;
  const movies = props.totalMovies.Search;
  let title = props.titleInfo;
  title === "movie" ? (title = "Peliculas") : (title = "Series");

  if (!movies) {
    return (
      <>
        <h1 className="pageTitle">Listado de {title}</h1>
        <Search category={props.titleInfo} />
        {response === "False" ? (
          <ErrorSearch />
        ) : (
          <div className="loading">
            <Loading />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <h1 className="pageTitle">Listado de {title}</h1>
        <Search category={props.titleInfo} />

        <div className="moviesToShow">
          {movies.map((e, i) => {
            return (
              <Item
                key={i}
                titulo={e.Title}
                year={e.Year}
                poster={e.Poster}
                type={e.Type}
                id={e.imdbID}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default ItemList;
