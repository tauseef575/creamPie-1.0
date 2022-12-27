import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers, deleteUser } from "../actions/userActions";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Users</h1>
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
              <th style={{ color: "#1d3153", fontSize: "15px" }}>NAME</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>EMAIL</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>ADMIN</th>
              <th style={{ color: "#1d3153", fontSize: "15px" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i
                      className="font-weight-bold"
                      style={{ color: "#1d3153" }}
                    >
                      TRUE
                    </i>
                  ) : (
                    <i
                      className="font-weight-bold"
                      style={{ color: "#1d3153" }}
                    >
                      FALSE
                    </i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="success" className="btn-sm rounded">
                      <i className="fas fa-edit " variant="outline-info "></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    // style={{ color: "#1d3153", fontSize: "15px" }}
                    variant="info"
                    className="btn-sm rounded"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i
                      // style={{ color: "#1d3153", fontSize: "10px" }}
                      className="fas fa-trash"
                    ></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
