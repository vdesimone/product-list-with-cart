import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";
import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg"

function Cart({ cartItems, updateItemQuantity }) {

  const allQuantityZero = cartItems.every((item) => item.quantity === 0);
  const [cartEmpty, setCartEmpty] = useState(allQuantityZero);

  useEffect(() => {
    setCartEmpty(allQuantityZero);
  }, [cartItems, allQuantityZero]);

  const filteredCartItems = cartItems.filter(item => item.quantity > 0);
  const sortedCartItems = [...filteredCartItems].sort((a, b) => {
    return new Date(a.addedAt) - new Date(b.addedAt);
  });

  const totalItems = sortedCartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPriceOfItems = sortedCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);

  return (
    <div className={cartEmpty ? "cart-container-empty" : "cart-container"}>
      <h2>Your Cart ({totalItems})</h2>
      {cartEmpty ? (
        <div className="empty-cart-contents">
          <img className="empty-cart-img" src={emptyCartImage} alt="Empty Cart Illustration" />
          <p className="empty-cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-contents">
            {sortedCartItems.map((item) => {
              const itemTotalPrice = (item.price * item.quantity).toFixed(2);
              return (
                <li key={item.index} className="item">
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-details">
                      <p className="item-quantity">{item.quantity}x</p>
                      <p className="item-price">@ ${item.price.toFixed(2)}</p>
                      <p className="item-total-price">${itemTotalPrice}</p>
                    </div>
                  </div>
                  <div className="remove-item">
                    <img
                      className="remove-item-icon"
                      src={iconRemoveItem}
                      alt="Remove Item Icon"
                      onClick={() => updateItemQuantity(item.index, 0)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="order-total">
            <p>Order Total</p>
            <h4>${totalPriceOfItems}</h4>
          </div>
          <div className="delivery-info">
            <img src={iconCarbonNeutral} alt="Carbon Neutral Icon" />
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
          <div className="confirm-order">
            <button>Confirm Order</button>
          </div>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
}

export default Cart;