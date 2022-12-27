import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import React, { Component } from "react";

const Hooray = () => {
  const location = useLocation();
  // const data = location.state.data;

  return (
    <>
      <div
        style={{
          height: "80vh",
          // width: '20vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          // -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75),
          // box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
        }}
      >
        <h3>Thanks for choosing Creamy Creations.</h3>
        <h5>Your Custom Order Details has been submitted.</h5>
        <button
          style={{
            color: "white",
            padding: 10,
            marginTop: 20,
            backgroundColor: "#eb7100",
            border: "none",
            borderRadius: "2p solid #eb7100",
            textDecoration: "none",
          }}
        >
          <Link to="/">Go to Homepage</Link>
        </button>
      </div>
    </>
  );
};

export default Hooray;
