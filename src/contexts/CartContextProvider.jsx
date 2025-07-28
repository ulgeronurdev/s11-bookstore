import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
