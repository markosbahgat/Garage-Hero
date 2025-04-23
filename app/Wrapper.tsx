"use client";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      {children} <ToastContainer />{" "}
    </Provider>
  );
};

export default Wrapper;
