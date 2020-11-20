import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "../reducers/reducers.js";

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(combineReducers({ ...reducers }), middleware);
