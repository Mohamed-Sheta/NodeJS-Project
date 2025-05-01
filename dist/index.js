"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const registerroot_1 = require("./routes/registerroot");
const loginroute_1 = require("./routes/loginroute");
const profileroute_1 = require("./routes/profileroute");
const homerouter_1 = require("./routes/homerouter");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'Yarab_N3dy_El_Web',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));
// Routes
app.use('/', homerouter_1.homeRouter);
app.use('/', registerroot_1.registerRouter);
app.use('/', loginroute_1.loginRouter);
app.use('/', profileroute_1.profileRouter);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
