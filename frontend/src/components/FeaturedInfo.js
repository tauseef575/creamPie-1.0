import "./featuredInfo.css";
// import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const FeaturedInfo = () => {
  return (
    <>
      <h1
        style={{
          marginBottom: "60px",
          textAlign: "center",
          justifyContent: "center",
          // borderBottom: "2px solid #1d3153",
          // width: "0%",
        }}
      >
        Top Searches
      </h1>
      <div className="featured">
        <div className="featuredItem">
          <Link to="/page/2">
            <Icon.Cart className="featuredIcon negative" />
          </Link>

          <h2 className="featuredTitle">Categories</h2>
          <span className="featuredSub">Scroll for all products.</span>
        </div>
        <div className="featuredItem">
          <Link to="/custom">
            <Icon.Back className="featuredIcon negative" />
          </Link>
          <h2 className="featuredTitle">Custom Order</h2>
          <span className="featuredSub">Click to custom order.</span>
        </div>
        {/* <div className="featuredItem">
          <Link to="/cart">
            <Icon.Back className="featuredIcon negative" />
          </Link>
          <h2 className="featuredTitle">Your Cart</h2>
          <span className="featuredSub">Select products to fill it.</span>
        </div> */}
        <div className="featuredItem">
          <Link to="/search">
            <Icon.Search className="featuredIcon negative" />
          </Link>
          <h2 className="featuredTitle">Search</h2>
          <span className="featuredSub">Scroll for more.</span>
        </div>
      </div>
    </>
  );
};
export default FeaturedInfo;
