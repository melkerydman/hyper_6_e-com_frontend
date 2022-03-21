import { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { Cart } from "./components/index";
import { Header, Footer } from "./layout/index";
import { Product } from "./pages/index";
import { AppGrid } from "./utils/index";

import { COLORS } from "./constants";

// Types
// export type CartType = {
//   visible?: boolean;
//   handleCartOpen?: () => void;
// };
// Export and put types here
const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Cart visible={cartOpen} handleCartOpen={handleCartOpen} />
          <Header visible={cartOpen} handleCartOpen={handleCartOpen} />
          <Product />
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
