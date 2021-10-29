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
              <Link to="/movies">Peliculas</Link>
              <Link to="/beers">Cerveza</Link>
            </div>
          </div>
          <button  className="dropbtn"><a to="">Contacto</a></button>
          <button  className="dropbtn"><a to="">Nosotros</a></button>
          <CartWidget/>
          <button  className="dropbtn"><i className="far fa-user"></i></button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;




