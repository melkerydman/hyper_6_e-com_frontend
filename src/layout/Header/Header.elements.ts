/**
 * TODO MenuLink to react-router Link instead of a-tag
 */

import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  /* background: ${({ theme }) =>
    theme.colors.neutral.w300 ? theme.colors.neutral.w300 : "#efefef"}; */
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Nav = styled.nav`
  /* Display */
  display: flex;

  /* * Box model */
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  text-transform: uppercase;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const MenuItem = styled.li``;
export const MenuLink = styled.a``;

export const CheckoutButton = styled.button``;
