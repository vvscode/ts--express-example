import express from 'express';

const basicRouter = express.Router();

basicRouter.get("/", (req, res) => {
  res.status(200).render("index", { title: "My Template", message: "Hello, Otus!" });
});

basicRouter.get("*", (req, res) => {
  res.status(404).render("404", { title: "My Template", message: "404. Not Found." });
});

export default basicRouter;
