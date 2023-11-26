import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";

export default function Products() {
    return (
      <section className="products">
        {DUMMY_PRODUCTS.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    );
  }