"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET users listing. */
router.get('/', function (_req, res) {
    res.send('respond with a resource');
});
router.get('/home', (_req, res) => {
    res.send('this is users home page');
});
exports.default = router;
//# sourceMappingURL=users.js.map