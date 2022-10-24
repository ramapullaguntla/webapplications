import { combineReducers } from "redux";
import { cartReducer } from "./Cart/cart.reducer";
import { categoryReducer } from "./Categories/category.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers(
    {
        user    : userReducer,
        category: categoryReducer,
        cart    : cartReducer
    }
)