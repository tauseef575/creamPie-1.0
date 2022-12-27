import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";
import styled from "styled-components";

const Forrm = styled.div`
  border: 1px solid #1d3153;
`;

// const Formm = styled.div`
//   color: black;
//   font-size: 1px;
// `;

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          {/* <Formm> */}
          <Form.Label>Address</Form.Label>
          {/* </Formm> */}
          <Forrm>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Forrm>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Forrm>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Forrm>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Forrm>
            <Form.Control
              type="text"
              pattern="^[0-9]{5}$"
              placeholder="Enter postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Forrm>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Forrm>
            <Form.Control
              type="text"
              placeholder="Enter country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Forrm>
        </Form.Group>

        <Button
          style={{
            background: " #eb7100",
            borderRadius: "2px",
            // color: 'white',
          }}
          type="submit"
          variant="primary"
        >
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
