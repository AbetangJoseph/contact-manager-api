// export const create = (_req, res) => {
//   res.status(200).json({ message: 'hello backend boy' })
// }
import { Request, Response } from 'express'

export const getContactsController = (_req: Request, res: Response) => {
  res.status(200).json({ message: 'hello backend boss' })
}
