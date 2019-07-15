import { Request, Response } from 'express';
import { contactList } from '../models/contacts';
import { validateAdd, validateUpdate } from '../middleware/validator';
import { dateCreated } from '../helpers/date';
import { binarySearch } from '../helpers/binaryFind';
import { userSchema } from '../utils/validation-schema';

export const getContactsController = (_req: Request, res: Response) => {
  const contacts = contactList.filter(contact => !contact.isBlocked);
  res.status(200).json({ contacts: contacts });
};

export const getContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(404).json({ message: 'no such user' });
    return;
  }
  res.status(200).json({ user: contactData.contact });
};

export const getBlockedContactsController = (_req: Request, res: Response) => {
  const blockedContacts = contactList.filter(contact => contact.isBlocked);
  res.status(200).json({ blockedContacts: blockedContacts });
};

export const addContactController = (req: Request, res: Response) => {
  const { error, value } = validateAdd(req.body, userSchema);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  const userId = contactList.length + 1;
  const date = dateCreated();
  const contact = { ...value, id: userId, created: date, isBlocked: false };
  contactList.push(contact);
  res.status(200).json({
    status: 'success',
    message: 'User created successfully',
    data: { ...contact },
  });
};

export const blockContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(400).json({ message: 'bad request' });
    return;
  }
  contactData.contact.isBlocked = true;
  res.status(200).json({ message: 'Contact has been blocked' });
};

export const unBlockContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(400).json({ message: 'bad request' });
    return;
  }
  contactData.contact.isBlocked = false;
  res.status(200).json({ message: 'Contact has been unblocked' });
};

export const updateContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(400).json({ message: 'no such contact' });
    return;
  }

  const { error, value } = validateUpdate(req.body, userSchema);
  if (error) {
    res.status(400).json({ message: error.message });
  }

  const updatedUser = { ...contactData.contact, ...value };
  contactList.splice(contactData.contactIndex, 1, updatedUser);

  res.status(200).json({ message: true });
};

export const deleteContactController = (req: Request, res: Response) => {
  const contactIndex = contactList.findIndex(
    contact => contact.id === parseInt(req.params.id),
  );

  if (contactIndex === -1) {
    res.status(404).json({ message: 'no such user' });
    return;
  }

  contactList.splice(contactIndex, 1);
  res.status(200).json({ message: 'User deleted successfully' });
};
