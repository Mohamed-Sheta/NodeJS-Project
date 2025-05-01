import express from 'express';
import path from 'path';
import session from 'express-session';
import { registerRouter } from './routes/registerroot';
import { loginRouter } from './routes/loginroute';
import { profileRouter } from './routes/profileroute';
import { homeRouter } from './routes/homerouter';

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'Yarab_N3dy_El_Web',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 60000 
    }
}));
// declare session
declare module 'express-session' {
    interface SessionData {
        user?: {
            username: string;
            email: string;
        };
    }
}
// Routes
app.use('/', homeRouter);
app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', profileRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});