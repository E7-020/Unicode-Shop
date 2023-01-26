import "../style/home.css";
const Basket = ({ count, setCount, onClickAdd }) => {
  function Delete(id) {
    setCount(count.filter((item) => item.id !== id));
    onClickAdd();
  }

  return (
    <div className="container">
      {count.map((item) => {
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
              className="btn"
              onClick={() => Delete(item.id)}
              type="button"
            >
              Удалить из корзины
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
