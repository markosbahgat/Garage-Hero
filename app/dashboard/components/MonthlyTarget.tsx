"use client";

import { useAppSelector } from "@/store";
import useReactApexChart from "@/hooks/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import { dashboardState } from "@/slices/dashboard.slice";
import { useState } from "react";
import { Modal } from "@/components/Modal";

const MonthlyTarget = () => {
  const { userOverviewDonutChartOptionsTwo, userOverviewDonutChartSeriesTwo } =
    useReactApexChart();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { monthlyTarget } = useAppSelector(dashboardState);

  const handleModal = (value: boolean) => {
    setShowModal(value);
  };
  return (
    <div className="w-full">
      <Modal show={showModal} onClose={handleModal} />
      <div className="h-full rounded-2xl bg-white shadow">
        <div className="border-b border-gray-100 p-6">
          <div className="flex flex-wrap items-center justify-between ">
            <h6 className=" text-lg font-bold uppercase text-[#828282]">
              Monthly Target
            </h6>
            <svg
              onClick={() => handleModal(true)}
              className="size-6 cursor-pointer text-[#6B7280] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <div className="relative mt-6">
            <div className="   ">
              <ReactApexChart
                options={userOverviewDonutChartOptionsTwo as any}
                series={userOverviewDonutChartSeriesTwo}
                type="donut"
                height={200}
              />
            </div>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 text-center">
              <span className="text-[20px] font-bold text-[#030229]">80%</span>
              <h6 className="text-[12px] text-gray-600">Reached</h6>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#1A4C84]" />
              <span className="text-sm text-gray-500">Target reached</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#1AA5AE]" />
              <span className="text-sm text-gray-500">Days to go</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTarget;
