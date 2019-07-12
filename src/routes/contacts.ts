import { Router } from 'express';
import {
  getContactsController,
  getContactController,
  postContactController,
  deleteContactController,
} from '../controllers';

const router = Router();

router.get('/contacts', getContactsController);
router.get('/contact/:id', getContactController);
router.post('/contacts', postContactController);
router.delete('/contacts/:id', deleteContactController);

export default router;
