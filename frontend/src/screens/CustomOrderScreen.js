// // import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// // import { useDispatch, useSelector } from 'react-redux';
// // import Message from '../components/Message';
// // import Loader from '../components/Loader';
// // import FormContainer from '../components/FormContainer';

// import styled from 'styled-components';

// const Forrm = styled.div`
//   border: 2px solid lightgray;
// `;

// const CustomOrderScreen = () => {
//   return (
//     <>
//       <Link className='btn btn-light my-3'>Go Back</Link>
//       <FormContainer>
//         <h1>Custom Order</h1>
//         {/* {loadingUpdate && <Loader />} */}
//         {/* {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>} */}
//         {/* {loading ? ( */}
//         {/* <Loader /> */}
//         {/* ) : error ? ( */}
//         {/* <Message variant='danger'>{error}</Message> */}
//         {/* ) : ( */}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId='name'>
//             <Form.Label>Name</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 //   value={name}
//                 //   onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Form.Group controlId='price'>
//             <Form.Label>Price</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter price'
//                 //   value={price}
//                 //   onChange={(e) => setPrice(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Form.Group controlId='image'>
//             <Form.Label>Image</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter image url'
//                 // value={image}
//                 // onChange={(e) => setImage(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//             {/* <Forrm> */}
//             <Form.File
//               id='image-file'
//               label='Choose File'
//               custom
//               // onChange={uploadFileHandler}
//             ></Form.File>
//             {/* </Forrm> */}
//             {/* {uploading && <Loader />} */}
//           </Form.Group>

//           <Form.Group controlId='brand'>
//             <Form.Label>Brand</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter brand'
//                 value={brand}
//                 //   onChange={(e) => setBrand(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Form.Group controlId='countInStock'>
//             <Form.Label>Count In Stock</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter countInStock'
//                 //   value={countInStock}
//                 //   onChange={(e) => setCountInStock(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Form.Group controlId='category'>
//             <Form.Label>Category</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter category'
//                 //   value={category}
//                 //   onChange={(e) => setCategory(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Form.Group controlId='description'>
//             <Form.Label>Description</Form.Label>
//             <Forrm>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter description'
//                 //   value={description}
//                 //   onChange={(e) => setDescription(e.target.value)}
//               ></Form.Control>
//             </Forrm>
//           </Form.Group>

//           <Button
//             style={{
//               background: ' #1D3153',
//               borderRadius: '2px',
//               // color: 'white',
//             }}
//             type='submit'
//             variant='primary'
//           >
//             Submit
//           </Button>
//         </Form>
//       </FormContainer>
//     </>
//   );
// };

// export default ProductEditScreen;

///FORM/////////

import React from "react";
const CustomOrderScreen = () => {
  return (
    <>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-5 col-md-23 mx-auto shadow border bg-black p-4 rounded bg-white">
            <h3 class="text-center fw-bold mb-3">Customr Order</h3>
            <form>
              <div class="form-group mb-9">
                <label for="inputName">Enter Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                />
                <div class="form-group mb-9">
                  <label for="inputEmail4">Enter Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Enter Your Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your address"
                />
              </div>
              <div class="form-row">
                <div class="form-group mb-9">
                  <label for="inputCity">Enter Your City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Enter Your City"
                  />
                </div>
                <div class="form-group mb-9">
                  <label for="inputZip">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    placeholder="Enter Your Zip Code"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomOrderScreen;
