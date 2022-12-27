import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Forrm = styled.div`
  // border: 1px solid #1D3153;
  // border-radius: 5px;
  // width: 140px;

  // background-color: white;
`;
const Button = styled.button`
  border: 1px solid #1d3153;
  padding: 10px;
  border-radius: 8px;
  margin-left: 10px;
  width: 80px;
  height: 48px;
  font-size: 14px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #eb7100;
    color: white;
    border: none;
    // transform: scale(1.1);
  }
`;

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Forrm>
        <Form.Control
          style={{
            // background: ' #1D3153',
            border: "1px solid #1D3153",
            borderRadius: "2px",
            color: "black",
          }}
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
      </Forrm>
      <Button
        style={{
          borderRadius: "2px",
        }}
        type="submit"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
