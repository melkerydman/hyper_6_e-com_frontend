import { useState } from "react";

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
    handleCartOpen?: () => void;
    amountOfItems?: number;
    // items?: {}[];
  };
  products: {
    title: string;
    artist: string;
    price: number;
    year: number;
    dimensions: string;
    edition: string;
    details: string;
  }[];
}

// Export and put types here
const App = () => {
  const [cart, setCart] = useState<IState["cart"]>({ isShowing: false });

  const handleCartOpen = () => {
    setCart((prev) => ({ ...cart, isShowing: !prev.isShowing }));
  };

  const addItemToCart = () => {
    setCart((prev) => ({
      ...cart,
      amountOfItems: prev.amountOfItems ? prev.amountOfItems + 1 : 1,
    }));
  };

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart isShowing={cart.isShowing} handleCartOpen={handleCartOpen} />
          <Header
            handleCartOpen={handleCartOpen}
            amountOfItems={cart.amountOfItems ? cart.amountOfItems : 0}
          />
          <Product addItemToCart={addItemToCart} />
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
