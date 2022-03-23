import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { productsData } from "./data";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { Cart } from "./components/index";
import { Header, Footer } from "./layout/index";
import { AppGrid } from "./utils/index";
import { Products, Product } from "./pages/index";

import { COLORS } from "./constants";

// Interface
export interface IState {
  cart: {
    isShowing: boolean;
    amountOfItems?: number;
    // items?: {}[];
  };
  product: {
    title: string;
    artist: string;
    price: number;
    year: number;
    dimensions: string;
    edition: string;
    details: string;
  };
}

// Export and put types here
const App = () => {
  const [cart, setCart] = useState<IState["cart"]>({ isShowing: false });
  const [products, setProducts] = useState<IState["product"][]>();

  const handleFetchProducts = async () => {
    await setProducts(productsData);
    console.log(products);
  };

  const handleOpenCart = () => {
    setCart((prev) => ({ ...cart, isShowing: !prev.isShowing }));
  };

  const addItemToCart = () => {
    setCart((prev) => ({
      ...cart,
      amountOfItems: prev.amountOfItems ? prev.amountOfItems + 1 : 1,
    }));
  };

  useEffect(() => {
    handleFetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart cart={cart} handleOpenCart={handleOpenCart} />
          <Header cart={cart} handleOpenCart={handleOpenCart} />
          <Routes>
            <Route
              path="/product"
              element={<Product addItemToCart={addItemToCart} />}
            />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
