import express from "express";
import basicRouter from "./controllers/basicRoute";

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));

app.use('/', basicRouter);

export default app;