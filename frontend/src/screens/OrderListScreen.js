// import React, { useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
// import { Table, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import { listOrders } from "../actions/orderActions";

// const OrderListScreen = ({ history }) => {
//   const dispatch = useDispatch();

//   const orderList = useSelector((state) => state.orderList);
//   const { loading, error, orders } = orderList;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   useEffect(() => {
//     if (userInfo && userInfo.isAdmin) {
//       dispatch(listOrders());
//     } else {
//       history.push("/login");
//     }
//   }, [dispatch, history, userInfo]);

//   return (
//     <>
//       <h1>Orders</h1>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Table responsive className="table table-sm caption-top">
//           <thead className="table-success">
//             <tr>
//               <th
//                 className="table table-sm caption-top"
//                 style={{ color: "#1d3153", fontSize: "15px" }}
//               >
//                 ID
//               </th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>USER</th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>DATE</th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>TOTAL</th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>PAID</th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>DELIVERED</th>
//               <th style={{ color: "#1d3153", fontSize: "15px" }}>ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td style={{ color: "#1d3153", fontSize: "15px" }}>
//                   {order._id}
//                 </td>
//                 <td>{order.user && order.user.name}</td>
//                 <td>{order.createdAt.substring(0, 10)}</td>
//                 <td>Rs.{order.totalPrice}</td>
//                 <td>
//                   {order.isPaid ? (
//                     order.paidAt.substring(0, 10)
//                   ) : (
//                     <i
//                       className="font-weight-bold"
//                       style={{ color: "#1d3153" }}
//                     >
//                       NOT PAID
//                     </i>
//                   )}
//                 </td>
//                 <td>
//                   {order.isDelivered ? (
//                     order.deliveredAt.substring(0, 10)
//                   ) : (
//                     <i
//                       className="font-weight-bold"
//                       style={{ color: "#1d3153" }}
//                     >
//                       NOT DELIVERED
//                     </i>
//                   )}
//                 </td>
//                 <td>
//                   <LinkContainer to={`/order/${order._id}`}>
//                     <Button variant="outline-info" className="btn-sm">
//                       Details
//                     </Button>
//                   </LinkContainer>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default OrderListScreen;

//////NEWWWWWW//////

import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table responsive className="table table-sm caption-top">
          <thead className="table-success">
            <tr>
              <th
                className="table table-sm caption-top"
                style={{ color: "#1d3153", fontSize: "15px" }}
              >
                ID
              </th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>USER</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>DATE</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>TOTAL</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>PAID</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>DELIVERED</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td style={{ color: "#1d3153", fontSize: "15px" }}>
                  {order._id}
                </td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>Rs.{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i
                      className="font-weight-bold"
                      style={{ color: "#1d3153" }}
                    >
                      NOT PAID
                    </i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i
                      className="font-weight-bold"
                      style={{ color: "#1d3153" }}
                    >
                      NOT DELIVERED
                    </i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="outline-info" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
