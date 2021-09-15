import express from "express";
import { resolve } from 'path';

const app = express();
const port = 8001;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index", { title: "My Template", message: "Hello, Otus!" });
});

app.get("*", (req, res) => {
  res.render("404", { title: "My Template", message: "Hello, Otus!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});