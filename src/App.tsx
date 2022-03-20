import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { HorizontalDivider } from "./components/index";
import { Header, Footer, Main } from "./layout/index";
import { Product } from "./pages/index";

import { COLORS } from "./constants";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={{ colors: COLORS }}>
        <GlobalStyle />
        <Header />
        <HorizontalDivider />
        <Product />
        <HorizontalDivider />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
