import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import img from "../../assets/stripe-payment.png";
import { Container, Left, Logo, Desc, Social, SocialIcon, Right, Title, ContactItem, Payment } from "./footer.styles";

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
            <FacebookRoundedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </Social>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 123 Street, City, Country
        </ContactItem>
        <ContactItem>
          <WhatsAppIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> contact@henry.dev
        </ContactItem>
        <Payment src={img} alt="stripe-payments" />
      </Right>
    </Container>
  );
};

export default Footer;