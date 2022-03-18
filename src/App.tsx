import GlobalStyle from "./styles/global";
import { Header, HorizontalDivider } from "./components/index";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <HorizontalDivider />
      <main>
        <div>product info</div>
        <div>Vertical divider</div>
        <div>Image gallery</div>
      </main>
      <HorizontalDivider />
      <footer>footer</footer>
    </div>
  );
};

export default App;
