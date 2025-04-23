"use client";

import { formatNumber } from "@/utils/formatNumbers";
import useReactApexChart from "@/hooks/useReactApexChart";
import ReactApexChart from "react-apexcharts";

interface Props {
  title: string;
  finance: number | string;
  change: number | string;
}
const IncomeVsExpense: React.FC<Props> = ({ title, finance, change }) => {
  const { incomeExpenseOptions, incomeExpenseSeries } = useReactApexChart();

  return (
    <div className=" h-fit w-full border-r bg-white ">
      <div className=" flex w-full flex-wrap items-start justify-between gap-6 p-5">
        <div className="flex flex-col items-start justify-start">
          <span className="text-[16px] text-[#6B7280]">{title}</span>
          <h6 className=" text-[24px] font-semibold">
            ${formatNumber(finance)}
          </h6>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center whitespace-nowrap rounded bg-green-200 px-1 text-sm text-green-800">
            {Number(change) > 0 ? (
              <svg
                className="h-3 w-3 text-green-800 dark:text-white"
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
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            ) : null}
            {change}%
          </span>
        </div>
      </div>

      {finance && change ? (
        <div className="mt-[-60px] flex h-full w-full items-end justify-center">
          <ReactApexChart
            options={incomeExpenseOptions as any}
            series={incomeExpenseSeries}
            type="area"
            height={130}
            width={"350px"}
          />
        </div>
      ) : null}
    </div>
  );
};

export default IncomeVsExpense;
