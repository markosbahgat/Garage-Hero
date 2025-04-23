"use client";
import { Button, Spinner } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { resendOtp, verifyOTP } from "@/middlewares/auth.middleware";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authState } from "@/slices/auth.slice";
import Image from "next/image";

export function EmailVerificationOTPForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRefs = Array.from({ length: 6 }, () => inputRef);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading } = useAppSelector(authState);

  const formik = useFormik({
    initialValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    },
    validationSchema: Yup.object({
      code1: Yup.string().required(),
      code2: Yup.string().required(),
      code3: Yup.string().required(),
      code4: Yup.string().required(),
      code5: Yup.string().required(),
      code6: Yup.string().required(),
    }),
    onSubmit: (values, formikHelpers) => {
      const otp = Object.values(values).join("");
      dispatch(
        verifyOTP({
          otp,
          email: localStorage.getItem("user_email") ?? "",
          user_type: "root",
          ip_address: localStorage.getItem("user_ip") ?? "Unknown IP",
        }),
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success((res.payload as { message: string }).message);
          localStorage.removeItem("user_email");
          router.push("/dashboard");
          formikHelpers.resetForm();
        }
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    if (/^[0-9]*$/.test(value)) {
      formik.setFieldValue(`code${index + 1}`, value);
      if (value && inputRefs[index + 1]) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };
  const handleResendOtp = () => {
    dispatch(
      resendOtp({
        email: (window && localStorage?.getItem("user_email")) ?? "",
        user_type: "root",
      }),
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success((res.payload as { message: string }).message);
      }
    });
  };
  return (
    <section className="bg-white px-4 py-8 dark:bg-gray-900 lg:py-0">
      <div className="lg:flex">
        <div className=" hidden w-full max-w-md p-12 lg:block lg:h-screen">
          <div className="mb-8 flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <Image
                alt=""
                src="./gh_small_logo.svg"
                className="mr-2 size-11"
              />
            </a>
            <a
              href="/login"
              className=" inline-flex items-center text-sm font-medium hover:text-white"
            >
              <svg
                className="mr-1 size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </a>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <div className="mb-8 flex items-center justify-center space-x-4 lg:hidden">
              <a href="#" className="flex items-center text-2xl font-semibold">
                <Image
                  alt=""
                  src="./gh_small_logo.svg"
                  className="mr-2 size-11"
                />
              </a>
            </div>
            <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Verify your email address
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                {(window && localStorage?.getItem("user_email")) ?? ""}
              </span>
              . Enter the code below to confirm your email address.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="my-4 flex space-x-2 sm:space-x-4 md:my-6">
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index}>
                    <label htmlFor={"code" + index} className="sr-only">
                      First code
                    </label>
                    <input
                      id={"code" + index}
                      maxLength={1}
                      ref={inputRefs[index]}
                      value={
                        formik.values[
                          `code${index + 1}` as keyof typeof formik.values
                        ]
                      }
                      onChange={(e) => handleChange(e, index)}
                      onKeyUp={() =>
                        (
                          document.querySelector(
                            "#code" + index,
                          ) as HTMLInputElement
                        )?.focus()
                      }
                      required
                      type="text"
                      className="block size-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 focus:border-ghred-500 focus:ring-ghred-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-ghred-500 dark:focus:ring-ghred-500 sm:size-16 sm:py-4 sm:text-4xl"
                    />
                  </div>
                ))}
              </div>
              <p className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:mb-6">
                Make sure to keep this window open while checking your inbox.
              </p>
              <p className="mb-4 flex items-center gap-1  rounded-lg text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400 ">
                Didn&apos;t receive anything ?{" "}
                <button
                  onClick={handleResendOtp}
                  type="button"
                  className="capitalize text-red-500 hover:text-red-600"
                >
                  resend otp
                </button>
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-ghred-500 hover:bg-ghred-600 [&>span]:text-sm"
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        size="sm"
                        aria-label="Info spinner example"
                        className="me-3"
                        light
                      />
                      Loading...
                    </>
                  ) : (
                    "Verify account"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
