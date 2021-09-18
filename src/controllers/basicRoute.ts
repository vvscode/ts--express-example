import express from 'express';
import '../types';

const basicRouter = express.Router();

basicRouter.get("/", (req, res) => {
  res.status(200).render("index", { title: "My Template", message: "Hello, Otus!" });
});

basicRouter.post("/users/:id", (req, res) => {
  console.log(req.body);
  if (req.params.id === '777') {
    req.session.isAdmin = true;
  } else {
    req.session.isAdmin = false;
  }
  res.status(200).end();
})

basicRouter.get("/users/:id", (req, res) => {
  console.log(req.session.isAdmin)
  if (req.session.isAdmin) {
    res.status(200).send('You are admin!');
  } else {
    res.status(403).send('You are not admin!');
  }
});



export default basicRouter;
