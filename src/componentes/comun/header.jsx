import {Link } from 'wouter';

export default function Header(){
    return (
        <div className="Header">
            <Link to="/autores">
            <span className="Boton">Autores</span>
            </Link>
            <Link to="/libros">
            <span className="Boton">Libros</span>
            </Link>
        </div>
    )

}