import { Router } from 'express';
import {
  getContactsController,
  getContactController,
  addContactController,
  deleteContactController,
  blockContactController,
  getBlockedContactsController,
  unBlockContactController,
  updateContactController,
} from '../controllers';

const router = Router();

router.get('/contacts', getContactsController);
router.get('/contacts/blocked', getBlockedContactsController);
router.get('/contacts/:id', getContactController);
router.post('/contacts', addContactController);
router.put('/contacts/:id/block', blockContactController);
router.put('/contacts/:id/unblock', unBlockContactController);
router.put('/contacts/:id/edit', updateContactController);
router.delete('/contacts/:id', deleteContactController);

export default router;
