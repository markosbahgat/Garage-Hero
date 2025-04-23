import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { CreateUserAccountProps, IUser, LoginUserProps } from "@/models/user";
import Cookies from "js-cookie";
import {
  getDashboardAccountant,
  getDashboardFinancialSummary,
  getDashboardInventory,
  getDashboardInvoices,
  getDashboardReceipts,
  getMonthlyTarget,
} from "./dashboard.middleware";

interface FetchError {
  errorMessage: string | undefined;
}

export const loginUser = createAsyncThunk<
  IUser,
  LoginUserProps,
  { rejectValue: FetchError }
>("loginUser", async (props: LoginUserProps, thunkApi) => {
  try {
    const response = await axios.post(`/user/login`, props);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});
export const resendOtp = createAsyncThunk<
  IUser,
  { email: string; user_type: string },
  { rejectValue: FetchError }
>("resendOtp", async (props, thunkApi) => {
  try {
    const response = await axios.post(`/user/resend-otp`, props);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});
export const logUserOut = createAsyncThunk<
  IUser,
  { id: string },
  { rejectValue: FetchError }
>("loginUser", async (props, thunkApi) => {
  try {
    const response = await axios.post(`/user/logout`, props);

    if (response.status === 200) {
      typeof window !== "undefined" && localStorage.clear();
      Cookies.remove("authenticated");
      Cookies.remove("token");
      typeof window !== "undefined" && location.reload();
    }
    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});
export const verifyOTP = createAsyncThunk<
  IUser,
  { otp: string; email: string; user_type: string; ip_address: string },
  { rejectValue: FetchError }
>("verifyOTP", async (props, thunkApi) => {
  try {
    const response = await axios.post(`/user/verify-otp`, props);

    if (response.status === 200) {
      console.log(response.data);
      typeof window !== "undefined" &&
        localStorage.setItem("token", response.data.access_token);
      Cookies.set("authenticated", "true", {
        expires: 7,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      thunkApi.dispatch(getMonthlyTarget());
      thunkApi.dispatch(getDashboardInvoices());
      thunkApi.dispatch(getDashboardInventory());
      thunkApi.dispatch(getDashboardReceipts());
      thunkApi.dispatch(getDashboardFinancialSummary());
      thunkApi.dispatch(getDashboardAccountant());
    }
    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const createUserAccount = createAsyncThunk<
  IUser,
  CreateUserAccountProps,
  { rejectValue: FetchError }
>("createUserAccount", async (props: CreateUserAccountProps, thunkApi) => {
  try {
    const response = await axios.post(`/user/signup`, {
      ...props,
      country: "AE",
      lang: { acceptedLang: "en", browserLang: "en-US" },
      phone_country_code: "971",
      phone_number: props.phone_number,
      dob: "1993-03-03T20:00:00.000",
    });

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});
