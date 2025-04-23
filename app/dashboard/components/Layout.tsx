import React from "react";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-fit flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <TopHeader />

      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default Layout;
