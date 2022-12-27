// // import React, { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { Carousel, Image } from "react-bootstrap";
// // import { useDispatch, useSelector } from "react-redux";
// // import Loader from "./Loader";
// // import Message from "./Message";
// // import { listTopProducts } from "../actions/productActions";
// // import "./productcarousel.css";

// // const ProductCarousel = () => {
// //   const dispatch = useDispatch();

// //   const productTopRated = useSelector((state) => state.productTopRated);
// //   const { loading, error, products } = productTopRated;

// //   useEffect(() => {
// //     dispatch(listTopProducts());
// //   }, [dispatch]);

// //   return loading ? (
// //     <Loader />
// //   ) : error ? (
// //     <Message variant="danger">{error}</Message>
// //   ) : (
// //     <Carousel pause="hover" className="car">
// //       {products.map((product) => (
// //         <Carousel.Item key={product._id} className="item">
// //           <Link to={`/product/${product._id}`}>
// //             <Image
// //               className="imgg"
// //               src={product.image}
// //               alt={product.name}
// //               fluid
// //             />
// //             <Carousel.Caption className="caption">
// //               <h2>
// //                 {product.name} (Rs.{product.price})
// //               </h2>
// //             </Carousel.Caption>
// //           </Link>
// //         </Carousel.Item>
// //       ))}
// //     </Carousel>
// //   );
// // };

// // export default ProductCarousel;

// /////////////////NEWWW SLIDER////////////////

import React, { useState } from "react";
import styled from "styled-components";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
// import ArrowLeftIcon from "@material-ui/icons/ArrowLeftIcon";
import { SliderItems } from "../data";
import * as Icon from "react-bootstrap-icons";
import { mobile } from "../responsive";

// import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e5dede;
  font-size: 20px;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  // width: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  // background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 2;
`;

const Image = styled.img`
  margin-top: 60px;
  height: 70%;
`;

const InfoContainer = styled.div`
  flex: 3;
  padding-bottom: 10px;
  padding-left: 30px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const ProductCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <Icon.ArrowLeftCircle />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <Icon.ArrowRightCircle />
      </Arrow>
    </Container>
  );
};

export default ProductCarousel;

// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
// import styled from "styled-components";
// import { SliderItems } from "../data";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ display: "none" })}
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   height: 100%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 80%;
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;

// const Title = styled.h1`
//   font-size: 70px;
// `;

// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// const ProductCarousel = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>
//             <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//               <Button>SHOW NOW</Button>
//             </InfoContainer>
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default ProductCarousel;
