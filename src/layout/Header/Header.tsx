import {
  Header as StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  CheckoutButton,
} from "./Header.elements";

import { HorizontalDivider } from "../../components/index";

const Header = (props: any) => {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">Reverie — Daydream</Logo>
        <Menu>
          <MenuItem>
            <MenuLink>Shop</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink>Story</MenuLink>
          </MenuItem>
        </Menu>
        <CheckoutButton
          onClick={() => {
            props.handleCartOpen();
          }}
        >
          Bag (0)
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
