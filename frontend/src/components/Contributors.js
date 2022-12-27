import "./contributions.css";
// import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Contributors = () => {
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
        Our Contributors
      </h1>
      <div className="featured">
        <div className="featuredItem">
          <Icon.Handbag className="featuredIcon negative" />

          <h2 className="featuredTitle">Kitchen Cuisine</h2>
          <span className="featuredSub">
            Kitchen Cuisine is a top food based serving company all over the
            world for his good service.
          </span>
        </div>
        <div className="featuredItem">
          <Icon.HeartFill className="featuredIcon negative" />
          <h2 className="featuredTitle">Alwida Foods</h2>
          <span className="featuredSub">
            Alwida Foods is a top food based serving company all over the world
            for his good service.
          </span>
        </div>
        <div className="featuredItem">
          <Icon.Basket2Fill className="featuredIcon negative" />
          <h2 className="featuredTitle">Sweets Bakery</h2>
          <span className="featuredSub">
            Kitchen Cuisine is a top food based serving company all over the
            world for his good service.
          </span>
        </div>
      </div>
    </>
  );
};
export default Contributors;
