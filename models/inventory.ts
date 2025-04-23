export interface IInventory {
  id: string;
  item_name: string;
  category: string;
  stock_level: string;
  unit_price: number;
  total_value: string;
  status: string;
}

export interface InventoryResponse {
  data: IInventory[];
  total: number;
  page: number;
  page_size: number;
}
