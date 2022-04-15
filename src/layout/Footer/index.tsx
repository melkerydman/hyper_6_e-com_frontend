import { Link } from "react-router-dom";
import { VerticalDivider, HorizontalDivider } from "../../Components";
import { Footer as StyledFooter, FooterContent } from "./styled";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <HorizontalDivider top />
        <VerticalDivider center />
        <FooterContent>
          <h3>Shooting Season</h3>
          <div style={{ flex: "1" }}>
            <h4>Shooting Season</h4>

            <Link to="/admin" style={{ textIndent: "0" }}>
              Admin
            </Link>
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
