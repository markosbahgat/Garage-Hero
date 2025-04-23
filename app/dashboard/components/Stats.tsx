import { formatNumber } from "@/utils/formatNumbers";
import { Datepicker } from "flowbite-react";
import React from "react";

type Props = {
  stats?: {
    outstanding_invoices: number;
    average_collection_period: string;
    gross_profit_margin: number;
    inventory_turnover: string;
    online_payments: number;
  };
  change?: {
    outstanding_invoices: number;
    average_collection_period: number;
    gross_profit_margin: number;
    inventory_turnover: number;
    online_payments: number;
    revenue: number;
    expenses: number;
    stock_value: number;
  };
};

const Stats: React.FC<Props> = ({ stats, change }) => {
  const statsArr = [
    {
      title: "Outstanding Invoices",
      value: stats?.outstanding_invoices,
      percentage: change?.outstanding_invoices,
      subTitle: "vs last month",
    },
    {
      title: "Average Collection Period",
      value: stats?.average_collection_period,
      percentage: change?.average_collection_period,
      subTitle: "vs last month",
    },
    {
      title: "Gross Profit Margin",
      value: formatNumber(stats?.gross_profit_margin as number),
      percentage: change?.gross_profit_margin,
      subTitle: "vs last month",
    },
    {
      title: "Inventory Turnover",
      value: stats?.inventory_turnover,
      percentage: change?.inventory_turnover,
      subTitle: "vs last month",
    },
    {
      title: "Online Payments",
      value: stats?.online_payments,
      percentage: change?.online_payments,
      subTitle: "vs last month",
    },
  ];
  return (
    <div className=" flex w-full items-start justify-start gap-12">
      <div className="flex w-full items-start justify-start gap-[16px]">
        {statsArr.map((item) => (
          <div
            key={item.title}
            className="flex w-48 flex-col items-start justify-start gap-2"
          >
            <h6 className="text-[14px] font-thin  capitalize text-[#6B7280]">
              {item.title}
            </h6>
            <h6 className="flex items-center justify-center gap-2 text-center text-[24px] font-extrabold text-[#111928]">
              {item.value}{" "}
              <span className="flex items-center whitespace-nowrap rounded bg-green-200 px-1 text-sm text-green-800">
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
                {item.percentage}%
              </span>
            </h6>

            <span className="text-[14px] text-[#6B7280]">{item.subTitle}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full items-start justify-end">
        <Datepicker minDate={new Date()} weekStart={1} />
      </div>
    </div>
  );
};

export default Stats;
