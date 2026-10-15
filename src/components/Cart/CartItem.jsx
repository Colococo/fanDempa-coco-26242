import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

// componente con la tarjeta del producto(opcion remove)
export const CartItem = ({ item })=> {
    const { removeItem } = useCart();

    return (
        <>
            {/* apertura y cierre de <Item></Item> porque lo mandamos a children */}
            <Item {...item}>
                <button
                    className="btn bg-delete primary"
                    onClick={() => removeItem(item.id)}
                >
                    <span style={{ marginRight: '8px', fontSize: '14px' }}>❌</span>
                    Eliminar
                </button>
            </Item>
        </>
    );
};
