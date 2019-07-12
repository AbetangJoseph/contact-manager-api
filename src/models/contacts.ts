interface User {
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

export const contactList: Array<User> = [];
