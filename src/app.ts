import express from "express";
import basicRouter from "./controllers/basicRoute";
import session from "express-session"; 

const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(express.json());
// Подключение
app.use(
  session({
    secret: "sfajnh4faAN99", // обязательное поле
    cookie: { maxAge: oneDay },
    resave: false,
    saveUninitialized: false,
  })
);

app.set("views", "./views");
app.set("view engine", "pug");
// app.use(requestLogger);

app.use(express.static('public'));

app.use('/', basicRouter);

export default app;