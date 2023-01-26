import { Link, Route, Routes } from "react-router-dom";
import "../style/app.css";
import Home from "./Home";
import Basket from "./Basket";
import CartImg from "../assets/cart.png";
import { useState } from "react";

function App() {
  const [count, setCount] = useState([]);
  const [num, setNum] = useState(0);

  const add = (product) => {
    setCount([...count, product]);
    setNum(num + 1);
  };

  const onClickAdd = () => {
    setNum(num - 1);
  };

  return (
    <div className="cont">
      <nav className="menu">
        <div className="menu-list">
          <div className="menu-list-header">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Unicode shop
            </Link>
          </div>

          <div className="menu-list-icon">
            <Link to="/basket">
              <img src={CartImg} alt="" />
            </Link>
            <p className="menu-list-counter">{num}</p>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home add={add} count={count} setCount={setCount} />}
        />
        <Route
          path="/basket"
          element={
            <Basket onClickAdd={onClickAdd} count={count} setCount={setCount} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
