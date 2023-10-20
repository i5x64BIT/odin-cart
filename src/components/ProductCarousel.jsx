import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }) {
  return (
    <section
      className="similar-container"
      aria-aria-description="Similar Products"
    >
      <h3>Similar Products</h3>
      <div className="carousel-container">
        <div className="wrapper">
          {products.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
