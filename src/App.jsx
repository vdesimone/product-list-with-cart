import { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import initialData from "./data.json";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [cartItems, setCartItems] = useState(initialData);
  const [orderConfirmation, setOrderConfirmation] = useState(false);

  const updateItemQuantity = (index, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.index === index) {
        if (item.quantity === 0 && newQuantity === 1) {
          return { ...item, quantity: newQuantity, addedAt: new Date().toISOString() };
        } else {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const updateOrderConfirmation = () => {
    if (orderConfirmation) {
      setCartItems(initialData);
    }
    setOrderConfirmation(prev => !prev);
  };

  return (
    <div className="app-container">
      <Menu
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
      />
      <Cart
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
        updateOrderConfirmation={updateOrderConfirmation}
      />
      {orderConfirmation ? <OrderConfirmation cartItems={cartItems} updateOrderConfirmation={updateOrderConfirmation}/> : ""}
    </div>
  );
}

export default App;
