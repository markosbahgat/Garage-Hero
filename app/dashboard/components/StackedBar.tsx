"use client";

import useReactApexChart from "@/hooks/useReactApexChart";
import { formatNumber } from "@/utils/formatNumbers";
import React from "react";
// components/Chart.tsx
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  financials: {
    revenue: number;
    expenses: number;
    stock_value: number;
    profit_distribution: {
      profit: number;
      expenses: number;
      assets: number;
    };
  };
}
const StackedBarChart: React.FC<Props> = ({ financials }) => {
  const { stackedBarOptions, stackedBarSeries } = useReactApexChart();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between gap-10">
        <div className="flex w-full flex-col items-start justify-start gap-1 p-5">
          <p className="flex items-center justify-center gap-1 text-[14px] text-[#6B7280]">
            <svg
              className="size-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Profit
          </p>
          <h1 className="text-[24px] font-bold text-[#111928]">
            {financials?.profit_distribution?.profit}%
          </h1>
          <p className="text-[16px] text-[#6B7280]">
            ${formatNumber(financials?.revenue)}
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1 p-5">
          <p className="flex items-center justify-center gap-1 text-[14px] text-[#6B7280]">
            <svg
              className="size-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
            Expenses
          </p>
          <h1 className="text-[24px] font-bold text-[#111928]">
            {financials?.profit_distribution?.expenses}%
          </h1>
          <p className="text-[16px] text-[#6B7280]">
            ${formatNumber(financials?.expenses)}
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-1 p-5">
          <p className="flex items-center justify-center gap-1 text-[14px] text-[#6B7280]">
            <svg
              className="size-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
              />
            </svg>
            Assets
          </p>
          <h1 className="text-[24px] font-bold text-[#111928]">
            {financials?.profit_distribution?.assets}%
          </h1>
          <p className="text-[16px] text-[#6B7280]">
            ${formatNumber(financials?.stock_value)}
          </p>
        </div>
      </div>
      <div className="mt-[-50px]">
        <ApexChart
          options={stackedBarOptions}
          series={stackedBarSeries}
          type="bar"
          height={100}
        />
      </div>
    </div>
  );
};

export default StackedBarChart;
