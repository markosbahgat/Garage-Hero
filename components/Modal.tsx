"use client";

import {
  Button,
  Modal as ModalComponent,
  ModalBody,
  ModalHeader,
  Datepicker,
  Select,
  TextInput,
  Label,
} from "flowbite-react";
import { useState } from "react";

interface Props {
  show: boolean;
  onClose: (value: boolean) => void;
}
export const Modal: React.FC<Props> = ({ show, onClose }) => {
  const [email, setEmail] = useState("");

  function onCloseModal() {
    onClose(false);
    setEmail("");
  }

  return (
    <ModalComponent show={show} size="2xl" onClose={onCloseModal} popup>
      <ModalHeader />
      <ModalBody>
        <div className="space-y-6">
          <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white">
            Set Monthly Target
          </h3>

          <div className="w-full">
            <div className="flex items-center justify-center gap-3">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <Label>Start Date</Label>
                <Datepicker
                  defaultValue="Select Date"
                  placeholder="Select Date"
                  className="w-full"
                  title="Start Date"
                  defaultDate={undefined}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <Label>End Date</Label>
                <Datepicker className="w-full" title="End Date" />
              </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-start justify-start gap-3">
              <Label>Revenue Target</Label>
              <div className="flex w-full items-center justify-center gap-2">
                <TextInput className="w-full appearance-none border-none outline-none" />
                <Select className="w-full" id="currencies">
                  <option>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9862 10.6384C10.8539 10.315 10.7191 9.99159 10.5721 9.67306C10.4423 9.38884 10.2757 9.30553 9.96448 9.37659C9.56999 9.46725 9.18286 9.58731 8.78838 9.66816C8.02636 9.82743 7.2619 9.84213 6.50968 9.60446C5.56635 9.30798 5.06406 8.62437 4.75533 7.7423H7.31335C7.51427 7.7423 7.67598 7.58058 7.67598 7.37967V6.57355C7.67598 6.37263 7.51427 6.21092 7.31335 6.21092H4.51031C4.51031 5.9855 4.50786 5.76988 4.51031 5.55426H7.31335C7.51427 5.55426 7.67598 5.39255 7.67598 5.19163V4.38551C7.67598 4.18459 7.51427 4.02288 7.31335 4.02288H4.86314C4.86314 4.01308 4.86314 4.00328 4.86804 3.99838C5.16207 3.32947 5.59085 2.79287 6.29406 2.51355C7.11243 2.19012 7.94795 2.19747 8.79083 2.37144C9.19021 2.45229 9.58224 2.5748 9.98163 2.66546C10.2732 2.73162 10.4423 2.64586 10.5672 2.37389C10.7118 2.06026 10.8441 1.74173 10.9764 1.42076C11.1014 1.11938 11.0279 0.906211 10.7436 0.739597C10.6726 0.697944 10.5991 0.663641 10.5231 0.634238C9.34212 0.173599 8.12437 0.00208377 6.86741 0.203001C5.98289 0.345113 5.15717 0.648939 4.44416 1.20269C3.54493 1.89855 2.96178 2.81738 2.62365 3.89792L2.582 4.02288H1.32259C1.12167 4.02288 0.959961 4.18459 0.959961 4.38551V5.19163C0.959961 5.39255 1.12167 5.55426 1.32259 5.55426H2.31493C2.31493 5.77478 2.31493 5.98795 2.31493 6.21092H1.32259C1.12167 6.21092 0.959961 6.37263 0.959961 6.57355V7.37967C0.959961 7.58058 1.12167 7.7423 1.32259 7.7423H2.51829C2.60895 8.03632 2.68491 8.33525 2.80007 8.61702C3.40527 10.0773 4.41965 11.1162 5.94613 11.6112C7.20799 12.0204 8.47965 12.0081 9.75131 11.6577C10.0821 11.5671 10.4104 11.4495 10.724 11.3049C11.0279 11.1652 11.1063 10.93 10.9862 10.6384Z"
                        fill="#111928"
                      />
                    </svg>
                    EUR
                  </option>
                  <option>USD</option>
                  <option>EGP</option>
                  <option>AED</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="w-full border-t pt-4">
            <Button color="alternative" className="bg-[#1A56DB] text-white">
              Save
            </Button>
          </div>
        </div>
      </ModalBody>
    </ModalComponent>
  );
};
