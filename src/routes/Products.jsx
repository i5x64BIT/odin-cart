import { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { fetchProducts } from "../Util";

export default function Products() {
  const [cart, setCart] = useOutletContext();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleCart = (item) => {
    if(cart.find(i => i.id === item.id)){
      alert('This item is alredy in your basket!')
    }
    else setCart([...cart, item]);
  };
  return (
    <div className="content content-products">
      {products ? (
        products.map((p) => (
          <div className="card">
            <img src={p.image} alt="" />
            <h2>{p.title}</h2>
            <p className="card-price">{p.price}$</p>
            <button
              className="btn btn-primary"
              onClick={() => handleCart(p)}
            >
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
