import { useCart } from "../../context/CartContext";
import "./CartView.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";
 
// va a utilizar el estado del carrito
export const CartView = ()=> {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Tu pedido de empanadas</h1>

            {/* si hay producto: renderizo los elementos CartList y CartSummary */}
            {cart.length ? (
                // cuando renderizo mas de una cosa uso <></> fragment
                <>
                    <CartList />
                    <CartSummary />
                </>
            ) : (
                <>
                    <p className="empty-cart">No tienes empanadas seleccionadas</p>
                    <Link className="btn primary bg-primary" to={"/"}>
                        Volver al menú
                    </Link>
                </>
            )} 
        </section>
    );
};