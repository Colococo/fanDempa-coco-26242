
export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit})=> {

    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar nueva variedad de empanada</h2>

                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={product.nombre}
                        onChange={onChange}
                    />
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={product.precio}
                        onChange={onChange}
                        min="0"
                    />
                    {errors.precio && <p className="error">{errors.precio}</p>}
                </div>

                <div>
                    <label>Cocción:</label>
                    <input
                        type="text"
                        name="coccion"
                        value={product.coccion}
                        onChange={onChange}
                    />
                    {errors.coccion && <p className="error">{errors.coccion}</p>}
                </div>

                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={product.descripcion}
                        onChange={onChange}
                    />
                    {errors.descripcion && <p className="error">{errors.descripcion}</p>}
                </div>

                <div>
                    <label>Imagen:</label>
                    <input className="input-file" type="file" accept="image/*" onChange={onFileChange} />
                    {errors.imagen && <p className="error">{errors.imagen}</p>}
                </div>

                <button className="btn bg-primary" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>

                {errors.general && <p className="error">{errors.general}</p>}

            </form>
        </section>
    );
};