import { Item } from "../Item/Item";
import "./ItemDetail.css";

// aca pasamos todo el objeto que encontramos con la funcion: find (desdeItemDetailContainer)
export const ItemDetail = ({ item })=> {
    
    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <button className="btn bg-primary primary">Agregar al pedido</button>
            </Item>
        </div>
    );
}; 