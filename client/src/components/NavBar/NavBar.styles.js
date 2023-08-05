import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

export const PlatformButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  button {
    margin-right: 10px;
    margin-left: 30px;
    background-color: #444;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
    &:active {
      background-color: #666;
    }
  }
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-right: 20px;
  margin-left: 150px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const NavBarInput = styled.input`
  padding: 5px;
  width: 300px;
  border: 1px solid #ccc;
`;

export const NavBarBtn = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #555;
  }
  &:active {
    background-color: #666;
  }
`;