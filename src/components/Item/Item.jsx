import "./Item.css";

export const Item = ({ nombre, descripcion, precio, imagen, coccion, children }) => {
    return (
        <article className="card">
            {/* Agregado el atributo alt con el nombre para mejor accesibilidad */}
            <img src={imagen} alt={nombre} />
            
            <h3>{nombre}</h3>
            
            {/* Clases agregadas para vincular con el nuevo CSS */}
            <p className="card-description">{descripcion}</p>

            <p className="card-description center">Cocción {coccion}</p>
            
            <p className="card-price">${precio}</p>

        
            {/* Mantenemos tus children para el botón o info extra */}
            {children}
        </article>
    );
};