import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function Menu({ cartItems, updateItemQuantity }) {

  return (
    <div className="menu-container">
      <h1>Desserts</h1>
      <dl className="menu-items">
        {cartItems.map((item) => (
          <MenuItem
            key={item.index}
            item={item}
            updateItemQuantity={updateItemQuantity}
          />
        ))}
      </dl>
    </div>
  );
}

Menu.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
}

export default Menu;