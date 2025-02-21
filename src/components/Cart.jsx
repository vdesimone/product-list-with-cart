import emptyCartImage from "../assets/images/illustration-empty-cart.svg";

function Cart() {

  return (
    <div className="cart-container">
      <h2>Your Cart (0)</h2>
      <div className="cart-contents">
        <img className="empty-cart-img" src={emptyCartImage} alt="Empty Cart Illustration" />
        <p className="empty-cart-text">Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;