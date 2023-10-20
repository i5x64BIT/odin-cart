import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import AddToCartButton from "../components/AddToCartButton";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, updateProducts } = useContext(CartContext);
  updateProducts();

  return (
    <div className="content content-products">
      {products ? (
        products.map((p) => (
          <Link className="card" to={`/products/${p.id}`}>
            <img src={p.image} alt="" />
            <h2>{p.title}</h2>
            <p className="card-price">{p.price}$</p>
            <AddToCartButton item={p} />
          </Link>
        ))
      ) : (
        <p>Loading Products...</p>
      )}
    </div>
  );
}
