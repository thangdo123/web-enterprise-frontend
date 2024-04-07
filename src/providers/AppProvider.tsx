import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import Notification from "../components/Notification/Notification";

interface IAppProviderProps {
  children: JSX.Element;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Notification />
        {children}
      </Provider>
    </BrowserRouter>
  );
}
