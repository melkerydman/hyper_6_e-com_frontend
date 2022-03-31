import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/Global";
import { Header, Footer } from "./Layout";
import { AppGrid } from "./Utils";
import { Home, Products, Product } from "./Pages";
import {
  updateCartInDb,
  addCartToDb,
  getCartFromDb,
  getAllProducts,
} from "./Services";
import { IProduct } from "./Interfaces";
import { CartContext } from "./Contexts";
// import { COLORS } from "./constants";

const App = () => {
  const { cart, setCart, cartIdFromSession, addItemToCart } =
    useContext(CartContext);
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setProducts(products);
      console.log("page reloaded");

      // First check if there is already a cart in Session storage
      // If yes - return
      // If no run function addCartToDb
      // then save cartId to session storage sessionStorage
      if (cartIdFromSession) {
        console.log("cart id exists");
        const dataFromDb = await getCartFromDb(cartIdFromSession);
        // console.log("dataFromDb: ", dataFromDb);
        setCart(dataFromDb);
      } else {
        // When cart is added for the first time to Db, it returns its MongoDB id
        console.log("cart: ", cart);
        const cartId = await addCartToDb(cart);
        if (cartId) {
          sessionStorage.setItem("cartId", cartId);
        }
      }
    })();
  }, []);

  useEffect(() => {
    // if no cartId stored - add new cart to db
    // if cartId stored - update db with new data
    if (cartIdFromSession && cart.totalQuantity > 0) {
      updateCartInDb(cart, cartIdFromSession);
    }
  }, [cart]);

  return (
    <div className="App">
      <GlobalStyle />
      <AppGrid>
        <Header />
        <Routes>
          <Route
            path="/products"
            element={
              <Products products={products} addItemToCart={addItemToCart} />
            }
          />
          <Route
            path="products/:id"
            element={<Product addItemToCart={addItemToCart} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppGrid>
    </div>
  );
};

export default App;
