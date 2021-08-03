import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import modal from "./modal";
import controls from "./controls";
const rootReducer = combineReducers({
    product,
    cart,
    modal,
    controls
});
export default rootReducer;