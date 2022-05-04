import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Global";
import { Header, Footer } from "./Components";
import { AppGrid } from "./Components/Utility";
import { Home, Products, Product, Checkout, AdminPanel } from "./Pages";
import { useProducts } from "./Hooks";
import { CartContext, ProductContext, CheckoutProvider } from "./Contexts";
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
        <CheckoutProvider>
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
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="products/:id" element={<Product />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CheckoutProvider>
        <Footer />
      </AppGrid>
    </div>
  );
};

export default App;
