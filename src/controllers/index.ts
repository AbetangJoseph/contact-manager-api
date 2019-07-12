import { Request, Response } from 'express'
import { contactList } from '../models/contacts'

export const getContactsController = (_req: Request, res: Response) => {
  res.status(200).json({ users: contactList })
}

export const getContactController = (req: Request, res: Response) => {
  const user = contactList.find(user => user.id === parseInt(req.params.id))
  if (!user) {
    res.json({ message: 'no such user' })
    return
  }
  res.status(200).json({ user: user })
}
