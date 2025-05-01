"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateuser = void 0;
const express_validator_1 = require("express-validator");
const validateuser = () => {
    return [
        (0, express_validator_1.check)('username').notEmpty().withMessage("Username shouldn't be empty")
            .isLength({ min: 5, max: 20 }).withMessage("Username must be between 5 and 20 charchter"),
        (0, express_validator_1.check)('email').isEmail().withMessage("Email isn't valid"),
        (0, express_validator_1.check)('password').notEmpty().withMessage("Password shouldn't be empty")
    ];
};
exports.validateuser = validateuser;
