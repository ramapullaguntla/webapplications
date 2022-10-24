import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
    categoriesMap: {}
}

export const categoryReducer = (state = INITIAL_STATE , action = {}) =>
{
    console.log('dispatched');
    console.log("action ", action);
    const { type, payload } = action;

    switch(type)
    {
        case CATEGORY_ACTION_TYPES.GET_CATEGORY_MAP:
            return {

                ...state, categoriesMap: payload               
            }
                
            default:
                return state;
    }
}