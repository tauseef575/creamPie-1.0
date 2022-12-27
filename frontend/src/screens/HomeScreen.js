import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import FeaturedInfo from "../components/FeaturedInfo";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
// import Categories from "../components/Categories";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <FeaturedInfo />
      {/* <Categories /> */}
      <h1
        style={{
          marginTop: "70px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Latest Products
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={8} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            // style={{ backgroundColor: 'teal', color: 'white' }}
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />

          {/* <About /> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
