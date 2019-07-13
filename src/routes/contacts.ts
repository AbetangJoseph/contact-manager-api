import { Router } from 'express';
import {
  getContactsController,
  getContactController,
  addContactController,
  deleteContactController,
  blockContactController,
  getBlockedContactsController,
  unBlockContactController,
} from '../controllers';

const router = Router();

router.get('/contacts', getContactsController);
router.get('/contact/:id', getContactController);
router.get('/contacts/blocked', getBlockedContactsController);
router.post('/contacts', addContactController);
router.post('/contact/:id/block', blockContactController);
router.post('/contact/:id/unblock', unBlockContactController);
router.delete('/contact/:id', deleteContactController);

export default router;
