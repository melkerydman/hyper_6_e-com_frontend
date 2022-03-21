import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { Header, Footer } from "./layout/index";
import { Product } from "./pages/index";
import { AppGrid } from "./utils/index";

import { COLORS } from "./constants";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <AppGrid>
          <Header />
          <Product />
          <Footer />
        </AppGrid>
      </ThemeProvider>
    </div>
  );
};

export default App;
