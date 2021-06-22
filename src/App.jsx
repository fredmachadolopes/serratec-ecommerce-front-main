import React from "react";

import PrimarySearchAppBar from "./components/Header";
import Home from "./components/Home/Home.jsx";

import Cart from "./pages/Cart";

import styles from "./global.scss"

function App() {
  return (
    <div className={styles}>
      <PrimarySearchAppBar />
      <Cart />
      <Home></Home>
    </div>
  );
}

export default App;
