import { useContext } from "react";
import {
  Header as StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  CheckoutButton,
} from "./Header.elements";
import { HorizontalDivider, Cart } from "../../Components";
import { ICart, IProduct } from "../../Interfaces";
import { CartContext } from "../../Contexts";

// interface IProps {
//   cart: ICart;
//   handleOpenCart: () => void;
// }

const Header: React.FC = (): JSX.Element => {
  const { cart, setOpenCart } = useContext(CartContext);

  const handleOpenCart = () => {
    setOpenCart((prevOpenCart) => !prevOpenCart);
  };

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
      <Cart handleOpenCart={handleOpenCart} />
    </StyledHeader>
  );
};

export default Header;
