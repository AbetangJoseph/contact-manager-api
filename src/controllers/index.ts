import { Request, Response } from 'express'
import { contactList } from '../models/contacts'
import { validateInput } from '../middleware/validator'
import { dateCreated } from '../helpers/date'
import { userSchema } from '../utils/validation-schema'

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

export const postContactController = (req: Request, res: Response) => {
  const { error, value } = validateInput(req.body, userSchema)

  if (error) {
    res.status(400).json({ message: error.message })
    return
  }

  const userId = contactList.length + 1
  const date = dateCreated()
  const user = { ...value, id: userId, created: date }
  contactList.push(user)
  res.status(200).json({
    status: 'success',
    message: 'User created successfully',
    data: { ...user },
  })
}
