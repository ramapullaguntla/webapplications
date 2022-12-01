import { createAction } from "../../utils/reducer/reducer1.utils";
import { CATEGORY_ACTION_TYPES} from "./category.types";

export const getCategoriesMap = (categoriesMap) =>
{    
    return createAction(CATEGORY_ACTION_TYPES.GET_CATEGORY_MAP, categoriesMap);
};