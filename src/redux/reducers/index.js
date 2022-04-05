import { combineReducers } from "redux";
import {allProducts} from "./productReducers";
import { product } from "./productReducers";

const rootReducer = combineReducers({
    allProducts,
    product
});

export default rootReducer;