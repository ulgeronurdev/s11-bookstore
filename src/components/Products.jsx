import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";

import Product from "./Product";
import { CartContext } from "../contexts/CartContextProvider";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = () => {
  const { products } = useContext(ProductContext);
  const { addItem } = useContext(CartContext);
  return (
    <ScProducts>
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </ScProducts>
  );
};

export default Products;
