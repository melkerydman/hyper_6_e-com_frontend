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
import { ICart, IProduct } from "../../App";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
}

const Header: React.FC<IProps> = ({ cart, handleOpenCart }): JSX.Element => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to={"/"}>Reverie — Daydream</Logo>
        <Menu>
          <MenuItem>
            <MenuLink to={"/products"}>Shop</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to={"/"}>Story</MenuLink>
          </MenuItem>
        </Menu>
        <CheckoutButton
          onClick={() => {
            handleOpenCart();
          }}
        >
          Bag ({cart.totalQuantity})
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
