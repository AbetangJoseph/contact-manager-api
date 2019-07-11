interface User {
  id: number
  firstname: string
  lastname?: string
  email?: string
  mobile: string
  company?: string
  website?: string
}

export const contactList: User[] = [
  {
    id: 1,
    firstname: 'Joe',
    lastname: 'Abetang',
    email: 'joeabetang@gmail.com',
    mobile: '+2348122773761',
  },
]
