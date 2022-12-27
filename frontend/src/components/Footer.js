// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer

////////////////////////.................FOOTER................//////////////////////

import React from "react";
import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Pinterest,
//   Room,
//   Phone,
//   EmailOutlined,
// } from '@mui/icons-material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// // import AddLocationAltIcon from '@mui/icons-material/AddLocationAltIcon';
// import EmailIcon from '@mui/icons-material/Email';
// import { mobile } from '../responsive';

import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  font-size: 16px;
  background-color: white;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 20px;
`;

const Logo = styled.h3`
  margin-bottom: 25px;
  padding-top: 10px;
`;

const Desc = styled.p`
  margin: 0px 0px;
  // padding-top: -100px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  margin-top: 15px;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  // margin-left: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h2`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Chec = styled.h5`
  margin-top: 60px;
  // margin-left: 40px;
  display: flex;
  align-items: center;
  // color: #1d3153 ;
`;

const ListItem = styled.li`
  width: 100px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  padding: 7px;
  margin-right: 30px;
  // flex-direction: row;
  flex-wrap: wrap;
  &:hover {
    // color: #eb7100;
    background-color: "#fff8f8";
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 80%;
`;
const Hr = styled.div`
  width: 80%;
  font-size: 5px;
`;

export const Footer = () => {
  return (
    <Container
    // className="shadow p-3 mb-5 bg-white rounded"
    // bg="white"
    // color="#1D3153"
    >
      <hr />
      <Left>
        <Logo>CreamyCreations</Logo>
        <Desc>
          CreamyCreations Bakery is a converted cow barn, rustic on the outside
          and perfection on the inside. The breads were all local grain and the
          variation was amazing. There were plaits and cobs, buns and cakes,
          soda breads and flat breads so much and etc. There were plaits and
          cobs, buns and cakes, soda.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <a
              href="https://www.linkedin.com/in/rao-sultan"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Icon.Facebook />
            </a>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a
              href="https://www.linkedin.com/in/rao-sultan"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Icon.Instagram />
            </a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <a
              href="https://www.linkedin.com/in/rao-sultan"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Icon.Twitter />
            </a>
          </SocialIcon>
          <SocialIcon color="E60023">
            <a
              href="https://www.linkedin.com/in/rao-sultan"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Icon.Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>Cart</ListItem>{" "}
          </Link>
          <Link to="/custom" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>Custom</ListItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>About Us</ListItem>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>Contacts</ListItem>
          </Link>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem>Profile</ListItem>
          </Link>
        </List>
        <Chec>Creamy Creations @ 2022.</Chec>
      </Center>

      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Icon.TelephoneOutboundFill style={{ marginRight: "10px" }} />
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="tel: +92 3136034448"
          >
            +92 3136034448
          </a>
        </ContactItem>
        <ContactItem>
          <Icon.EnvelopeAtFill style={{ marginRight: "10px" }} />{" "}
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto: hafizsultan229@gmail.com"
          >
            hafizsultan229@gmail.com
          </a>
        </ContactItem>
        <ContactItem>
          <Icon.GeoAltFill style={{ marginRight: "10px" }} />
          <a style={{ textDecoration: "none", color: "black" }}>
            Model Town, Pakistan
          </a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      <hr></hr>
    </Container>
  );
};
export default Footer;
