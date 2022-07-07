export const GET_DATA="GET_DATA";
export const GET_DATA_PRODUCT="GET_DATA_PRODUCT";
export const GET_DATA_PRODUCT_DETAILS="GET_DATA_PRODUCT_DETAILS";
export const GET_CART_DATA="GET_CART_DATA";
export const REMOVE_SELECTED_PRODUCT_DETAILS="REMOVE_SELECTED_PRODUCT_DETAILS";

export const getData= (productype) =>({
    type:GET_DATA,
    payload:productype
});

export const getDataProduct= (products) =>({
    type:GET_DATA_PRODUCT,
    payload:products
});

export const getDataProductDetails= (product) =>({
    type:GET_DATA_PRODUCT_DETAILS,
    payload:product
});

export const getCartData= (cart) =>({
    type:GET_CART_DATA,
    payload:cart
});

export const removeSelectedProductDetails= (payload) =>({
    type:GET_DATA_PRODUCT_DETAILS,
    payload
});