import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/Global";
import { Cart } from "./Components";
import { Header, Footer } from "./Layout";
import { AppGrid } from "./Utils";
import { Products, Product } from "./Pages";
import { getAllProducts } from "./Services";

import { COLORS } from "./constants";

/**
 * todo add cartContext
 * todo break out interfaces
 * todo - not part of mvp but have stock property for items
 */

// Interface
export interface ICart {
  isShowing: boolean;
  items: IProduct[];
  totalQuantity: number;
}
// export interface ICart {
//   isShowing: boolean;
//   items: ICartItem[];
// }
export interface ICartItem extends IProduct {
  quantity: number;
}
export interface IProduct {
  _id: string;
  title: string;
  exhibition: string;
  artist: string;
  url: string;
  price: number;
  year: number;
  dimensions: string;
  edition: string;
  details: string;
  quantity?: number;
}

// Export and put types here
const App = () => {
  // items: [] as ICartItem[] - change to this at later stage when safe
  const [cart, setCart] = useState<ICart>({
    isShowing: false,
    items: [],
    totalQuantity: 0,
  });
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  // const handleFetchProducts = async () => {
  //   const response = await fetch("products.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const products = await response.json();
  //   setProducts(products);
  // };

  const handleOpenCart = () => {
    setCart((prev) => ({ ...cart, isShowing: !prev.isShowing }));
  };

  const addItemToCart = (clickedItem: IProduct, passedQuantity?: number) => {
    setCart((prev) => {
      const itemAlreadyInCart = prev.items.find(
        (item) => item._id === clickedItem._id
      );

      // If item doesn't exist in cart, add it
      if (!itemAlreadyInCart) {
        return {
          ...prev,
          // If specific quantity has been passed increase totalQuantity with that, otherwise increment by one
          totalQuantity: passedQuantity
            ? prev.totalQuantity + passedQuantity
            : prev.totalQuantity + 1,
          // If specific quantity has been passed increase quantity with that, otherwise increment by one
          items: [
            ...prev.items,
            { ...clickedItem, quantity: passedQuantity ? passedQuantity : 1 },
          ],
        };
      }
      return {
        ...prev,
        totalQuantity: passedQuantity
          ? prev.totalQuantity + passedQuantity
          : prev.totalQuantity + 1,
        items: prev.items.map((item) =>
          item._id === clickedItem._id && item.quantity
            ? {
                ...item,
                quantity: passedQuantity
                  ? item.quantity + passedQuantity
                  : item.quantity + 1,
              }
            : item
        ),
      };
    });
  };

  const removeItemFromCart = (id: string) => {
    setCart((prev) => {
      return {
        ...prev,
        totalQuantity: prev.totalQuantity - 1,
        items: prev.items.reduce((acc, item) => {
          if (item._id === id) {
            if (item.quantity === 1) return acc;
            return [...acc, { ...item, quantity: item.quantity! - 1 }];
          } else {
            return [...acc, item];
          }
        }, [] as IProduct[]),
      };
    });
  };

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      setProducts(products);
    })();
    // handleFetchProducts();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart
            cart={cart}
            handleOpenCart={handleOpenCart}
            removeItemFromCart={removeItemFromCart}
            addItemToCart={addItemToCart}
          />
          <Header cart={cart} handleOpenCart={handleOpenCart} />
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
          </Routes>
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
