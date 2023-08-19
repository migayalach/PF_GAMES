import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  color: #fff;
  padding: 10px;
`;

export const CartButton = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 30px;
  &:hover {
    background-color: #555;
  }
  &:active {
    background-color: #666;
  }
`;

export const ProfileButton = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 30px;
  &:hover {
    background-color: #555;
  }
  &:active {
    background-color: #666;
  }
`;

export const NavButton = styled.button`
  text-decoration: none;
  color: black;
  margin-left: 40px;
  margin-right: 40px;
  border: none;
  background: none;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid black;

    border-radius: 5px;
  }
`;