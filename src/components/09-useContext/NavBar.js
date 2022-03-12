import React from 'react';
import { Link, NavLink } from "react-router-dom";

/* DIFERENCIA ENTRE Link y NavLink: ESTILO => FOCALIZAR LA PAGINA EN LA QUE ESTA EL USUARIO*/


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">useContext</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")} >HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")} >LOGIN</NavLink>
                        </li>
                        
                    </ul>
                </div>

            </div>
        </nav>
    )
};