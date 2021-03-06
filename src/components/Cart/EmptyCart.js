import { Link } from "react-router-dom"
import emptyImg from "./emptyImg.jpg"

const EmptyCart = () => {
    return (
        <div className='emptyCart'>
        <h2 className='emptyTitle' >En cuanto agregues alguna película acá es donde van a aparecer <i id='smile' className="far fa-smile-wink"></i></h2>
        <Link to={'/'}><img src={emptyImg} alt="" /></Link>
      </div>
    )
}

export default EmptyCart
