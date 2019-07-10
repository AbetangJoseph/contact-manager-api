"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
router.get('/', function (_req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/home', (_req, res) => {
    res.status(200).json({ message: 'All is well, home for index' });
});
exports.default = router;
//# sourceMappingURL=index.js.map