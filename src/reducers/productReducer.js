import { GET_ALL_PRODUCTS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    products: []
  };
  
  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS_SUCCESS:
        return (state = { ...state, products: action.payload.products });
      default:
        return state;
    }
  };
  
  export default authReducer;