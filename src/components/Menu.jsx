import data from "../data.json";
import iconAddToCart from "../assets/images/icon-add-to-cart.svg";
import cremeBruleeImage from "../assets/images/image-creme-brulee-desktop.jpg";

function Menu() {

  return (
    <div className="menu-container">
      <h1>Desserts</h1>
      <dl className="menu-items">
        <dt className="item">
          <img className="menu-img" src={cremeBruleeImage} alt="Creme Brulee Image" />
          <button>
            <img src={iconAddToCart} alt="Add to Cart Icon" />
            Add to Cart
          </button>
          <div className="item-desc">
            <dd className="category">Crème Brûlée</dd>
            <dd className="name">Vanilla Bean Crème Brûlée</dd>
            <dd className="price">$7.00</dd>
          </div>
        </dt>
      </dl>
    </div>
  );
}

export default Menu;