import { useContext } from "react";
import {
  Header as StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  CheckoutButton,
} from "./styled";
import { HorizontalDivider, Cart } from "..";
import { CartContext } from "../../Contexts";

const Header: React.FC = (): JSX.Element => {
  const { cart, setOpenCart } = useContext(CartContext);

  const handleOpenCart = () => {
    setOpenCart((prevOpenCart) => !prevOpenCart);
  };

  return (
    <StyledHeader>
      <Nav>
        <Logo to={"/"}>Hyper_6</Logo>
        <Menu>
          <MenuItem>
            <MenuLink to={"/products"}>Prints</MenuLink>
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
      <Cart handleOpenCart={handleOpenCart} />
    </StyledHeader>
  );
};

export default Header;
