import "./style.css";
import logo from "./logo.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function NavBar() {
  const { user, clearUser } = useContext(UserContext);

  return (
    <>
      <header id="pcScreen">
        <div>
          <Link to="/">
            {" "}
            <img className="logo" src={logo} alt="logo1" />
          </Link>
        </div>
        <div className="responsive">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fas fa-bars"></i>
            </button>
            <div className="dropdown-content">
              <Link className="dropbtn" to="/category/movie">
                Películas
              </Link>
              <Link className="dropbtn" to="/category/series">
                Series
              </Link>
              <Link className="dropbtn" to="/contacto">
                Contacto
              </Link>
              <button className="dropbtn">
                <i className="far fa-user"></i>
              </button>
            </div>
          </div>
          <CartWidget />
        </div>
        <nav>
          <div className="dropdown">
            <button className="dropbtn">Categorías</button>
            <div className="dropdown-content">
              <Link to="/category/movie">Películas</Link>
              <Link to="/category/series">Series</Link>
            </div>
          </div>
          <button className="dropbtn">
            <Link to="/contacto">Contacto</Link>
          </button>
          <CartWidget />
          {user.userName ? (
            <button className="dropbtn" onClick={() => clearUser()}>
              {user.userName} <i className="fas fa-sign-out-alt"></i>
            </button>
          ) : (
            <button className="dropbtn">
              <Link to="/login">
                <i className="far fa-user"></i>
              </Link>
            </button>
          )}
        </nav>
      </header>
    </>
  );
}

export default NavBar;
