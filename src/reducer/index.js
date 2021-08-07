import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import modal from "./modal";
import controls from "./controls";
import pagination from "./pagination";
import user from "./user";
const rootReducer = combineReducers({
    product,
    cart,
    modal,
    controls,
    pagination,
    user
});
export default rootReducer;