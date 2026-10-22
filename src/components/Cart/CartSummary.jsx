import { useCart } from "../../context/CartContext";

// componente con resumen: total a pagar, finalizar compra, etc
export const CartSummary = ()=> {
    const { getCartTotal, checkout, clearCart } = useCart();

    const total = getCartTotal();

    return (
        <>
            <button
                className="btn bg-delete primary btn-group"
                onClick={() => clearCart()}
            >
                <span style={{ marginRight: '8px', fontSize: '14px' }}>🗑️</span>
                Vaciar tu pedido
            </button>
            <p className="btn-group">TOTAL A PAGAR: ${total} </p>
            <button className="btn bg-success primary" onClick={checkout}>
                FINALIZAR COMPRA
            </button>
        </>
    );
};