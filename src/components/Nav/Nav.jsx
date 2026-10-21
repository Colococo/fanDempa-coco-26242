import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = ()=> {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <nav>
            <ul className="nav-list">
                <li>
                    {/* to= es lo que se escribe en la barra de busqueda */}
                    <Link to={"/"}>Empanadas</Link>
                </li>
                <li>
                    <Link to={"/coccion/horno"}>Horneadas</Link>
                </li>                
                <li>
                    <Link to={"/coccion/frita"}>Fritas</Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                        Tu Pedido
                        {/* cuando sea mayor a cero mostramos numero en burbuja pedido */}
                        {totalItems > 0 && <span className="incart">{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};