import "./Item.css";

export const Item = ({ nombre, descripcion, precio, imagen, children })=> {
    return (
        <article className="card">
            <img src={imagen} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>

     {/* Cualquier cosa que meta dentro de <Item> aparecerá justo aquí abajo */}
            {children}
        </article>
    );
};
