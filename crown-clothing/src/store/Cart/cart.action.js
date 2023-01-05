import { createAction } from "../../utils/reducer/reducer1.utils";
import { CART_ACTION_TYPES} from "./cart.types";

export const toggleCartOpen = () =>
{    
    return createAction(CART_ACTION_TYPES.TOGGLE_CART, null);
};

export const setCartItems = (cartItems) =>
{    
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

export const addToCart = (cartproductToAdd, cartItems) =>
{
     var newCartItems = [];
     var foundCartItem = cartItems.find(ct => ct.id === cartproductToAdd.id);
    
     if(foundCartItem)
     {
        newCartItems =  cartItems.map( each =>
            {
                if(each.id === foundCartItem.id)
                {
                    return {...each, qty: foundCartItem.qty + 1};
                }
                else{
                    return each;
                }
            });
     }
     else
     {
        newCartItems = [...cartItems, {...cartproductToAdd, qty: 1}];
     }

     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
    
export const removeFromCart = (cartproductToRemove, cartItems, clearItem) =>
{
     var newCartItems = [];
     var foundCartItem = cartItems.find(ct => ct.id === cartproductToRemove.id);

     if(foundCartItem.qty === 1 || clearItem)
     {
        newCartItems =  cartItems.filter( each => each.id !== foundCartItem.id);                   
     }
     else
     {
        newCartItems = cartItems.map( each =>
            {
                if(each.id === foundCartItem.id)
                {
                    return {...each, qty: foundCartItem.qty - 1};
                }
                else{
                    return each;
                }
            });
     }

     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};