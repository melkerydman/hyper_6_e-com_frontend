import { Header, Nav } from "./Header.elements";

const HeaderBox = () => {
  return (
    <Header>
      <Nav>
        <a href="/">logo</a>
        <ul>
          <li>
            <a href="/">Link One</a>
          </li>
          <li>
            <a href="/">Link Two</a>
          </li>
          <li>
            <a href="/">Link Three</a>
          </li>
        </ul>
        <button>Bag(0)</button>
      </Nav>
    </Header>
  );
};

export default HeaderBox;
