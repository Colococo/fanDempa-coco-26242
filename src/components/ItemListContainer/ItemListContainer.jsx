import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    // la peticion da respuestas, efectos secundarios, usamos useEffect
    useEffect(() => {
      fetch("/data/products.json")
      .then((res)=>{
        if (!res.ok) {
            throw new Error("Error al cargar las empanadas"); //este string lo levanta el catch
        }
        return res.json(); //convertimos la respuesta a javaScript
      })
      .then((data)=> setProducts(data)) //mando la info 
      .catch((error)=> setErrors(error.message))
      .finally(()=> setLoading(false));
    }, []);
    
    // antes de renderizar la pagina, mostramos estados especiales (si hace falta)
    if (errors) return <p>{errors}</p>;
    if (loading) return <p>Cargando...</p>;
   
    return (
        <section>
            <h1>Empanadas</h1>
            {/* Le pasamos a ItemList bajo la prop: products. El estado(linea 5):{products} */}
            <ItemList products={products}/>
        </section>
    );
}; 