import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import { Footer } from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./footer/Footer";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />

      <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}

        {/* <Route
          path="/Products"
          element={<Products handleClick={handleClick} />}
        /> */}

        {/* <Route
          path="/Cart"
          element={
            <cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
