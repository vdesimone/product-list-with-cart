import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import iconAddToCart from "../assets/images/icon-add-to-cart.svg";
import iconDecrement from "../assets/images/icon-decrement-quantity.svg";
import iconIncrement from "../assets/images/icon-increment-quantity.svg";

function MenuItem({ item }) {

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(item.quantity)
  }, [item.quantity]);

  const handleAddToCart = (item) => {
    if (item && item.quantity == 0 && itemCount == 0) {
      item.quantity += 1;
      setItemCount(item.quantity);
    }
  }

  const handleIncrement = (item) => {
   if (item.quantity <= 100 && itemCount <= 100) {
    item.quantity += 1;
    setItemCount(item.quantity);
   }
  }

  const handleDecrement = (item) => {
    if (item.quantity >= 0 && itemCount >= 0) {
      item.quantity -= 1;
      setItemCount(item.quantity);
    }
  }

  return (
    <div className="item">
      <img className="menu-img" loading="lazy" src={item.image.desktop} alt={item.name} />
      {itemCount == 0 ? (
        <button className="initial-btn" onClick={() => handleAddToCart(item)}>
          <img src={iconAddToCart} alt="Add to Cart Icon" />
          Add to Cart
        </button>
      ) : (
        <button className="quantity-btn">
          <div className="decrement-icon" onClick={() => handleDecrement(item)}>
            <img className="decrement-icon-img" src={iconDecrement} alt="Decrement Icon" />
          </div>
          {item.quantity}
          <div className="increment-icon" onClick={() => handleIncrement(item)}>
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
};

export default MenuItem;