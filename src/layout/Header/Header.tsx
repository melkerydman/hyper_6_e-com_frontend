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

interface IProps {
  amountOfItems: number;
  handleCartOpen: () => void;
}

const Header: React.FC<IProps> = ({
  amountOfItems,
  handleCartOpen,
}): JSX.Element => {
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
            handleCartOpen();
          }}
        >
          Bag ({amountOfItems})
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
