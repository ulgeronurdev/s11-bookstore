import { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekle
  };

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <div className="App">
          <main className="content">
            <Route exact path="/"></Route>
            <Route path="/cart"></Route>
          </main>
        </div>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
