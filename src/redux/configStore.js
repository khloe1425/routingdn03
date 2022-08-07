import { combineReducers,createStore } from "redux";

import { FakeBookReducer } from "./reducers/FakeBookReducer";

const rootReducers = combineReducers({
    //khai báo các reducer
    //? Object literal
    //?Khi tên thuộc tính trùng tên với biến thì rút để 1 tên của thuộc tính
    // FakeBookReducer: FakeBookReducer,
    FakeBookReducer,
});

export const store = createStore(rootReducers);