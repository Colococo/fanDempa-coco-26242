import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ()=> {
    // useParams es de react-router-dom
    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        // si usamos filtro hay que resetear
        setItemDetail(null);
        setLoading(true);
        setError(null);

        fetch("/data/products.json")
        .then((res)=> res.json())
        .then((data)=> {
            // product.id es el id del json y id es de la url useParams
            const item = data.find((product) => (product.id === id));
            if(item) {
                setItemDetail(item);
                return;
            }
            throw new Error("Empanada no encontrada");
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));

    }, [id]); 

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!itemDetail) return <p>Empanada no encontrada</p>;

    return (

        <section>
            <h1>Nuestra Receta: Ingredientes</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )
};