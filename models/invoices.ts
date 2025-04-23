export interface IInvoice {
  id: string;
  customer_name: string;
  description: string;
  type: string;
  date: string;
  amount: number;
  ar_ap: string;
  status: string;
  payment_due_date: string;
}

export interface InvoicesResponse {
  data: IInvoice[];
  total: number;
  page: number;
  page_size: number;
}
