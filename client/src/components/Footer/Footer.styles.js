import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Logo = styled.h1`
  font-weigth: 800;
  font-size: 40px;
  color: gray;
  text-shadow: 3px 3px 5px #000000;
  font-family: "Roboto", sans-serif;
`;

export const Desc = styled.p`
  margin-top: 1px;
  margin-bottom: 20px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  text-shadow: 3px 3px 5px #000000;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 25px;
  margin-left: 110px;
`;

export const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 3px 3px 5px #000000;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const Payment = styled.img`
  width: 65%;
  margin-bottom: 20px;
`;
export const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 24px;
  padding: 16px;
`;
