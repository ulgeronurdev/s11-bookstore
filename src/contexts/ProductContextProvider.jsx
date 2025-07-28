import { createContext, useState } from "react";
import { data } from "../data";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
