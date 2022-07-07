import { GET_DATA, GET_DATA_PRODUCT, GET_DATA_PRODUCT_DETAILS ,GET_CART_DATA} from './healthAction';

export const HealthReducer = (state = {productType:[]}, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                productType:payload
            };
       
        default:
            return state;
    }
}

export const HealthProductListReducer = (state = {products:[]}, { type, payload }) => {
    switch (type) {
        case GET_DATA_PRODUCT:
            return {
                ...state,
                products:payload
            };
       
        default:
            return state;
    }
}

export const HealthProductDetailsReducer = (state = {product:[]}, { type, payload }) => {
    switch (type) {
        case GET_DATA_PRODUCT_DETAILS:
            return {
                ...state,
                product:payload
            };
       
        default:
            return state;
    }
}

export const CartReducer = (state = {cart:[]}, { type, payload }) => {
    switch (type) {
        case GET_CART_DATA:
            return {
                ...state,
                cart:payload
            };
       
        default:
            return state;
    }
}