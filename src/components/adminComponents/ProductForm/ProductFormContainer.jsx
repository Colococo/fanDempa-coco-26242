import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productsService";
import "./ProductFormContainer.css";

export const ProductFormContainer = ()=> {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // cargando
    const [errors, setErrors] = useState({}); // validateProduct
    const [file, setFile] = useState(null); // handle change actualizar (imagen) 

    // handle change con los campos de texto (product)
    const [product, setProduct] = useState({
        nombre: "",
        precio: "",
        coccion: "",
        descripcion: "",
    });

    const handleChange = (e)=> {
        // cada value que escriba el usuario en el form "1250" lo guarda en el name del form value={product.precio}
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // tomar la imagen, una sola [0]
    const handleFileChange = (e)=> {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();

        // borra los errores alertas del formulario si los hubo al ingresar datos y dispara mensaje: guardando...
        setErrors({});
        setLoading(true);

        // validar inputs (la validación revisa product.imagen)
        // junto los campos mas la imagen
        const newErrors = validateProduct({ ...product, imagen: file });
        // si el objeto tiene valor, tiene algun error
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            // subir la imagen, en imageUrl viene la url de la imagen que retorno imgBB
            const imageUrl = await uploadImage(file);

            // armar la estructura del producto (claves como en Firestore)
            const productData = {
                ...product,
                precio: Number(product.precio), //reescribimos el precio para convertirlo en numero
                imagen: imageUrl,
            };

            // alta - funcion esta en productsService
            const id = await createProduct(productData);

            // vaciar formulario
            setProduct({ nombre: "", precio: "", coccion: "", descripcion: "" });
            setFile(null); //vaciamos la imagen

            //navegar a la pagina de exito, tiene que estar en app.jsx
            // {replace: true}: borra el historial de la ruta url
            navigate(`/admin/products/success/${id}`, { replace: true });

        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        // estas prompt las recibe ProductFormUI: product, errors, etc
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};