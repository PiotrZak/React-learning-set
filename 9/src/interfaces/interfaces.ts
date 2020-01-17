export interface DebtOverview {
  id?: number;
  name?: string;
  nip?: string;
  value?: number;
}

export interface Debt extends DebtOverview {
  address?: string;
  documentType?: string;
  price?: number;
  number?: string;
}

export interface DebtAPI extends Debt {
  key?: number;
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  Address?: string;
  DocumentType?: string;
  Price?: number;
  Number?: string;
  activatedDebt?: number | null;
}
