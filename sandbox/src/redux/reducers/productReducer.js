import { ActionTypes } from "../constants/action-types";

const initialstate = {
    products: []
}

const data = {
    name: "Rama",
    email:"r@gmail.com"
}

export const productReducer = (state = initialstate, {type, payload}) =>
{
    switch(type)
    {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
};

export const selectedproductReducer = (state = {}, {type, payload}) =>
{
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT:
            console.log("received state ", state);
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTEDPRODUCT:
            return {};
        default:
            return state;
    }
};