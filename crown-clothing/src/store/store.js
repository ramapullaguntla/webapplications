import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";


// what is the store exactly

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancers);