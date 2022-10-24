import { CART_ACTION_TYPES} from "./cart.types";


const DefaultCartInfo =
{
    isOpen: false,
    cartItems: []
}

const CART_INITIAL_STATE = {
    cartCount: 0,
    totalPrice: 0,
    cartInfo: DefaultCartInfo
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) =>
{
    console.log("dispatched Cart reducer");

    const { type, payload } = action;

    switch(type)
    {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state, cartInfo: {...state.cartInfo, isOpen: !state.cartInfo.isOpen}
            }    
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, cartInfo: {...state.cartInfo, cartItems: payload}
            }  
        default:
            return state;
    }
}