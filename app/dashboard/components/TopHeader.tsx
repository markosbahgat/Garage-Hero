"use client";
import { logUserOut } from "@/middlewares/auth.middleware";
import { toggleSidebar } from "@/slices/app.slice";
import { authState } from "@/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
type Props = {};

const TopHeader = (props: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(authState);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (token) {
  //     const decodedToken = jwtDecode((token as string) || "");
  //     const isExpired = (decodedToken.exp as number) < Date.now() / 1000;
  //     if (isExpired) {
  //       localStorage.clear();
  //       Cookies.remove("authenticated");
  //       Cookies.remove("token");
  //       location.reload();
  //     }
  //   } else {
  //     localStorage.clear();
  //     Cookies.remove("authenticated");
  //     Cookies.remove("token");
  //     location.reload();
  //   }
  // }, []);
  const handleLogout = () => {
    if (user?.user?.id) {
      dispatch(logUserOut({ id: user?.user?.id }));
    } else {
      localStorage.clear();
      Cookies.remove("authenticated");
      Cookies.remove("token");
      location.reload();
    }
  };
  return (
    <nav className="fixed left-0 top-0 z-10 h-20 w-full border border-gray-200  bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/gh_small_logo.svg" className="h-8" alt="Flowbite Logo" />
          <div className="flex items-center justify-center gap-3 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            <button onClick={() => dispatch(toggleSidebar())}>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
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
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>

            <div className="hidden dark:bg-gray-900 md:block">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
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
                  id="table-search"
                  className="block w-80 rounded-lg border border-gray-300 bg-gray-50 ps-10 pt-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
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
                d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"
              />
            </svg>
          </button>

          <button onClick={handleLogout}>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="ml-8 size-8 rounded-full bg-gray-50"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
