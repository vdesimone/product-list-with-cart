import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import iconAddToCart from "../assets/images/icon-add-to-cart.svg";
import iconDecrement from "../assets/images/icon-decrement-quantity.svg";
import iconIncrement from "../assets/images/icon-increment-quantity.svg";

function MenuItem({ item, updateItemQuantity }) {

  const [itemCount, setItemCount] = useState(item.quantity);

  useEffect(() => {
    setItemCount(item.quantity);
  }, [item.quantity]);

  const handleAddToCart = () => {
    if (item.quantity === 0 && itemCount === 0) {
      updateItemQuantity(item.index, 1);
    }
  };

  const handleIncrement = () => {
   if (item.quantity < 100) {
    updateItemQuantity(item.index, item.quantity + 1);
   }
  };

  const handleDecrement = () => {
    if (item.quantity > 0) {
      updateItemQuantity(item.index, item.quantity - 1);
    }
  };

  return (
    <div className="item">
      <img className={`menu-img ${item.quantity === 0 ? "" : "selected"}`} loading="lazy" src={item.image.desktop} alt={item.name} />
      {item.quantity === 0 ? (
        <button className="initial-btn" onClick={handleAddToCart}>
          <img src={iconAddToCart} alt="Add to Cart Icon" />
          Add to Cart
        </button>
      ) : (
        <button className="quantity-btn">
          <div className="decrement-icon" onClick={handleDecrement}>
            <img className="decrement-icon-img" src={iconDecrement} alt="Decrement Icon" />
          </div>
          {item.quantity}
          <div className="increment-icon" onClick={handleIncrement}>
            <img className="increment-icon-img" src={iconIncrement} alt="Increment Icon" />
          </div>
        </button>
      )}
      <div className="item-desc">
        <dt className="category">{item.category}</dt>
        <dd className="name">{item.name}</dd>
        <dd className="price">${item.price.toFixed(2)}</dd>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
};

export default MenuItem;