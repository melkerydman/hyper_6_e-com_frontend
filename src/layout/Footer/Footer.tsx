import { VerticalDivider, HorizontalDivider } from "../../components/index";
import { Footer as StyledFooter, FooterContent } from "./Footer.elements";

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
