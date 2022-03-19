import { Main as StyledMain, Left, Right } from "./Main.elements";
import { VerticalDivider } from "../../components/index";
const Main = () => {
  return (
    <StyledMain>
      <Left>Left</Left>
      <VerticalDivider />
      <Right>Right</Right>
    </StyledMain>
  );
};

export default Main;
