import { userReducer } from "./UserReducer/reducer"
import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer/reducer";
import { store } from "./store";

export const rootReducer = combineReducers({
    userReducer,
    cartReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>;