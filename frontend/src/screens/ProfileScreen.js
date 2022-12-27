import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import styled from "styled-components";

const Forrm = styled.div`
  border: 1px solid #eb7100;
`;

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={9}>
        <h2
          style={{
            marginTop: "27px",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          My Profile
        </h2>
        {message && <Message variant="danger">{message}</Message>}
        {}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Forrm>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Forrm>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Forrm>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Forrm>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Forrm>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Forrm>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Forrm>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              Update
            </Button>
          </Form>
        )}
      </Col>

      <Col md={12}>
        <h2
          style={{
            paddingBottom: "27px",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          My Orders Details
        </h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table responsive className="responsive table table-sm caption-top">
            <thead className=" responsive table-success">
              <tr>
                <th
                  className="table table-sm caption-top"
                  style={{ color: "#1d3153", fontSize: "15px" }}
                >
                  ID
                </th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>DATE</th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>
                  DELIVERED
                </th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>PAID</th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>TOTAL</th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i
                        // className="fas fa-times"
                        className="font-weight-bold"
                        style={{ color: "#1d3153" }}
                      >
                        NOT DELIVERED
                      </i>
                    )}
                  </td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i
                        // className="fas fa-times"
                        className="font-weight-bold"
                        style={{ color: "#1d3153" }}
                      >
                        NOT PAID
                      </i>
                    )}
                  </td>

                  <td>{order.totalPrice}</td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button
                        className="btn-sm"
                        variant="outline-info"
                        // style={{
                        //   borderRadius: "2 px solid",
                        // }}
                      >
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
