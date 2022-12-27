import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listCustomDetails, updateCustom } from "../actions/customActions";
import {
  // listCustoms,
  //   deleteCustom,
  createCustom,
} from "../actions/customActions";
import { CUSTOM_CREATE_RESET } from "../constants/customConstants";

import styled from "styled-components";
const Forrm = styled.div`
  border: 1px solid #eb7100;
`;

const CustomEditScreen = ({ match, history }) => {
  const customId = match.params.id;

  //   const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(0);
  const [image, setImage] = useState("");
  //   const [brand, setBrand] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [countInStock, setCountInStock] = useState(0);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const customDetails = useSelector((state) => state.customDetails);
  const { loading, error, custom } = customDetails;

  // const customUpdate = useSelector((state) => state.customUpdate);
  // const {
  //   loading: loadingUpdate,
  //   error: errorUpdate,
  //   success: successUpdate,
  // } = customUpdate;
  const customCreate = useSelector((state) => state.customCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    custom: createdCustom,
  } = customCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: CUSTOM_CREATE_RESET });

    if (!userInfo || !userInfo) {
      history.push("/login");
    }
    if (successCreate) {
      // history.push("/");
      history.push("/hooray");
    } else {
      // dispatch(listCustoms("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    // successDelete,
    successCreate,
    createdCustom,
    // pageNumber,
  ]);
  const createCustomHandler = () => {
    dispatch(createCustom());
  };

  useEffect(() => {
    if (history) {
      // dispatch({ type: CUSTOM_UPDATE_RESET });
      // history.push("/admin/customlist");
    } else {
      if (!custom || custom) {
        dispatch(listCustomDetails(customId));
      } else {
        setDescription(custom.description);
        setNumber(custom.number);
        setImage(custom.image);
        // setName(product.name);
        // setBrand(product.brand);
        // setCategory(product.category);
        // setCountInStock(product.countInStock);
      }
    }
  }, [dispatch, history, customId, custom]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCustom({
        // _id: customId,
        description,
        number,
        image,
        // name,
        // brand,
        // category,
        // countInStock,
      })
    );
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=custom");
  };
  return (
    <>
      <Link
        style={{
          // background: ' #eb7100',
          border: "2px solid #eb7100",
          background: "#eb7100",
          color: "white",
        }}
        to="/"
        className="btn btn-light my-3"
      >
        Go Back
      </Link>
      <Col className="text-right">
        <Button
          style={{
            background: " #F3F3F9",
            borderRadius: "2px",
            // color: 'white',
          }}
          className="my-3"
          onClick={createCustomHandler}
        ></Button>
      </Col>
      <FormContainer>
        <h1>Enter Custom Order Details</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="number">
              <Form.Label>Phone Number</Form.Label>
              <Forrm>
                <Form.Control
                  type="phone"
                  pattern="[1-9]{1}[0-9]{9}"
                  required={true}
                  placeholder="Enter number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                ></Form.Control>
              </Forrm>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Forrm>
                <Form.Control
                  type="text"
                  required={true}
                  placeholder="Enter image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
              </Forrm>
              {/* <Forrm> */}
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {/* </Forrm> */}
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Forrm>
                <Form.Control
                  type="text"
                  maxlength="10"
                  required={true}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Forrm>
            </Form.Group>

            <Button
              style={{
                background: "#eb7100",
                borderRadius: "2px",
                // color: 'white',
              }}
              type="submit"
              variant="primary"
            >
              Submit Custom Order
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default CustomEditScreen;
