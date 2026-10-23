// instale (npm install sweetalert2) sweetalert2 para reemplazar los alert.
import Swal from "sweetalert2";
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
        
      Swal.fire({
        icon: "warning",
        title: "Ya está en tu pedido",
        html: `<span style="color: red;">Empanada de ${item.nombre} ya existe en tu pedido.</span>`,
        confirmButtonText: "Entendido",
        confirmButtonColor: "#e8952f",
      });
      navigate("/");
      return;
    }

    setCart([...cart, item]);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `🥟 ¡Anotada! ${item.nombre} va para tu pedido.`,
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
    });
    navigate("/");
  };

  //Eliminar del carrito
  const removeItem = (id) => {
    // find() me devuelve el objeto completo, filter me devuelve un array con la condicion !==
    const itemToEliminate = cart.find((element) => element.id === id);
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "info",
      title: `👋 Chau ${itemToEliminate.nombre}, la sacamos del pedido.`,
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
    });
  };

  //Vaciar el carrito
  const clearCart = (showNotification = true) => {
    setCart([]);
    if(showNotification) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "😢 Eliminaste todas las empanadas de tu pedido",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
      });
    }
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
    Swal.fire({
      icon: "success",
      title: "¡Pedido confirmado! 🥟🔥",
      text: "Tus empanadas ya están yendo al horno. ¡Gracias por tu compra!",
      confirmButtonText: "¡A esperar! 😋",
      confirmButtonColor: "#e8952f",
    });
    // false: vacía el carrito sin mostrar el aviso de clearCart()
    clearCart(false);
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