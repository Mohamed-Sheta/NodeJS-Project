"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }
    toJSON() {
        return {
            username: this.username,
            email: this.email,
            password: this.password
        };
    }
}
exports.User = User;
User.count = 0;
