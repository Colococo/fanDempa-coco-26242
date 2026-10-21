import { db } from "../firebase/config";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

// creo la referencia (de donde tomo los datos->de la db y de products)
const productsRef = collection(db, "products");

// *** consultamos por todos los productos ***
export const getProducts = async (coccion)=> {
    try {
        // getDocs: es una funcion que nos trae toda la info
        const snapshop = await getDocs(productsRef)
        // extraemos del objeto(getDocs), docs con map()
        // hay que extraer asi porque faristone nos da toda la info asi(QuerySnapshot)
        const productsFormat = snapshop.docs.map((doc)=> {
            // ojo: firestone, el id lo tiene por fuera, toda la info viene en: data(coccion, descripcion, imagen, nombre, precio) UNIFICO con el return el id + la data()
            return { id: doc.id, ...doc.data() };
        }); 

        return productsFormat;

    } catch (error) {
        console.log("Error al traer productos", error);
        throw error;
    }
};

//    **** consulta por ID (ItemDetailContainer)  ******
export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(productsRef, id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};


export const getByCoccion = async (coccion) => {
  try {
    let queryRef;

    //truthy
    if (coccion) {
      queryRef = query(productsRef, where("coccion", "==", coccion));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);
    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};