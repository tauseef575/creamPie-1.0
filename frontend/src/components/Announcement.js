import styled from "styled-components";
// import { mobile } from '../responsive';
import React from "react";
const Container = styled.div`
  height: 30px;
  // background-image: linear-gradient(#fc575e, #f7b42c);
  background-color: #eb7100;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over 5000</Container>;
};

export default Announcement;
