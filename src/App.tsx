import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/Global";
import { Header, Footer } from "./Layout";
import { AppGrid } from "./Utils";
import { Home, Products, Product, Checkout } from "./Pages";
import { useProducts } from "./Hooks";
import { CartContext, ProductContext } from "./Contexts";
// import { COLORS } from "./constants";

const App = () => {
  const { cart, openCart } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductContext);
  const { getAllProducts } = useProducts();

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setProducts(products);
      console.log("page reloaded");
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      className="App"
      style={openCart ? { overflow: "hidden" } : { overflow: "unset" }}
    >
      <GlobalStyle />
      <AppGrid>
        <Header />
        <Routes>
          <Route
            path="/checkout/success"
            element={
              <>
                <h2>Order successful!</h2>
              </>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppGrid>
    </div>
  );
};

export default App;
