import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { FakeBookReducer } from "./reducers/FakeBookReducer";
import { PhimReducer } from "./reducers/PhimReducer";
import { QLNDReducer } from "./reducers/QLNDReducer";

const rootReducers = combineReducers({
    //khai báo các reducer
    //? Object literal
    //?Khi tên thuộc tính trùng tên với biến thì rút để 1 tên của thuộc tính
    // FakeBookReducer: FakeBookReducer,
    FakeBookReducer,
    PhimReducer,
    QLNDReducer,
});

export const store = createStore(rootReducers,applyMiddleware(thunk));