import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer,
});
