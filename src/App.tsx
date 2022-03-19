import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { HorizontalDivider } from "./components/index";
import { Header, Main, Footer } from "./layout/index";

import { COLORS } from "./constants";

const App = () => {
  return (
    <ThemeProvider theme={{ colors: COLORS }}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <HorizontalDivider />
        <Main />
        <HorizontalDivider />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
