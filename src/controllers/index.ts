import { Request, Response } from 'express'
import { contactList } from '../models/contacts'

export const getContactsController = (_req: Request, res: Response) => {
  res.status(200).json({ users: contactList })
}
