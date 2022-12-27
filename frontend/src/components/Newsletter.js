// import { SendRounded } from '@mui/icons-material';
import React from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #f3f3f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-top: 20px;
  ${mobile({ fontSize: "40px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const Form = styled.div`
  width: 50%;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:hover {
    border: 3px solid lightgray;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #eb7100;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;
// const Form = styled.div``;

const Newsletter = () => {
  return (
    <Container>
      <hr />
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite Bakery Items.</Desc>
      <Form
        action="https://formsubmit.co/creamycreations229@gmail.com"
        method="POST"
      >
        <Input type="email" placeholder="Enter Your Email" name="email" />
        <Button type="submit" value="Subscribe">
          <Icon.GooglePlay />
        </Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
