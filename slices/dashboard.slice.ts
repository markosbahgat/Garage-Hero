import {
  getDashboardAccountant,
  getDashboardInventory,
  getDashboardInvoices,
  getDashboardOwner,
  getDashboardReceipts,
  getMonthlyTarget,
} from "@/middlewares/dashboard.middleware";
import { InventoryResponse } from "@/models/inventory";
import { InvoicesResponse } from "@/models/invoices";
import { ReceiptsResponse } from "@/models/receipts";
import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface DashboardState {
  loading?: boolean;
  monthlyTarget?: any;
  dashboardOwner?: any;
  dashboardAccountant: {
    stats: {
      outstanding_invoices: number;
      average_collection_period: string;
      gross_profit_margin: number;
      inventory_turnover: string;
      online_payments: number;
    };
    financials: {
      revenue: number;
      expenses: number;
      stock_value: number;
      profit_distribution: { profit: number; expenses: number; assets: number };
    };
    change: {
      outstanding_invoices: number;
      average_collection_period: number;
      gross_profit_margin: number;
      inventory_turnover: number;
      online_payments: number;
      revenue: number;
      expenses: number;
      stock_value: number;
    };
    period: {
      start: string;
      end: string;
    };
  } | null;
  dashboardInvoices: InvoicesResponse | null;
  dashboardReceipts: ReceiptsResponse | null;
  dashboardInventory: InventoryResponse | null;
}
const initialState: DashboardState = {
  dashboardAccountant: null,
  dashboardInvoices: null,
  dashboardReceipts: null,
  dashboardInventory: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Monthly Target
    builder.addCase(getMonthlyTarget.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMonthlyTarget.fulfilled, (state, action) => {
      state.loading = false;
      state.monthlyTarget = action.payload;
    });
    builder.addCase(getMonthlyTarget.rejected, (state) => {
      state.loading = false;
    });
    // Dashboard Owner
    builder.addCase(getDashboardOwner.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardOwner.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardOwner = action.payload;
    });
    builder.addCase(getDashboardOwner.rejected, (state) => {
      state.loading = false;
    });
    // Dashboard Accountant
    builder.addCase(getDashboardAccountant.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardAccountant.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardAccountant = action.payload;
    });
    builder.addCase(getDashboardAccountant.rejected, (state) => {
      state.loading = false;
    });
    // Dashboard Invoices
    builder.addCase(getDashboardInvoices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardInvoices = action.payload;
    });
    builder.addCase(getDashboardInvoices.rejected, (state) => {
      state.loading = false;
    });
    // Dashboard Receipts
    builder.addCase(getDashboardReceipts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardReceipts.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardReceipts = action.payload;
    });
    builder.addCase(getDashboardReceipts.rejected, (state) => {
      state.loading = false;
    });
    // Dashboard Inventory
    builder.addCase(getDashboardInventory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardInventory.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardInventory = action.payload;
    });
    builder.addCase(getDashboardInventory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = dashboardSlice.actions;
export const dashboardState = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;
