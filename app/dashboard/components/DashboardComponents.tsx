"use client";

import React from "react";
import Table from "@/components/Table";

import Stats from "@/app/dashboard/components/Stats";
import StackedBarChart from "@/app/dashboard/components/StackedBar";
import { Button } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { dashboardState } from "@/slices/dashboard.slice";
import { IInvoice, InvoicesResponse } from "@/models/invoices";
import { IReceipts, ReceiptsResponse } from "@/models/receipts";
import { IInventory, InventoryResponse } from "@/models/inventory";
import {
  getDashboardInventory,
  getDashboardInvoices,
  getDashboardReceipts,
} from "@/middlewares/dashboard.middleware";
import { exportToCSV } from "@/utils/exportToCSV";
import { toast } from "react-toastify";
import IncomeVsExpense from "@/app/dashboard/components/IncomeVsExpensesChart";
import MonthlyTarget from "@/app/dashboard/components/MonthlyTarget";
import PayableAndReceivable from "@/app/dashboard/components/PayableAndReceivable";
import TotalProfit from "@/app/dashboard/components/TotalProfit";

type Props = {};

const DashboardComponents = (props: Props) => {
  const {
    dashboardAccountant,
    dashboardInvoices,
    dashboardInventory,
    dashboardReceipts,
  } = useAppSelector(dashboardState);
  const dispatch = useAppDispatch();
  const handleRefresh = (target: string) => {
    switch (target) {
      case "Invoices":
        dispatch(getDashboardInvoices());
        break;
      case "Receipts":
        dispatch(getDashboardReceipts());
        break;
      case "Inventory":
        dispatch(getDashboardInventory());
        break;
      default:
        break;
    }
  };
  const handleExport = (target: string) => {
    switch (target) {
      case "Invoices":
        if (!dashboardInvoices || dashboardInvoices.total === 0) {
          toast.info("No data found to be export!");
          return;
        }
        exportToCSV(dashboardInvoices?.data as IInvoice[], "Invoices.csv");
        break;
      case "Receipts":
        if (!dashboardReceipts || dashboardReceipts.total === 0) {
          toast.info("No data found to be export!");
          return;
        }
        exportToCSV(dashboardReceipts?.data as IReceipts[], "Receipts.csv");
        break;
      case "Inventory":
        if (!dashboardInventory || dashboardInventory.total === 0) {
          toast.info("No data found to be export!");
          return;
        }
        exportToCSV(dashboardInventory?.data as IInventory[], "Inventory.csv");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full pb-10">
      <div className="my-6 flex flex-col items-start justify-start gap-1">
        <h1 className="text-[24px] font-bold text-[#111928]">
          Welcome Bellinda!
        </h1>
        <span className="text-[16px] text-[#6B7280]">Tuesday,28 May, 2024</span>
      </div>

      <div className="flex flex-col items-start justify-start gap-3 overflow-hidden rounded-lg bg-white p-6 shadow-md">
        <Stats
          stats={dashboardAccountant?.stats}
          change={dashboardAccountant?.change}
        />
        <div className="flex w-full   items-start justify-start  gap-3 overflow-auto border-y bg-white py-5">
          <IncomeVsExpense
            title="Revenue"
            finance={dashboardAccountant?.financials?.revenue as number}
            change={dashboardAccountant?.change?.revenue as number}
          />
          <IncomeVsExpense
            title="Expenses"
            finance={dashboardAccountant?.financials?.expenses as number}
            change={dashboardAccountant?.change?.expenses as number}
          />
          <IncomeVsExpense
            title="Stock Value"
            finance={dashboardAccountant?.financials?.stock_value as number}
            change={dashboardAccountant?.change?.stock_value as number}
          />
          <StackedBarChart
            financials={dashboardAccountant?.financials as any}
          />
        </div>
        <Button color="light">View Financial reports </Button>
      </div>
      <div className="my-10 flex size-full flex-col items-start justify-start gap-3 xl:flex-row">
        <TotalProfit />
        <div className="flex w-full flex-col items-start justify-start gap-3 lg:flex-row 2xl:w-2/5 2xl:flex-col">
          <MonthlyTarget />
          <PayableAndReceivable />
        </div>
      </div>
      <div className=" flex size-full flex-col items-start justify-start gap-5">
        <Table
          headers={[
            "ID",
            "Customer Name",
            "Description",
            "type",
            "date",
            "amount",
            "ar/ap",
            "status",
            "payment due date",
          ]}
          data={dashboardInvoices as InvoicesResponse}
          label="Invoices"
          handleRefresh={handleRefresh}
          handleExport={handleExport}
          isEmpty={!dashboardInvoices || dashboardInvoices?.total === 0}
        />
        <Table
          headers={[
            "ID",
            "Customer Name",
            "Description",
            "type",
            "date",
            "amount",
            "status",
            "payment method",
          ]}
          label="Receipts"
          handleRefresh={handleRefresh}
          handleExport={handleExport}
          data={dashboardReceipts as ReceiptsResponse}
          isEmpty={!dashboardReceipts || dashboardReceipts?.total === 0}
        />
        <Table
          headers={[
            "ID",
            "Item Name",
            "Category",
            "stock level",
            "unit price",
            "total value",
            "status",
          ]}
          handleRefresh={handleRefresh}
          data={dashboardInventory as InventoryResponse}
          label="Inventory"
          handleExport={handleExport}
          isEmpty={!dashboardInventory || dashboardInventory?.total === 0}
        />
      </div>
    </div>
  );
};

export default DashboardComponents;
