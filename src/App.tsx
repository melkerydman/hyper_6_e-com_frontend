import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/Global";
import { Cart } from "./Components";
import { Header, Footer } from "./Layout";
import { AppGrid } from "./Utils";
import { Home, Products, Product } from "./Pages";
import {
  updateCartInDb,
  addCartToDb,
  getCartFromDb,
  getAllProducts,
} from "./Services";
import { ICart, ICartItem, IProduct } from "./Interfaces";
import { CartContext } from "./Contexts";
// import { COLORS } from "./constants";

const App = () => {
  // State and context
  const { cart, setCart, cartIdFromSession } = useContext(CartContext);
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  //Functions
  const handleOpenCart = () => {
    setCart((prev) => ({ ...cart, isShowing: !prev.isShowing }));
  };
  const addItemToCart = (clickedItem: IProduct, passedQuantity?: number) => {
    console.log(cart);

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
        }, [] as ICartItem[]),
      };
    });
  };

  console.log("cart after reload: ", cart);

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
    console.log("cart updated");
    // if no cartId stored - add new cart to db
    // if cartId stored - update db with new data
    if (cartIdFromSession) {
      updateCartInDb(cart, cartIdFromSession);
    }
  }, [cart]);

  return (
    <div className="App">
      {/* <ThemeProvider theme={{ colors: COLORS }}> */}
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
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppGrid>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
