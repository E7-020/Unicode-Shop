import "../style/home.css";
import { products } from "../utils/products";
const Home = ({ add, count }) => {
  return (
    <div className="container">
      {products.map((item) => {
        return (
          <div key={count.id} className="products">
            <div className="image">
              <img className="photo" src={item.image} alt="" />
            </div>
            <div className="name">
              <p>{item.name}</p>
            </div>
            <div className="price">
              <p>{item.price} рублей</p>
            </div>
            <button
              disabled={count.includes(item)}
              className="btn"
              onClick={() => add(item)}
              type="button"
            >
              {count.includes(item) ? "Уже в корзине" : "Добавить в корзину"}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
