import data from "../data.json";
import iconAddToCart from "../assets/images/icon-add-to-cart.svg";

function Menu() {

  return (
    <div className="menu-container">
      <h1>Desserts</h1>
      <dl className="menu-items">
        {data.map((item) => (
          <dt key={item} className="item">
            <img className="menu-img" loading="lazy" src={item.image.desktop} alt={item.name} />
            <button>
              <img src={iconAddToCart} alt="Add to Cart Icon" />
              Add to Cart
            </button>
            <div className="item-desc">
              <dd className="category">{item.category}</dd>
              <dd className="name">{item.name}</dd>
              <dd className="price">${item.price.toFixed(2)}</dd>
            </div>
          </dt>
        ))}
      </dl>
    </div>
  );
}

export default Menu;