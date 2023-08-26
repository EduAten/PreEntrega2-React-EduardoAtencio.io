import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Espacio gamer</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/procesador">Procesador</Link></li>
                <li><Link className="menu-link" to="/productos/mother">Mother</Link></li>
                <li><Link className="menu-link" to="/productos/memoria">Memoria</Link></li>
                <li><Link className="menu-link" to="/productos/grafica">Grafica</Link></li>
                <li><Link className="menu-link" to="/Ayuda">Ayuda</Link></li>
                <li><Link className="menu-link" to=""><CartWidget/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar