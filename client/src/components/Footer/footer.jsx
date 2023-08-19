import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import img from "../../assets/stripe-payment.png";
import { Container, Left, Logo, Desc, Social, SocialIcon, Right, Title, ContactItem, Payment } from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Gaming Shop</Logo>
        <Desc>
          Find all the latest digital games, here with us!
        </Desc>
        <Social>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </Social>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 123 Street, City, Country
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@henry.dev
        </ContactItem>
        <Payment src={img} alt="stripe-payments" />
      </Right>
    </Container>
  );
};

export default Footer;