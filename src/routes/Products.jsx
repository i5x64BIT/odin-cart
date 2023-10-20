import { useContext, useEffect, useState } from "react";
import { fetchProducts } from "../Util";
import { CartContext } from "../CartContext";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState();
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="content content-products">
      {products ? (
        products.map((p) => (
          <div className="card">
            <img src={p.image} alt="" />
            <h2>{p.title}</h2>
            <p className="card-price">{p.price}$</p>
            <button className="btn btn-primary" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>Loading Products...</p>
      )}
    </div>
  );
}
