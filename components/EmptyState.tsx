import React from "react";

type Props = {};

const EmptyState = (props: Props) => {
  return (
    <div className="my-10 flex size-full flex-col items-center justify-center gap-3 p-10">
      <div className="flex size-[100px] items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
        <svg
          className="size-[50px] text-[#98A2B3] dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <span className="mt-4 text-[14px] font-[500] text-[#767C85]">
        There are no records available for the current period.
      </span>
    </div>
  );
};

export default EmptyState;
