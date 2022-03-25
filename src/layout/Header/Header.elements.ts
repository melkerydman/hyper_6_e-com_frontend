/**
 * TODO MenuLink to react-router Link instead of a-tag
 */

import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  background: ${({ theme }) => theme.colors.primary};

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Nav = styled.nav`
  /* Display */
  display: flex;

  position: relative;

  /* * Box model */
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: var(--h3);
  color: #000;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);
`;

export const MenuItem = styled.li``;
export const MenuLink = styled.a`
  font-size: var(--h3);
`;

export const CheckoutButton = styled.button`
  background: transparent;
  border: none;
  font-size: var(--h3);

  cursor: pointer;
`;
