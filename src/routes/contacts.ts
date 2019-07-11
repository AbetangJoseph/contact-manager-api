import { Router } from 'express'
import { getContactsController } from '../controllers'

const router = Router()

router.get('/contacts', getContactsController)

export default router
