import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import modal from "./modal";
import controls from "./controls";
import pagination from "./pagination";
const rootReducer = combineReducers({
    product,
    cart,
    modal,
    controls,
    pagination
});
export default rootReducer;