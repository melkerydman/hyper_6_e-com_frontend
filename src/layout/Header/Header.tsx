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
import { ICart, IProduct } from "../../Interfaces";

interface IProps {
  cart: ICart;
  handleOpenCart: () => void;
}

const Header: React.FC<IProps> = ({ cart, handleOpenCart }): JSX.Element => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to={"/"}>Name</Logo>
        <Menu>
          <MenuItem>
            <MenuLink to={"/products"}>Shop</MenuLink>
          </MenuItem>
        </Menu>
        <CheckoutButton
          onClick={() => {
            handleOpenCart();
          }}
        >
          Bag({cart.totalQuantity || 0})
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
