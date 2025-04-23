"use client";
import useReactApexChart from "@/hooks/useReactApexChart";
import ReactApexChart from "react-apexcharts";

const TotalProfit = () => {
  const { purchaseSaleChartOptions, purchaseSaleChartSeries } =
    useReactApexChart();

  return (
    <div className="size-full xl:w-1/2">
      <div className="flex h-full flex-col rounded-2xl bg-white shadow">
        <div className="flex items-start justify-between  border-b px-6 pb-2 pt-6">
          <div className="flex flex-col items-start justify-between">
            <h6 className="mb-0 text-[16px] font-thin text-[#6B7280]">
              Profit
            </h6>
            <span className="text-[24px] font-bold text-[#111928]">$5,405</span>
          </div>
          <span className="flex items-center whitespace-nowrap rounded bg-[#DEF7EC] px-3 py-0.5 text-[12px] text-[#03543F]">
            <svg
              className="size-4 text-green-800 dark:text-white"
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
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
            Profit rate 23,4%
          </span>
        </div>
        <div className="flex h-full grow flex-col gap-4 p-6">
          <ul className="flex  items-center justify-center gap-3">
            <li className="flex w-1/2 items-center gap-2">
              <div className="flex flex-col items-start justify-between">
                <h6 className="mb-0 text-[16px] font-thin text-[#6B7280]">
                  Sales
                </h6>
                <span className="text-[24px] font-bold text-[#1A56DB]">
                  $25,405
                </span>
              </div>
            </li>
            <li className="flex w-1/2 items-center gap-2">
              <div className="flex flex-col items-start justify-between">
                <h6 className="mb-0 text-[16px] font-thin text-[#6B7280]">
                  Expenses
                </h6>
                <span className="text-[24px] font-bold text-[#0694A2]">
                  $78,943
                </span>
              </div>
            </li>
          </ul>
          <div id="purchaseSaleChart" className="relative  size-full">
            <ReactApexChart
              options={purchaseSaleChartOptions as any}
              series={purchaseSaleChartSeries}
              type="bar"
              height={500}
            />
          </div>
          <div className="flex w-full items-center justify-between border-t pb-16 pt-6">
            <p className="flex items-center justify-center gap-1">
              Last 6 months{" "}
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
                  d="m8 10 4 4 4-4"
                />
              </svg>
            </p>
            <a className="flex items-center gap-1 text-[14px] uppercase text-[#1A56DB]">
              Revenue Report{" "}
              <svg
                className="size-6 text-[#1A56DB] dark:text-white"
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
                  d="m10 16 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
