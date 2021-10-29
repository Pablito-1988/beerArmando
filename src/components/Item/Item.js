import { NavLink } from "react-router-dom"

const Item = (props) => {
    const {titulo , year, poster, type, id}= props
    return (
        <>
            <div className="itemContainer">
                <h4 className='movieTitle'>{titulo}</h4>
                <NavLink to={`/movies/${id}`}><img className='imageCover' src={poster} alt="" /></NavLink>
                <div className="infoContainer">
                   <p>AÑO:  {year}</p>
                   <p>TIPO: {type.toUpperCase()} </p>

                    
                </div>
            </div>
        </>
    )
}

export default Item
