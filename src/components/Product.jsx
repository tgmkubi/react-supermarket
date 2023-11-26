import PropTypes from "prop-types";
import { CartContext } from '../store/cart-context.jsx';
import { useContext } from "react";

export default function Product({ image, title, price, id }) {
  const {addItem} = useContext(CartContext);

  const formattedPrice = price.toFixed(2); // İki ondalık basamak kullanarak formatla "19.00"
  return (
    <article className="product">
      <div className="product-content">
        <img className="product-image" src={image} alt={title} />
        <p className="product-title">{title}</p>
      </div>
      <div className="product-actions">
        <p className="product-price">{formattedPrice}</p>
        <button onClick={() => addItem(id)} className="product-button">+</button>
      </div>
    </article>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};
