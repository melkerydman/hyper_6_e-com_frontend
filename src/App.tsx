import { useState, useEffect } from "react";
import { productsData } from "./data";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { Cart } from "./components/index";
import { Header, Footer } from "./layout/index";
import { Product } from "./pages/index";
import { AppGrid } from "./utils/index";

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

  const handleFetchProducts = () => {
    setProducts(productsData);
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
  });

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart isShowing={cart.isShowing} handleOpenCart={handleOpenCart} />
          <Header cart={cart} handleOpenCart={handleOpenCart} />
          <Product addItemToCart={addItemToCart} />
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
