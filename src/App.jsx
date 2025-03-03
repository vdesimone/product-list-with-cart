import { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import initialData from "./data.json";

function App() {
  const [cartItems, setCartItems] = useState(initialData);

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

  return (
    <div className="app-container">
      <Menu
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
      />
      <Cart
        cartItems={cartItems}
        updateItemQuantity={updateItemQuantity}
      />
    </div>
  );
}

export default App;
