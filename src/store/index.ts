import { configureStore } from "@reduxjs/toolkit";
import itemState from "./slices/item";
import { loginState } from "./slices/login";
import { accountState } from "./slices/accounts";

const store = configureStore({
  reducer: {
    [itemState.name]: itemState.reducer,
    [loginState.name]: loginState.reducer,
    [accountState.name]: accountState.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
