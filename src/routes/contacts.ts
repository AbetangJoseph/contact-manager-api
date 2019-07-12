import { Router } from 'express';
import {
  getContactsController,
  getContactController,
  postContactController,
  deleteContactController,
  blockContactController,
  blockedContactsController,
} from '../controllers';

const router = Router();

router.get('/contacts', getContactsController);
router.get('/contact/:id', getContactController);
router.post('/contacts', postContactController);
router.delete('/contact/:id', deleteContactController);
router.post('/contact/:id/block', blockContactController);
router.get('/contacts/blocked', blockedContactsController);

export default router;
