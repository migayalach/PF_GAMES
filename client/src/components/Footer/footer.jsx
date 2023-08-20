import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import img from "../../assets/stripe-payment.png";
import {
  Container,
  Left,
  Logo,
  Desc,
  Social,
  SocialIcon,
  Right,
  Title,
  CenterContainer,
  ContactItem,
  Payment,
} from "./Footer.styles";
import Modal from "@mui/material/Modal"; // Importa el componente Modal de Material-UI
import Button from "@mui/material/Button"; // Importa el componente Button de Material-UI
import { useState } from "react"; // Importa el hook useState de React
import ContactForm from "./Contact Form/ContactForm";
import { Stack } from "@mui/system";

const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Container>
      <Left>
        <Logo>Gaming Shop</Logo>
        <Desc>Find all the latest digital games, here with us!</Desc>
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
        <Button variant="contained" onClick={toggleFormVisibility}>
          Send us a message
        </Button>
        <Modal
          open={isFormVisible}
          onClose={toggleFormVisibility}
          aria-labelledby="contact-form-modal"
        >
          <CenterContainer>
            <ContactForm onSubmit={toggleFormVisibility} />
            <Stack spacing={3} display="inline-flex" width={365}>
            <Button variant="outlined" onClick={toggleFormVisibility}>
              Close
            </Button>
            </Stack>
          </CenterContainer>
        </Modal>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> 503 Water St, California,
          United States
        </ContactItem>
        <ContactItem>
          <WhatsAppIcon style={{ marginRight: "10px" }} /> +1 (415)555-5678
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
          henry-devs@gmail.com
        </ContactItem>
        <Payment src={img} alt="stripe-payments" />
      </Right>
    </Container>
  );
};

export default Footer;
