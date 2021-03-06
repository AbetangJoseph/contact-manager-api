export interface addContact {
  firstname: string;
  lastname?: string;
  mobile: string;
  address?: string;
  email?: string;
  company?: string;
  website?: string;
}

export interface editContact {
  firstname?: string;
  lastname?: string;
  mobile?: string;
  address?: string;
  email?: string;
  company?: string;
  website?: string;
}

export interface Contact {
  id: number;
  firstname: string;
  lastname?: string;
  mobile: string;
  address?: string;
  email?: string;
  company?: string;
  website?: string;
  isBlocked: boolean;
}
