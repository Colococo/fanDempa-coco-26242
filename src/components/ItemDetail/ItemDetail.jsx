import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

// aca pasamos todo el objeto que encontramos con la funcion: find (desdeItemDetailContainer)
export const ItemDetail = ({ item })=> {
    const { addItem } = useCart();
    
    return (

        <div className="detail-wrapper">
            <Item {...item}>
                {/* onClick lo usamos con funcion para que no se dispare al renderizar la pantalla ()=> */}
                <button className="btn bg-primary primary" onClick={() => addItem(item)}>
                    Agregar al pedido
                </button>
            </Item>
        </div>
    );
}; 