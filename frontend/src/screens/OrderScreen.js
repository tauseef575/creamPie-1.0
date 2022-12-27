// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { PayPalButton } from "react-paypal-button-v2";
// import { Link } from "react-router-dom";
// import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import {
//   getOrderDetails,
//   payOrder,
//   deliverOrder,
// } from "../actions/orderActions";
// import {
//   ORDER_PAY_RESET,
//   ORDER_DELIVER_RESET,
// } from "../constants/orderConstants";

// const OrderScreen = ({ match, history }) => {
//   const orderId = match.params.id;

//   const [sdkReady, setSdkReady] = useState(false);

//   const dispatch = useDispatch();

//   const orderDetails = useSelector((state) => state.orderDetails);
//   const { order, loading, error } = orderDetails;

//   const orderPay = useSelector((state) => state.orderPay);
//   const { loading: loadingPay, success: successPay } = orderPay;

//   const orderDeliver = useSelector((state) => state.orderDeliver);
//   const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   if (!loading) {
//     //   Calculate prices
//     const addDecimals = (num) => {
//       return (Math.round(num * 100) / 100).toFixed(2);
//     };

//     order.itemsPrice = addDecimals(
//       order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
//     );
//   }

//   useEffect(() => {
//     if (!userInfo) {
//       history.push("/login");
//     }

//     const addPayPalScript = async () => {
//       const { data: clientId } = await axios.get("/api/config/paypal");
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
//       script.async = true;
//       script.onload = () => {
//         setSdkReady(true);
//       };
//       document.body.appendChild(script);
//     };

//     if (!order || successPay || successDeliver || order._id !== orderId) {
//       dispatch({ type: ORDER_PAY_RESET });
//       dispatch({ type: ORDER_DELIVER_RESET });
//       dispatch(getOrderDetails(orderId));
//     } else if (!order.isPaid) {
//       if (!window.paypal) {
//         addPayPalScript();
//       } else {
//         setSdkReady(true);
//       }
//     }
//   }, [dispatch, orderId, successPay, successDeliver, order]);

//   const successPaymentHandler = (paymentResult) => {
//     console.log(paymentResult);
//     dispatch(payOrder(orderId, paymentResult));
//   };

//   const deliverHandler = () => {
//     dispatch(deliverOrder(order));
//   };

//   return loading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <>
//       <h1>Your Order: </h1>
//       <h4>{order._id}</h4>
//       <Row>
//         <Col md={8}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h2>Shipping</h2>
//               <p>
//                 <strong>Name: </strong> {order.username}
//               </p>
//               <p>
//                 <strong>Email: </strong>{" "}
//                 <a href={`mailto:${order.useremail}`}>{order.useremail}</a>
//               </p>
//               <p>
//                 <strong>Address:</strong>
//                 {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
//                 {order.shippingAddress.postalCode},{" "}
//                 {order.shippingAddress.country}
//               </p>
//               {order.isDelivered ? (
//                 <Message variant="success">
//                   Delivered on {order.deliveredAt}
//                 </Message>
//               ) : (
//                 <Message variant="danger">Not Delivered</Message>
//               )}
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Payment Method</h2>
//               <p>
//                 <strong>Method: </strong>
//                 {order.paymentMethod}
//               </p>
//               {order.isPaid ? (
//                 <Message variant="success">Paid on {order.paidAt}</Message>
//               ) : (
//                 <Message variant="danger">Not Paid</Message>
//               )}
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Order Items</h2>
//               {order.orderItems.length === 0 ? (
//                 <Message>Order is empty</Message>
//               ) : (
//                 <ListGroup variant="flush">
//                   {order.orderItems.map((item, index) => (
//                     <ListGroup.Item key={index}>
//                       <Row>
//                         <Col md={1}>
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             fluid
//                             rounded
//                           />
//                         </Col>
//                         <Col>
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </Col>
//                         <Col md={4}>
//                           {item.qty} x ${item.price} = ${item.qty * item.price}
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               )}
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <h2>Order Summary</h2>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Items</Col>
//                   <Col>${order.itemsPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Shipping</Col>
//                   <Col>${order.shippingPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Tax</Col>
//                   <Col>${order.taxPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Total</Col>
//                   <Col>${order.totalPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               {!order.isPaid && (
//                 <ListGroup.Item>
//                   {loadingPay && <Loader />}
//                   {!sdkReady ? (
//                     <Loader />
//                   ) : (
//                     <PayPalButton
//                       amount={order.totalPrice}
//                       onSuccess={successPaymentHandler}
//                     />
//                   )}
//                 </ListGroup.Item>
//               )}
//               {loadingDeliver && <Loader />}
//               {userInfo &&
//                 userInfo.isAdmin &&
//                 order.isPaid &&
//                 !order.isDelivered && (
//                   <ListGroup.Item>
//                     <Button
//                       type="button"
//                       className="btn btn-block"
//                       onClick={deliverHandler}
//                     >
//                       Mark As Delivered
//                     </Button>
//                   </ListGroup.Item>
//                 )}
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default OrderScreen;

/////NEWWWWW/////

import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { userRequest } from "../requestMethods";
import StripeCheckout from "react-stripe-checkout";
import { createOrder } from "../actions/orderActions";

import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";
const KEY =
  "pk_test_51MBLk0A7eieQVs7jvzf0QFulVhnNi1P8BB0HxD7pxLbN9ry1sBzyZLHLNCXy05ZZ4RxIs4r62HgEywFL4M42LwgQ00VRowTSc1";

const OrderScreen = ({ match, history }) => {
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
    dispatch(
      payOrder(orderId, {
        _id: "63a346e456d2f524542f9369",
        user: " 639a049cb5ce8206b8f9845d",
        user: {
          name: "DUMMY",
        },
      })
    );
  };
  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  } else if (!cart.paymentMethod) {
    history.push("/payment");
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);

  const [stripeToken, setStripeToken] = useState(null);
  //  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
    // console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          // amount: order.totalPrice,
          amount: 172500,
        });
        history.push("/success", {
          stripeData: res.data,
          // products: cart,
        });
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken, history]);
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
    // eslint-disable-next-line
  }, [dispatch, orderId, successPay, successDeliver, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Your Order:</h1>
      <h4> {order._id}</h4>{" "}
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x Rs.{item.price} = Rs.
                          {item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>Rs.{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs.{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs.{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs.{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
              {!order.isPaid && (
                <ListGroup.Item>
                  <StripeCheckout
                    name="CCBS Shop"
                    image="https://avatars.githubusercontent.com/u/1486366?v=4"
                    billingAddress
                    shippingAddress
                    description={`Your total is ${order.totalPrice}`}
                    // amount={order.totalPrice * 100}
                    amount={172500}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <Button
                      style={{
                        background: " #eb7100",
                        borderRadius: "2px",
                        // color: 'white',
                      }}
                      type="button"
                      className="btn-block"
                      disabled={cart.cartItems === 0}
                      onClick={placeOrderHandler}
                    >
                      Place Order with stripe
                    </Button>
                  </StripeCheckout>
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
