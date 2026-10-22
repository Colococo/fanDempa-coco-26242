// éste archivo lo esta usando Firestore
import { db } from "../firebase/config";
import { collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

// creo la referencia (de donde tomo los datos->de la db y de products)
const productsRef = collection(db, "products");

// *** consultamos por todos los productos ***
export const getProducts = async (coccion)=> {
    try {
        // getDocs: es una funcion que nos trae toda la info
        const snapshop = await getDocs(productsRef)
        // extraemos del objeto(getDocs), docs con map()
        // hay que extraer asi porque faristore nos da toda la info asi(QuerySnapshot)
        const productsFormat = snapshop.docs.map((doc)=> {
            // ojo: firestore, el id lo tiene por fuera, toda la info viene en: data(coccion, descripcion, imagen, nombre, precio) UNIFICO con el return el id + la data()
            return { id: doc.id, ...doc.data() };
        }); 

        return productsFormat;

    } catch (error) {
        console.log("Error al traer productos", error);
        throw error;
    }
};

//    **** consulta por ID (ItemDetailContainer)  ******
export const getProductById = async (id)=> {
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


//    **********  opcion filtrar por coccion: Horno o Frita
export const getByCoccion = async (coccion)=> {
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
    const productsFormat = snapshot.docs.map((doc)=> {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};


//   *************  Agregar variedad de empanada  *******

// una vez armado todo el producto (imagen, nombre, precio, etc) lo recibe esta funcion por medio del parametro.
export const createProduct = async (productData)=> {
  // con la funcion addDoc introducimos productData en la coleccion de la DB
  try {
    const docRef = await addDoc(productsRef, productData);
  
    // retornando el producto agregado para usar en una vista de EXITO
    return docRef.id;
    
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};