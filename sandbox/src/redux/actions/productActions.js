import { ActionTypes } from "../constants/action-types";

export const setProducts = (prods) =>
{
    return(
    {
        type: ActionTypes.SET_PRODUCTS,
        payload: prods
    });
};

export const selectedProduct = (prod) =>
{
    return(
    {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: prod
    });
};

export const removeSelectedProduct = (prod) =>
{
    return(
    {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,        
    });
};
