import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider, ProductProvider } from "./Contexts";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
