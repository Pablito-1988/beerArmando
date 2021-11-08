import "./style.css";
import logo from './logo.jpg'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <div>
          <Link  to='/' > <img className='logo' src={logo}  alt='logo1'/></Link>
        </div>
        <nav>
          <div className="dropdown">
            <button className="dropbtn">Categorias</button>
            <div className="dropdown-content">
              <Link to="/category/movie">Peliculas</Link>
              <Link to="/category/series">Series</Link>
            </div>
          </div>
          <button  className="dropbtn"><Link to="/contacto">Contacto</Link></button>
          <button  className="dropbtn"><Link to="/contacto">Nosotros</Link></button>
          <CartWidget/>
           <button  className="dropbtn"><i className="far fa-user"></i></button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;




