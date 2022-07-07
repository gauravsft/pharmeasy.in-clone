import { combineReducers, legacy_createStore as createStore } from "redux";
import {HealthReducer, HealthProductListReducer , HealthProductDetailsReducer,CartReducer} from "./healthReducer";

const rootReducer=combineReducers({
    healthProduct:HealthReducer,
    HealthProductList:HealthProductListReducer,
    HealthProductDetails:HealthProductDetailsReducer,
    cartData:CartReducer

});

export const store =createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)