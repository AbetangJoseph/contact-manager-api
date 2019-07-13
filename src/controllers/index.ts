import { Request, Response } from 'express';
import { contactList } from '../models/contacts';
import { validateInput } from '../middleware/validator';
import { dateCreated } from '../helpers/date';
import { binarySearch } from '../helpers/binaryFind';
import { userSchema } from '../utils/validation-schema';

export const getContactsController = (_req: Request, res: Response) => {
  const users = contactList.filter(user => !user.isBlocked);
  res.status(200).json({ contacts: users });
};

export const getContactController = (req: Request, res: Response) => {
  const user = binarySearch(contactList, req.params.id);
  if (!user) {
    res.json({ message: 'no such user' });
    return;
  }
  res.status(200).json({ user: user });
};

export const getBlockedContactsController = (_req: Request, res: Response) => {
  const blockedContacts = contactList.filter(contact => contact.isBlocked);
  res.status(200).json({ blockedContacts: blockedContacts });
};

export const addContactController = (req: Request, res: Response) => {
  const { error, value } = validateInput(req.body, userSchema);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  const userId = contactList.length + 1;
  const date = dateCreated();
  const user = { ...value, id: userId, created: date, isBlocked: false };
  contactList.push(user);
  res.status(200).json({
    status: 'success',
    message: 'User created successfully',
    data: { ...user },
  });
};

export const blockContactController = (req: Request, res: Response) => {
  const user = binarySearch(contactList, req.params.id);
  if (!user) {
    res.status(400).json({ message: 'bad request' });
    return;
  }
  user.isBlocked = true;
  res.status(200).json({ message: 'Contact has been blocked' });
};

export const unBlockContactController = (req: Request, res: Response) => {
  const user = binarySearch(contactList, req.params.id);
  if (!user) {
    res.status(400).json({ message: 'bad request' });
    return;
  }
  user.isBlocked = false;
  res.status(200).json({ message: 'Contact has been unblocked' });
};

export const deleteContactController = (req: Request, res: Response) => {
  const userIndex = contactList.findIndex(
    user => user.id === parseInt(req.params.id),
  );

  if (userIndex === -1) {
    res.status(404).json({ message: 'no such user' });
    return;
  }

  contactList.splice(userIndex, 1);
  res.status(200).json({ message: 'User deleted successfully' });
};
