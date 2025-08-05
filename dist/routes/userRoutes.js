"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = require("../controllers/usercontroller");
const router = (0, express_1.Router)();
router.get('/', usercontroller_1.getUsers);
router.post('/', usercontroller_1.createUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map