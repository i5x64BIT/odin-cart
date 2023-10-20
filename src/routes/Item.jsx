import { useContext } from "react";
import AddToCartButton from "../components/AddToCartButton";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

export default function Item() {
  const { products, updateProducts } = useContext(CartContext);

  const path = useLocation().pathname;
  const key = path.split("/")[2];

  const item = products.find((i) => i.id === Number.parseInt(key));
  return (
    <div className="content">
      <section className="item-container">
        <img src={item.image} />
        <div>
          <section
            className="item-information"
            aria-description="Product Information"
          >
            <div className="item-header">
              <h1>{item.title}</h1>
              <p aria-description="Product Price">{item.price}$</p>
            </div>
            <h2 className="item-category" aria-description="Product Category">
              {item.category}
            </h2>
            <p aria-description="Product Description">{item.description}</p>
          </section>
          <ul>
            <li>
              <AddToCartButton item={item} />
            </li>
            <li>
              <button>Buy Now</button>
            </li>
          </ul>
        </div>
      </section>
      <ProductCarousel
        products={products.filter((p) => p.category === item.category)}
      />
    </div>
  );
}
