import { Request, Response } from 'express';
import { contactList } from '../models/contacts';
import { validateAdd, validateUpdate } from '../middleware/validator';
import { binarySearch } from '../helpers/binaryFind';
import {
  addContactSchema,
  updateContactSchema,
} from '../utils/validation-schema';

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
  const { error, value } = validateAdd(req.body, addContactSchema);

  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }

  const userId = contactList.length + 1;
  const date = Date.now();
  const contact = { ...value, id: userId, created: date, isBlocked: false };
  contactList.push(contact);
  res.status(201).json({
    status: 'success',
    message: 'contact created successfully',
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
  res.status(200).json({ message: 'contact has been blocked' });
};

export const unBlockContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(400).json({ error: 'bad request' });
    return;
  }
  contactData.contact.isBlocked = false;
  res.status(200).json({ message: 'contact has been unblocked' });
};

export const updateContactController = (req: Request, res: Response) => {
  const contactData = binarySearch(contactList, req.params.id);
  if (!contactData) {
    res.status(400).json({ error: 'no such contact' });
    return;
  }

  const { error, value } = validateUpdate(req.body, updateContactSchema);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  contactList[contactData.contactIndex] = { ...contactData.contact, ...value };

  res.status(200).json({ message: true });
};

export const deleteContactController = (req: Request, res: Response) => {
  const contactIndex = contactList.findIndex(
    contact => contact.id === parseInt(req.params.id),
  );

  if (contactIndex === -1) {
    res.status(404).json({ message: 'no such contact' });
    return;
  }
  const deletedContact = contactList[contactIndex];
  contactList.splice(contactIndex, 1);

  res.status(200).json({ data: deletedContact });
};
