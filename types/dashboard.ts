export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  responded: boolean;
  response?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Quotation {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  details?: string;
  responded: boolean;
  response?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  rating?: number;
  responded: boolean;
  response?: string;
  createdAt: string;
  updatedAt: string;
}
