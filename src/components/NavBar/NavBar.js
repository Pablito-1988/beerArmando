import "./style.css";
import logo from './logo.jpg'
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <header>
        <div>
            <img className='logo' src={logo}  alt='logo1'/>
        </div>
        <nav>
          <div className="dropdown">
            <button className="dropbtn">Categorias</button>
            <div className="dropdown-content">
              <a href="#">Kits</a>
              <a href="#">Equipos Completos</a>
              <a href="#">Insumos</a>
            </div>
          </div>
          <button  className="dropbtn"><a href="">Contacto</a></button>
          <button  className="dropbtn"><a href="">Nosotros</a></button>
          <CartWidget/>
          <button  className="dropbtn"><i className="far fa-user"></i></button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;




