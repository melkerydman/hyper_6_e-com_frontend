import styled from "styled-components";

type HorizontalType = {
  top?: boolean;
  bottom?: boolean;
};
type VerticalType = {
  left?: boolean;
  center?: boolean;
  right?: boolean;
};

export const HorizontalDivider = styled.div<HorizontalType>`
  left: 0;
  bottom: ${({ bottom }) => (bottom ? "0" : "")};
  top: ${({ top }) => (top ? "0" : "")};
  position: absolute;

  width: 100%;
  height: 2px;
  background: #171717;
  opacity: 0.2;
`;

export const VerticalDivider = styled.div<VerticalType>`
  background: #171717;
  opacity: 0.2;
  height: 100%;
  width: 2px;

  position: absolute;
  top: 0;
  left: ${(props) => (props.left && "0") || (props.center && "50%")};
  right: ${(props) => props.right && "0"};

  transform: ${(props) => props.center && "translateX(-50%)"};
`;
