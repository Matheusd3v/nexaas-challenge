export interface ICostumersInfo {
  totalCostumers: number;
  defaulterCostumers: number;
  noDefaulters: number;
}

export interface ICostumerShape {
  name: string;
  email: string;
  phone: string;
  status: string;
  subscription_amount: number;
  profile_url?: string | null;
}
