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
router.get('/contact/:id', getContactController);
router.get('/contacts/blocked', getBlockedContactsController);
router.post('/contacts', addContactController);
router.put('/contact/:id/block', blockContactController);
router.put('/contact/:id/unblock', unBlockContactController);
router.put('/contact/:id/edit', updateContactController);
router.delete('/contact/:id', deleteContactController);

export default router;
