interface User {
  id: number
  firstname: string
  lastname?: string
  mobile: string
  address?: string
  email?: string
  company?: string
  website?: string
}

export const contactList: Array<User> = []
