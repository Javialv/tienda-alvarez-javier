import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="container-fluid">
          <img src = "https://iconape.com/wp-content/files/dc/319316/svg/319316.svg" width="300px" height= "70px" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="btnHombre" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hombre</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Remeras y Camisetas</a></li>
                <li><a className="dropdown-item" href="#">Buzos y Camperas</a></li>
                <li><a className="dropdown-item" href="#">Shorts y Pantalones</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Futbol</a></li>
                <li><a className="dropdown-item" href="#">Basket</a></li>
              </ul>
            </li>  

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="btnMujer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mujer
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Remeras y Camisetas</a></li>
                <li><a className="dropdown-item" href="#">Buzos y Camperas</a></li>
                <li><a className="dropdown-item" href="#">Shorts y Pantalones</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Futbol</a></li>
                <li><a className="dropdown-item" href="#">Basket</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="btnCalzados" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Calzados
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Running</a></li>
                <li><a className="dropdown-item" href="#">Futbol</a></li>
                <li><a className="dropdown-item" href="#">Basket</a></li>
              </ul>
            </li>
            </ul>
            <div>
              <CartWidget />
            </div>
          </div>
        </div>
    );
}

export default NavBar;