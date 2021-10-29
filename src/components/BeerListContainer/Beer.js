const Beer = (props) => {
  const { nombre, ibu, image, ph } = props;

  return (
    <>
      <div className="itemContainer">
        <h4 className="movieTitle">{nombre}</h4>
        <img className="imageCoverBeer" src={image} alt="" />
        <div className="infoContainer">
          <p>IBU: {ibu}</p>
          <p>PH: {ph} </p>
        </div>
      </div>
    </>
  );
};

export default Beer;
