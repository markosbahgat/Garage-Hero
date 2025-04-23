import { classNames } from "@/utils/classnames";
import { Label, TextInput } from "flowbite-react";
import { FormikProps } from "formik";
import React from "react";

type Props = {
  formik: FormikProps<any>;
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

const Input: React.FC<Props> = ({ formik, label, id, placeholder, type }) => {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block dark:text-white">
        {label}
      </Label>
      <TextInput
        id={id}
        placeholder={placeholder}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete={id}
        type={type}
        className={classNames(
          formik.errors?.[id] && formik?.touched?.[id]
            ? "border-ghred-500 bg-ghred-50 text-ghred-900"
            : "border-cyan-500 bg-ghred-50 text-ghred-900",
          " placeholder:text-ghred-700 focus:border-ghred-500 focus:ring-ghred-500 dark:border-ghred-400 dark:bg-ghred-100 dark:focus:border-ghred-500 dark:focus:ring-ghred-500",
        )}
      />
      {formik.errors?.[id] && formik?.touched?.[id] ? (
        <p id="email-error" className="mt-2 text-sm text-red-600">
          {typeof formik.errors?.[id] === "string"
            ? (formik.errors?.[id] as string)
            : (formik.errors?.[id] as string[])?.map((item) => <>{item}</>)}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
