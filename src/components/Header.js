import React from "react";
//no se usa mas <a> los enlaces son remplazados por link y se debe importa desde reac router dom
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactos">Contactos</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
