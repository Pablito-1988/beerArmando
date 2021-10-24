const Item = (props) => {
    const {titulo , year, poster, type}= props
    return (
        <>
            <div className="itemContainer">
                <h4 className='movieTitle'>{titulo}</h4>
                <img className='imageCover' src={poster} alt="" />
                <div className="infoContainer">
                   <p>AÑO:  {year}</p>
                   <p>TIPO: {type.toUpperCase()} </p>

                    
                </div>
            </div>
        </>
    )
}

export default Item
