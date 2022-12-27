import axios from "axios";
import {
  CUSTOM_LIST_REQUEST,
  CUSTOM_LIST_SUCCESS,
  CUSTOM_LIST_FAIL,
  CUSTOM_DETAILS_REQUEST,
  CUSTOM_DETAILS_SUCCESS,
  CUSTOM_DETAILS_FAIL,
  //   CUSTOM_DELETE_SUCCESS,
  //   PRODUCT_DELETE_REQUEST,
  //   PRODUCT_DELETE_FAIL,
  CUSTOM_CREATE_REQUEST,
  CUSTOM_CREATE_SUCCESS,
  CUSTOM_CREATE_FAIL,
  CUSTOM_UPDATE_REQUEST,
  CUSTOM_UPDATE_SUCCESS,
  CUSTOM_UPDATE_FAIL,
  //   PRODUCT_CREATE_REVIEW_REQUEST,
  //   PRODUCT_CREATE_REVIEW_SUCCESS,
  //   PRODUCT_CREATE_REVIEW_FAIL,
  //   PRODUCT_TOP_REQUEST,
  //   PRODUCT_TOP_SUCCESS,
  //   PRODUCT_TOP_FAIL,
} from "../constants/customConstants";
import { logout } from "./userActions";

export const listCustoms =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: CUSTOM_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/customs?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: CUSTOM_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CUSTOM_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listCustomDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/customs/${id}`);

    dispatch({
      type: CUSTOM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const deleteProduct = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_DELETE_REQUEST,
//     });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     await axios.delete(`/api/products/${id}`, config);

//     dispatch({
//       type: PRODUCT_DELETE_SUCCESS,
//     });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: PRODUCT_DELETE_FAIL,
//       payload: message,
//     });
//   }
// };
//////////////////////////////
export const createCustom = (custom) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOM_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/customs`, custom, config);

    dispatch({
      type: CUSTOM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CUSTOM_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateCustom = (custom) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOM_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/customs/${custom._id}`,
      custom,
      config
    );

    dispatch({
      type: CUSTOM_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: CUSTOM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: CUSTOM_UPDATE_FAIL,
      payload: message,
    });
  }
};
//////////////////////////////////////
// export const createProductReview =
//   (productId, review) => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_REQUEST,
//       });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       await axios.post(`/api/products/${productId}/reviews`, review, config);

//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_SUCCESS,
//       });
//     } catch (error) {
//       const message =
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message;
//       if (message === "Not authorized, token failed") {
//         dispatch(logout());
//       }
//       dispatch({
//         type: PRODUCT_CREATE_REVIEW_FAIL,
//         payload: message,
//       });
//     }
//   };

// export const listTopProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_TOP_REQUEST });

//     const { data } = await axios.get(`/api/products/top`);

//     dispatch({
//       type: PRODUCT_TOP_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_TOP_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
