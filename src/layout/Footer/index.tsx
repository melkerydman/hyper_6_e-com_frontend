import { VerticalDivider, HorizontalDivider } from "../../Components";
import { Footer as StyledFooter, FooterContent } from "./styled";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <HorizontalDivider top />
        <VerticalDivider center />
        <FooterContent>
          <p>Company Name</p>
        </FooterContent>
      </StyledFooter>
    </>
  );
};

export default Footer;
