import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { Cart } from "./components/index";
import { Header, Footer } from "./layout/index";
import { AppGrid } from "./utils/index";
import { Products, Product } from "./pages/index";

import { COLORS } from "./constants";

// Interface
export interface ICart {
  isShowing: boolean;
  // items: any[] | [];
  items: IProduct[];
}
export interface IProduct {
  id: number;
  title: string;
  artist: string;
  url: string;
  price: number;
  year: number;
  dimensions: string;
  edition: string;
}
// export interface IState {
//   cart: {
//     isShowing: boolean;
//     amountOfItems?: number;
//     // items?: product[];
//   };
//   product: {
//     title: string;
//     artist: string;
//     url: string;
//     price: number;
//     year: number;
//     dimensions: string;
//     edition: string;
//     details: string;
//   };
// }

// Export and put types here
const App = () => {
  const [cart, setCart] = useState<ICart>({ isShowing: false, items: [] });
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleFetchProducts = async () => {
    const response = await fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const products = await response.json();
    setProducts(products);
  };

  const handleOpenCart = () => {
    setCart((prev) => ({ ...cart, isShowing: !prev.isShowing }));
  };

  const addItemToCart = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!e.currentTarget.dataset.id) return;

    const targetId = e.currentTarget.dataset.id;
    const itemToAdd = products.find(
      (product) => product.id === parseInt(targetId)
    );

    // Return if didn't find item
    if (!itemToAdd) return;

    // Else update cart
    setCart((prev) => ({
      ...cart,
      items: [...prev.items, itemToAdd],
    }));
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart cart={cart} handleOpenCart={handleOpenCart} />
          <Header cart={cart} handleOpenCart={handleOpenCart} />
          <Routes>
            {/* <Route
              path="/product"
              element={<Product addItemToCart={addItemToCart} />}
            /> */}
            <Route
              path="/products"
              element={
                <Products products={products} addItemToCart={addItemToCart} />
              }
            />
          </Routes>
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
