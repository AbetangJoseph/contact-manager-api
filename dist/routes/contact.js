'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const router = express_1.Router()
router.get('/contacts', (_req, res) => {
  res.status(200).json({ message: 'all contacts here!' })
})
exports.default = router
//# sourceMappingURL=contact.js.map
