"use client";

import { createUserAccount } from "@/middlewares/auth.middleware";
import { loginSchema } from "@/schemas/loginSchema";
import { useAppDispatch } from "@/store";
import { Button, Card } from "flowbite-react";
import { useFormik } from "formik";
import Link from "next/link";
import Input from "./InputField";

export function RegistrationForm() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", phone_number: "" },
    validationSchema: loginSchema,
    onSubmit(values, formikHelpers) {
      dispatch(
        createUserAccount({
          first_name: values.name.split(" ")[0],
          last_name: values.name.split(" ")[1],
          email: values.email,
          password: values.password,
          phone_number: values.phone_number,
          user_type: "root",
          ip_address: localStorage.getItem("user_ip") ?? "Unknown IP",
        }),
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          // location.href = "/";
          formikHelpers.resetForm();
        }
      });
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <img className="mb-6 mr-2" src="./gh_full_logo.svg" alt="logo" />
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create new account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <Input
                label="Full name"
                formik={formik}
                id="name"
                placeholder="John Doe"
                type="text"
              />
              <Input
                label="Your email"
                id="email"
                placeholder="name@company.com"
                formik={formik}
                type="email"
              />
              <Input
                label="Phone number"
                id="phone_number"
                placeholder="+971554908802"
                formik={formik}
                type="phone"
              />
              <Input
                label="Password"
                id="password"
                placeholder="••••••••"
                formik={formik}
                type="password"
              />

              <Button
                type="submit"
                className="w-full bg-ghred-500 hover:bg-ghred-600"
              >
                Sign up
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Already have an account?&nbsp;
                <Link
                  href="/login"
                  className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
