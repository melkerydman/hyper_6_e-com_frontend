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

const Header: React.FC<IProps> = ({
  cart: { items },
  handleOpenCart,
}): JSX.Element => {
  const calculateItemsInBag = (items: IProduct[]): number => {
    return items.reduce(
      (currentAmountOfItems: number, item: IProduct): number => {
        return item.quantity! + currentAmountOfItems;
      },
      0
    );
  };

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
          Bag ({calculateItemsInBag(items)})
        </CheckoutButton>
      </Nav>
      <HorizontalDivider bottom />
    </StyledHeader>
  );
};

export default Header;
