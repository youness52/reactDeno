import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
import Nav from "./Navbar";
// import Footer from './Footer';
import Categories from "./components/categories.component";

import Example from "./components/modal";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    

    <Categories />
    {/* <Example /> */}
    {/* <App /> */}
    {/* <ProductsDemo /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);
