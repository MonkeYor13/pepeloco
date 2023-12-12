import React from "react";
import '../assets/css/Home.css';
//no se usa mas <a> los enlaces son remplazados por link y se debe importa desde reac router dom
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <header>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to="/contactos">Contactos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
