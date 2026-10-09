import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";


export const ItemList = ({ products })=> {
    if(!products.length) {
        return <p>No hay empanadas</p>;
    }

    return (
        // si quisiera usar children de Item aca, debo usar Item con apertura y cierre, entre las etiquetas Item: va a viajar hacia al componente Item y se renderizará donde esta{children}.
        <div className="products-container">
            {/* las llaves{} es para poder escribir codigo de javaScripr dentro de un return */}
            {products.map((product)=> (
             // cada card que se renderice va a tener un Link, ese Link va a ir al id de esa card(empanada)
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item {...product} /> {/*aca viaja toda la info del json */}
                </Link>
            ))}
        </div>
    );
};