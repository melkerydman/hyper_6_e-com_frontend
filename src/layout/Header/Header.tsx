import {
  Header as StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  CheckoutButton,
} from "./Header.elements";
import { HorizontalDivider } from "../../Components";
import { ICart } from "../../App";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
}

const Header: React.FC<IProps> = ({
  cart: { items },
  handleOpenCart,
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
            handleOpenCart();
          }}
        >
          Bag ({items.length})
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
