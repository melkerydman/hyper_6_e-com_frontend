import { useContext } from "react";
import { CartContext } from "../../Contexts";
import { Main as StyledMain } from "./Main.elements";

const Main = ({ children }: any): JSX.Element => {
  const { openCart } = useContext(CartContext);

  return (
    <StyledMain
      style={openCart ? { overflow: "hidden" } : { overflow: "uset" }}
    >
      {children}
    </StyledMain>
  );
};

export default Main;
