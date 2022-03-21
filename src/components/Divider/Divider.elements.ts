import styled from "styled-components";

interface IHorizontal {
  top?: boolean;
  bottom?: boolean;
}
interface IVertical {
  left?: boolean;
  center?: boolean;
  right?: boolean;
}

export const HorizontalDivider = styled.div<IHorizontal>`
  left: 0;
  bottom: ${({ bottom }) => (bottom ? "0" : "")};
  top: ${({ top }) => (top ? "0" : "")};
  position: absolute;

  width: 100%;
  height: 1px;
  background: #171717;
`;

export const VerticalDivider = styled.div<IVertical>`
  background: #171717;
  height: 100%;
  width: 1px;

  position: absolute;
  top: 0;
  left: ${(props) => (props.left && "0") || (props.center && "50%")};
  right: ${(props) => props.right && "0"};

  transform: ${(props) => props.center && "translateX(-50%)"};
`;
