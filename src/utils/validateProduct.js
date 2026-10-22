// verificamos que lo que subamos a la DB tenga la estructura que quiero
export const validateProduct = (product)=> {
    // son todos if, para que entre en todos
    const errors = {};

    // .trim() saca los espacios del principio y del final de un texto. Los del medio no los toca.
    if (!product.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio";
    }
        // al guardar el precio usar: precio: Number(product.precio)
    if (!product.precio || product.precio <= 0) {
        errors.precio = "El precio debe ser mayor que 0";
    }

    if (!product.descripcion.trim()) {
        errors.descripcion = "La descripción es obligatoria";
    }

    if (!product.coccion.trim()) {
        errors.coccion = "La cocción es obligatoria";
    }

    if (!product.imagen) {
        errors.imagen = "Debes seleccionar una imagen";
    }
    return errors;
};