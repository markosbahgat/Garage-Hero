export interface IReceipts {
  id: string;
  customer_name: string;
  description: string;
  type: string;
  date: string;
  amount: number;
  status: string;
  payment_method: string;
}

export interface ReceiptsResponse {
  data: IReceipts[];
  total: number;
  page: number;
  page_size: number;
}
