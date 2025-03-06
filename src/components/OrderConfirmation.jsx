import PropTypes from "prop-types";
import iconOrderConfirmation from "../assets/images/icon-order-confirmed.svg";

function OrderConfirmation({ cartItems, updateOrderConfirmation }) {
  const filteredCartItems = cartItems.filter(item => item.quantity > 0);
  const sortedCartItems = [...filteredCartItems].sort((a, b) => {
    return new Date(a.addedAt) - new Date(b.addedAt);
  });

  const totalPriceOfItems = sortedCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);

  return (
    <div className="order-confirmation-container">
      <div className="order-confirmation">
        <div className="icon">
          <img src={iconOrderConfirmation} alt="Order Confirmation Icon" />
        </div>
        <h2>Order Confirmed</h2>
        <p className="header-desc">We hope you enjoy your food!</p>
        <ul className="order-info">
          {sortedCartItems.map((item) => {
            const itemTotalPrice = (item.price * item.quantity).toFixed(2);
            return (
              <li key={item.index} className="item">
                <div className="info">
                  <div className="details-container">
                    <img src={item.image.thumbnail} alt={item.name}></img>
                    <div className="details">
                      <h3>{item.name}</h3>
                      <div className="desc">
                        <p className="quantity">{item.quantity}x</p>
                        <p className="price">@ ${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <p className="item-total-price">${itemTotalPrice}</p>
                </div>
              </li>
            );
          })}
          <div className="order-total">
            <p>Order Total</p>
            <h4>${totalPriceOfItems}</h4>
          </div>
        </ul>
        <div className="start-new-order">
          <button onClick={() => updateOrderConfirmation()}>Start New Order</button>
        </div>
      </div>
    </div>
  );
}

OrderConfirmation.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateOrderConfirmation: PropTypes.func.isRequired,
}

export default OrderConfirmation;