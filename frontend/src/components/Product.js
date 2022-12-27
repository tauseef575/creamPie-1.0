import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5fbfd;
  min-width: 280px;
  // border-radius: 15px;
  // height: 350px;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Card className="shadow p-2 mb-3 bg-white rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">Rs.{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;
