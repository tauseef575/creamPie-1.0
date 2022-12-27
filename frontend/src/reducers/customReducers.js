import {
  CUSTOM_LIST_REQUEST,
  CUSTOM_LIST_SUCCESS,
  CUSTOM_LIST_FAIL,
  CUSTOM_DETAILS_REQUEST,
  CUSTOM_DETAILS_SUCCESS,
  CUSTOM_DETAILS_FAIL,
  //   PRODUCT_DELETE_REQUEST,
  //   PRODUCT_DELETE_SUCCESS,
  //   PRODUCT_DELETE_FAIL,
  CUSTOM_CREATE_RESET,
  CUSTOM_CREATE_FAIL,
  CUSTOM_CREATE_SUCCESS,
  CUSTOM_CREATE_REQUEST,
  CUSTOM_UPDATE_REQUEST,
  CUSTOM_UPDATE_SUCCESS,
  CUSTOM_UPDATE_FAIL,
  CUSTOM_UPDATE_RESET,
  //   PRODUCT_CREATE_REVIEW_REQUEST,
  //   PRODUCT_CREATE_REVIEW_SUCCESS,
  //   PRODUCT_CREATE_REVIEW_FAIL,
  //   PRODUCT_CREATE_REVIEW_RESET,
  //   PRODUCT_TOP_REQUEST,
  //   PRODUCT_TOP_SUCCESS,
  //   PRODUCT_TOP_FAIL,
} from "../constants/customConstants";

export const customListReducer = (state = { customs: [] }, action) => {
  switch (action.type) {
    case CUSTOM_LIST_REQUEST:
      return { loading: true, customs: [] };
    case CUSTOM_LIST_SUCCESS:
      return {
        loading: false,
        customs: action.payload.customs,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case CUSTOM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const customDetailsReducer = (state = { custom: [] }, action) => {
  switch (action.type) {
    case CUSTOM_DETAILS_REQUEST:
      return { loading: true };
    case CUSTOM_DETAILS_SUCCESS:
      return { loading: false, custom: action.payload };
    case CUSTOM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
/////////////////////////////
// export const productDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_DELETE_REQUEST:
//       return { loading: true };
//     case PRODUCT_DELETE_SUCCESS:
//       return { loading: false, success: true };
//     case PRODUCT_DELETE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
///////////////////////////////
export const customCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOM_CREATE_REQUEST:
      return { loading: true };
    case CUSTOM_CREATE_SUCCESS:
      return { loading: false, success: true, custom: action.payload };
    case CUSTOM_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOM_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const customUpdateReducer = (state = { custom: {} }, action) => {
  switch (action.type) {
    case CUSTOM_UPDATE_REQUEST:
      return { loading: true };
    case CUSTOM_UPDATE_SUCCESS:
      return { loading: false, success: true, custom: action.payload };
    case CUSTOM_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CUSTOM_UPDATE_RESET:
      return { custom: {} };
    default:
      return state;
  }
};

// export const productReviewCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REVIEW_REQUEST:
//       return { loading: true };
//     case PRODUCT_CREATE_REVIEW_SUCCESS:
//       return { loading: false, success: true };
//     case PRODUCT_CREATE_REVIEW_FAIL:
//       return { loading: false, error: action.payload };
//     case PRODUCT_CREATE_REVIEW_RESET:
//       return {};
//     default:
//       return state;
//   }
// };

// export const productTopRatedReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_TOP_REQUEST:
//       return { loading: true, products: [] };
//     case PRODUCT_TOP_SUCCESS:
//       return { loading: false, products: action.payload };
//     case PRODUCT_TOP_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
