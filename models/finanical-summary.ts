export interface IFinancialSummary {
  total_profit: number;
  total_sales: number;
  total_expenses: number;
  profit_rate: number;
  time_period: string;
  monthly_data: IMonthlyData[];
}

export interface IMonthlyData {
  currentRevenue: {
    amount: number;
    currency_code: string;
  };
  targetRevenue: {
    amount: number;
    currency_code: string;
  };
  dateStart: string;
  dateEnd: string;
}
