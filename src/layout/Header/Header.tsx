import {
  Header as StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  CheckoutButton,
} from "./Header.elements";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">Logo</Logo>
        <Menu>
          <MenuItem>
            <MenuLink>Link One</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Link One</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Link One</MenuLink>
          </MenuItem>
        </Menu>
        <CheckoutButton>Bag (0)</CheckoutButton>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
