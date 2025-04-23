import React from "react";
import Pagination from "./Pagination";
import { Button } from "flowbite-react";
import EmptyState from "./EmptyState";
import { IReceipts, ReceiptsResponse } from "@/models/receipts";
import { IInventory, InventoryResponse } from "@/models/inventory";
import { IInvoice, InvoicesResponse } from "@/models/invoices";
import { classNames } from "@/utils/classnames";

type Props = {
  data: ReceiptsResponse | InventoryResponse | InvoicesResponse;
  label: string;
  isEmpty: boolean;
  headers: string[];
  handleRefresh: (target: string) => void;
  handleExport: (target: string) => void;
};

const statuses: { [key: string]: string } = {
  Completed: "text-green-700 bg-green-100 ",
  "In Progress": "text-purple-600 bg-purple-100 ",
  Cancelled: "text-red-700 bg-red-100 ",
  "In Stock": "text-green-700 bg-green-100 ",
  "Low Stock": "text-orange-600 bg-orange-100 ",
  "Out of Stock": "text-red-700 bg-red-100 ",
};
const types: { [key: string]: string } = {
  Insurance: "text-yellow-700 bg-yellow-100 ",
  Business: "text-blue-600 bg-blue-100 ",
  Agent: "text-purple-700 bg-purple-100 ",
  Supplier: "text-sky-700 bg-sky-100 ",
  Individual: "text-gray-700 bg-gray-100 ",
};

const Table: React.FC<Props> = ({
  data,
  label,
  isEmpty,
  headers,
  handleRefresh,
  handleExport,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-[24px] font-bold">{label}</h1>
        <div className="flex items-center justify-center gap-3">
          <Button color="light" onClick={() => handleRefresh(label)}>
            <div className="flex items-center justify-center gap-1">
              <svg
                className="h-4 w-4 text-gray-800 dark:text-white"
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
                  d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                />
              </svg>
              Refresh
            </div>
          </Button>
          <Button color="light" onClick={() => handleExport(label)}>
            <div className="flex items-center justify-center gap-1">
              <svg
                className="h-4 w-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v9.293l-2-2a1 1 0 0 0-1.414 1.414l.293.293h-6.586a1 1 0 1 0 0 2h6.586l-.293.293A1 1 0 0 0 18 16.707l2-2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              Export
            </div>
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          isEmpty ? "w-full" : "w-fit",
          "relative overflow-x-auto",
        )}
      >
        <div className="flex-column  mb-4 flex flex-wrap items-center justify-start gap-5 space-y-4 bg-white py-4 dark:bg-gray-900 md:flex-row md:space-y-0">
          <div className="relative flex  w-[500px] flex-nowrap whitespace-nowrap rounded-lg border border-gray-300 bg-gray-50 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              placeholder="Search"
              className=" h-10 w-10/12 appearance-none border-none bg-inherit outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
            />
            <button className="min-h-full w-20 rounded-r-lg bg-[#C81E1E] text-white">
              Search
            </button>
          </div>
          <div>
            <Button color="light">
              <div className="flex items-center justify-center gap-1">
                <svg
                  className="h-4 w-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                </svg>
                Filters
              </div>
            </Button>
          </div>
        </div>
        {isEmpty ? (
          <EmptyState />
        ) : (
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {headers.map((item) => (
                  <th key={item} scope="col" className="px-6 py-3 uppercase">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item: IInvoice | IReceipts | IInventory) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">{item?.id}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {label === "Inventory"
                      ? (item as IInventory)?.item_name
                      : (item as IInvoice)?.customer_name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {label === "Inventory"
                        ? (item as IInventory)?.category
                        : (item as IInvoice)?.description}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {label === "Inventory" ? (
                      (item as IInventory)?.stock_level
                    ) : (
                      <span
                        className={classNames(
                          "rounded-md px-2 py-1 text-xs font-medium ring-0 ring-inset",
                          types[(item as IInvoice)?.type] as string,
                        )}
                      >
                        {(item as IInvoice)?.type}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {label === "Inventory"
                      ? (item as IInventory)?.unit_price
                      : (item as IInvoice)?.date}
                  </td>
                  <td className="px-6 py-4">
                    {label === "Inventory"
                      ? (item as IInventory)?.total_value
                      : (item as IInvoice)?.amount}
                  </td>
                  <td className={"px-6 py-4"}>
                    <span
                      className={classNames(
                        "rounded-md px-2 py-1 text-xs font-medium ring-0 ring-inset",
                        statuses[item?.status] as string,
                      )}
                    >
                      {item?.status}
                    </span>
                  </td>
                  {label === "Receipts" && (
                    <td className="px-6 py-4">
                      {(item as IReceipts)?.payment_method}
                    </td>
                  )}
                  {label === "Invoices" && (
                    <td className="px-6 py-4">{(item as IInvoice)?.ar_ap}</td>
                  )}
                  {label === "Invoices" && (
                    <td className="px-6 py-4">
                      {(item as IInvoice)?.payment_due_date}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Pagination />
    </div>
  );
};

export default Table;
