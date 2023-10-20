import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import AddToCartButton from "../components/AddToCartButton";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { products, updateProducts } = useContext(CartContext);
  updateProducts();

  return (
    <div className="content content-products">
      {products ? (
        products.map((p) => <ProductCard product={p} />)
      ) : (
        <p>Loading Products...</p>
      )}
    </div>
  );
}
