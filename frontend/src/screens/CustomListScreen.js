import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import {
  listCustoms,
  //   deleteCustom,
  createCustom,
} from "../actions/customActions";
import { CUSTOM_CREATE_RESET } from "../constants/customConstants";

const CustomListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const customList = useSelector((state) => state.customList);
  const { loading, error, customs, page, pages } = customList;

  //   const productDelete = useSelector((state) => state.productDelete);
  //   const {
  //     loading: loadingDelete,
  //     error: errorDelete,
  //     success: successDelete,
  //   } = productDelete;
  ///////////////////////////////////////
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

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    if (successCreate) {
      // history.push("/");
      history.push(`/custom/${createdCustom._id}/edit`);
    } else {
      dispatch(listCustoms("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    // successDelete,
    successCreate,
    createdCustom,
    pageNumber,
  ]);

  //   const deleteHandler = (id) => {
  //     if (window.confirm("Are you sure?")) {
  //       dispatch(deleteProduct(id));
  //     }
  //   };

  const createCustomHandler = () => {
    dispatch(createCustom());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Custom Orders</h1>
        </Col>
        <Col className="text-right">
          <Button
            style={{
              background: "#F3F3F9",
              borderRadius: "2px",
              // color: 'white',
            }}
            className="my-3"
            onClick={createCustomHandler}
          ></Button>
        </Col>
      </Row>
      {/* {loadingDelete && <Loader />} */}
      {/* {errorDelete && <Message variant="danger">{errorDelete}</Message>} */}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table responsive className="table table-sm caption-top">
            <thead className="table-success">
              <tr>
                <th
                  className="table table-sm caption-top"
                  style={{ color: "#1d3153", fontSize: "15px" }}
                >
                  ID
                </th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>
                  DESCRIPTION
                </th>
                <th style={{ color: "#1d3153", fontSize: "15px" }}>CONTATS</th>
                {/* <th style={{ color: "#1d3153", fontSize: "15px" }}>CATEGORY</th> */}
                {/* <th style={{ color: "#1d3153", fontSize: "15px" }}>COMPANY</th> */}
                {/* <th style={{ color: "#eb7100", fontSize: "15px" }}>ACTION</th> */}
              </tr>
            </thead>
            <tbody>
              {customs.map((custom) => (
                <tr key={custom._id}>
                  <td>{custom._id}</td>
                  <td>{custom.description}</td>
                  <td>+92 {custom.number}</td>
                  {/* <td>+92 {custom.number}</td> */}

                  {/* <td>
                    <LinkContainer to={`/admin/custom/${custom._id}/edit`}>
                      <Button variant="info" className="btn-sm rounded">
                        <i
                          style={{ height: "10px", width: "10px" }}
                          className="fas fa-edit"
                        ></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="success"
                      className="btn-sm rounded"
                      //   onClick={() => deleteHandler(custom._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate
            name="customlist"
            pages={pages}
            page={page}
            isAdmin={true}
          />
        </>
      )}
    </>
  );
};

export default CustomListScreen;

//////NEWWWW/////
