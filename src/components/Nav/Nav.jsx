import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = ()=> {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    {/* to= es lo que se escribe en la barra de busqueda */}
                    <Link to={"/"}>Menú</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Tu Pedido</Link>
                </li>
            </ul>
        </nav>
    );
};