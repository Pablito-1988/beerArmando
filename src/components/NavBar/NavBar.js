import "./style.css";
import logo from './logo.jpg'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
/* import { useEffect } from "react"; */

function NavBar() {
  
  return (
    <>
      <header id='pcScreen'>
        <div>
          <Link  to='/' > <img className='logo' src={logo}  alt='logo1'/></Link>
        </div>
        <div className='responsive' >
        <div className="dropdown">
            <button className="dropbtn"><i className="fas fa-bars"></i></button>
            <div className="dropdown-content">
              <Link className="dropbtn" to="/category/movie">Peliculas</Link>
              <Link className="dropbtn" to="/category/series">Series</Link>
              <Link className="dropbtn" to="/contacto">Contacto</Link>
              <Link className="dropbtn" to="/contacto">Nosotros</Link>
              <button  className="dropbtn"><i className="far fa-user"></i></button>
            </div>
          </div>
          <CartWidget/> 
        </div>
        <nav >
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
           <button  className="dropbtn"><Link to='/login'><i className="far fa-user"></i></Link></button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;




