"use client";

import React from "react";
import useReactApexChart from "@/hooks/useReactApexChart";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
type Props = {};

const PayableAndReceivable = (props: Props) => {
  const { barChartOptionsOne, barChartSeriesOne } = useReactApexChart();
  return (
    <div className="size-full rounded-2xl bg-white p-4 shadow">
      <div className=" h-full">
        <div className=" p-6">
          <div className="flex flex-col  items-start justify-start gap-2">
            <h6 className=" text-lg font-bold uppercase text-[#828282]">
              Payables and Receivables{" "}
            </h6>
            <h6 className="mb-5 text-center text-sm text-[#6B7280]">
              for this month
            </h6>
          </div>
          <div>
            <ReactApexChart
              options={barChartOptionsOne as any}
              series={barChartSeriesOne}
              type="bar"
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayableAndReceivable;
