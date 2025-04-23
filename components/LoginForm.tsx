"use client";

import { loginUser } from "@/middlewares/auth.middleware";
import { loginSchema } from "@/schemas/loginSchema";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button, Card, Checkbox, Label, Spinner } from "flowbite-react";
import { useFormik } from "formik";
import Link from "next/link";
import Input from "./InputField";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authState } from "@/slices/auth.slice";
import Image from "next/image";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading } = useAppSelector(authState);
  const formik = useFormik({
    initialValues: {
      email: "markos.bahgat111@gmail.com",
      password: "GrosTest2020!_!_",
    },
    validationSchema: loginSchema,
    onSubmit(values, formikHelpers) {
      dispatch(
        loginUser({
          ...values,
          user_type: "root",
          ip_address: localStorage.getItem("user_ip") ?? "Unknown IP",
        }),
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          localStorage.setItem("user_email", values.email);
          toast.success((res.payload as { message: string }).message);
          router.push("/otp");
          formikHelpers.resetForm();
        }
      });
    },
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <Image className="mb-6 mr-2" src="./gh_full_logo.svg" alt="logo" />
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <Input
                label="Your email"
                id="email"
                placeholder="name@company.com"
                formik={formik}
                type="email"
              />
              <Input
                label="Password"
                id="password"
                placeholder="••••••••"
                formik={formik}
                type="password"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Checkbox id="remember" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </Label>
                  </div>
                </div>
                <a href="#" className="  text-sm font-medium hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full bg-ghred-500 hover:bg-ghred-600"
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
                  "Sign In"
                )}
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Don’t have an account yet?&nbsp;
                <Link href="/signup" className="  font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
