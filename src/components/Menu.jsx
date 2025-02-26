import data from "../data.json";
import MenuItem from "./MenuItem";

function Menu() {

  return (
    <div className="menu-container">
      <h1>Desserts</h1>
      <dl className="menu-items">
        {data.map((item) => (
          <MenuItem
            key={item.index}
            item={item}
          />
        ))}
      </dl>
    </div>
  );
}

export default Menu;