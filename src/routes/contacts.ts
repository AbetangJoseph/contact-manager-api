import { Router } from 'express'
import {
  getContactsController,
  getContactController,
  postContactController,
} from '../controllers'

const router = Router()

router.get('/contacts', getContactsController)
router.get('/contact/:id', getContactController)
router.post('/contacts', postContactController)

export default router
