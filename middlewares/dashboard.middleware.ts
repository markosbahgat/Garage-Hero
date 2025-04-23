import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import { IFinancialSummary, IMonthlyData } from "@/models/finanical-summary";
import { InvoicesResponse } from "@/models/invoices";
import { ReceiptsResponse } from "@/models/receipts";
import { InventoryResponse } from "@/models/inventory";

interface FetchError {
  errorMessage: string | undefined;
}

export const getMonthlyTarget = createAsyncThunk<
  IMonthlyData,
  undefined,
  { rejectValue: FetchError }
>("getMonthlyTarget", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/shared/monthly_target`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardOwner = createAsyncThunk<
  any,
  undefined,
  { rejectValue: FetchError }
>("getDashboardOwner", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/owner`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardAccountant = createAsyncThunk<
  any,
  undefined,
  { rejectValue: FetchError }
>("getDashboardAccountant", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardInvoices = createAsyncThunk<
  InvoicesResponse,
  undefined,
  { rejectValue: FetchError }
>("getDashboardInvoices", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant/invoices`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardReceipts = createAsyncThunk<
  ReceiptsResponse,
  undefined,
  { rejectValue: FetchError }
>("getDashboardReceipts", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant/receipts`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardInventory = createAsyncThunk<
  InventoryResponse,
  undefined,
  { rejectValue: FetchError }
>("getDashboardInventory", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant/inventory`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardFinancialSummary = createAsyncThunk<
  IFinancialSummary,
  undefined,
  { rejectValue: FetchError }
>("getDashboardInventory", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant/financial-summary`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});

export const getDashboardPLGraph = createAsyncThunk<
  any,
  undefined,
  { rejectValue: FetchError }
>("getDashboardPLGraph", async (_, thunkApi) => {
  try {
    const response = await axios.get(`/dashboard/accountant/pl-graph`);

    return await response.data;
  } catch (error: any) {
    console.log(error);
    return thunkApi.rejectWithValue(error as FetchError);
  }
});
