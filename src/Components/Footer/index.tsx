import { Link } from "react-router-dom";
import { VerticalDivider, HorizontalDivider } from "..";
import { Footer as StyledFooter, FooterContent } from "./styled";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <HorizontalDivider top />
        <VerticalDivider center />
        <FooterContent>
          <h3>HYPER_6</h3>
          <div style={{ flex: "1" }}>
            <h4>Hyper_6</h4>
            <div>
              <Link to="/products" style={{ textIndent: "0" }}>
                Prints
              </Link>
            </div>
            <div>
              <Link to="/admin" style={{ textIndent: "0" }}>
                Admin
              </Link>
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <h4>Contact</h4>
            <div>
              <span>E.</span>
              <a href="mailto:melkerrydman@gmail.com">melkerrydman@gmail.com</a>
            </div>
            <div>
              <span>L.</span>
              <a
                href="https://www.linkedin.com/in/melkerydman/"
                target="_blank"
                rel="noreferrer"
              >
                @melkerydman
              </a>
            </div>
            <div>
              <span>GH.</span>
              <a
                href="https://github.com/melkerydman"
                target="_blank"
                rel="noreferrer"
              >
                @melkerydman
              </a>
            </div>
          </div>
        </FooterContent>
      </StyledFooter>
    </>
  );
};

export default Footer;
