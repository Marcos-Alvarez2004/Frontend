import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/layout/Nav.css"

const Nav = (props) => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li><Link to="/" className="activo">Home</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
