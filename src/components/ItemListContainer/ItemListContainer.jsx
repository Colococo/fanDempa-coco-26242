import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts, getByCoccion } from "../../services/productsService";
import { useParams } from "react-router-dom";
 
export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    const { coccion } = useParams();

    // la peticion da respuestas, efectos secundarios, usamos useEffect
    useEffect(() => {
        setLoading(true);
        // este fetch es para uso interno de products.json que esta en public en 
        // fetch("/data/products.json")
        // .then((res)=>{
        // if (!res.ok) {
        //     throw new Error("Error al cargar las empanadas"); //este string lo levanta el catch
        // }
        // return res.json(); //convertimos la respuesta a javaScript
        // })
        let laPeticion;
        if(coccion) {
            laPeticion = getByCoccion(coccion);
        }else{
            laPeticion = getProducts();
        }

        laPeticion
            .then((data)=> setProducts(data)) //mando la info 
            .catch((error)=> setErrors(error.message))
            .finally(()=> setLoading(false));
    }, [coccion]);
    
    // antes de renderizar la pagina, mostramos estados especiales (si hace falta)
    if (errors) return <p>{errors}</p>;
    if (loading) return <p>Cargando...</p>;
   
    return (
        <section>
            <h1>Empanadas Regionales</h1>
            {/* Le pasamos a ItemList bajo la prop: products. El estado(linea 5):{products} */}
            <ItemList products={products}/>
        </section>
    );
}; 