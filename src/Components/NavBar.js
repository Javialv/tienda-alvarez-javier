import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
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
                <li><Link className="dropdown-item" to="/producto/Hombre/RemerayCamiseta">Remeras y Camisetas</Link></li>
                <li><Link className="dropdown-item" to="/producto/Hombre/BuzosyCamperas">Buzos y Camperas</Link></li>
                <li><Link className="dropdown-item" to="/producto/Hombre/ShortsyPantalones">Shorts y Pantalones</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/producto/Hombre/Futbol">Futbol</Link></li>
                <li><Link className="dropdown-item" to="/producto/Hombre/Basket">Basket</Link></li>
              </ul>
            </li>  

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="btnMujer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mujer
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/producto/Mujer/RemerayCamiseta">Remeras y Camisetas</Link></li>
                <li><Link className="dropdown-item" to="/producto/Mujer/BuzosyCamperas">Buzos y Camperas</Link></li>
                <li><Link className="dropdown-item" to="/producto/Mujer/ShortsyPantalones">Shorts y Pantalones</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/producto/Mujer/Futbol">Futbol</Link></li>
                <li><Link className="dropdown-item" to="/producto/Mujer/Basket">Basket</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="btnCalzados" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Calzados
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/producto/Calzado/Running">Running</Link></li>
                <li><Link className="dropdown-item" to="/producto/Calzado/Futbol">Futbol</Link></li>
                <li><Link className="dropdown-item" to="/producto/Calzado/Basket">Basket</Link></li>
              </ul>
            </li>
            </ul>
            <div>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;