import express from "express";
import basicRouter from "./controllers/basicRoute";
import session from "express-session"; 
import booksRouter from "./controllers/booksRoute";

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

app.use('/api/books', booksRouter);
app.use('/', basicRouter);
app.get("*", (req, res) => {
  res.status(404).render("404", { title: "My Template", message: "404. Not Found." });
});

export default app;