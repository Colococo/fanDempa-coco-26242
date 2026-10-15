import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// context
const CartContext = createContext();

// custom hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

// Proveedor
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // buscamos si el item ya existe en el carrito, some: retorna true o false, esta funcion sirbe para que la use otra funcion y saber si existe el item, por si o no (ej: la va a usar addItem)
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

  const addItem = (item) => {
    // chequeando si existe item con funcion: isInCart()
    if (isInCart(item)) {
        console.log(item);
        
    //   alert("El producto ya existe en tu pedido");
      alert(`Empanada de ${item.nombre}, ya existe en tu pedido.`);
      return;
    }
    setCart([...cart, item]);
    alert(`Agregaste empanada de ${item.nombre} a tu pedido.`);
  };

  //Eliminar del carrito
  const removeItem = (id) => {
    // find() me devuelve el objeto completo, filter me devuelve un array con la condicion !==
    const itemToEliminate = cart.find((element) => element.id === id);
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    alert(`Empanada ${itemToEliminate.nombre} ELIMINADA ✅`);
  };

  //Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Total de items en carrito
  const getTotalItems = () => {
    return cart.length;
  };

  //Total a pagar
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.precio, 0);
  };

  //Checkout
  const checkout = () => {
    alert("Tu compra ha sido realizada");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    clearCart,
    removeItem,
    getCartTotal,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};