import { VerticalDivider } from "../../components/index";
import { Footer as StyledFooter, FooterContent } from "./Footer.elements";

const Footer = () => {
  return (
    <StyledFooter>
      <VerticalDivider />
      <FooterContent>
        <p>Company Name</p>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
