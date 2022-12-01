import { createAction } from "../../utils/reducer/reducer1.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) =>
{
    console.log("dispatched user ", user);
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};