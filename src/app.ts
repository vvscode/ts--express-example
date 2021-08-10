import express from  'express';
import {json}  from 'body-parser';
import session from 'express-session';

import './types'

export const app = express();

app.use(json({}));

app.use(session({
  secret:'Some secret here'
}));

let count = 0;

app.get('/', (req, res) => {
  res.send(`Hello World!`)
});

app.post('/json', (req, res) => {
  count += req.body.value;
  res.send({
    count
  });
});

app.post('/personal_json', (req, res) => {
  req.session.counter = req.session.counter || 0;
  const {value} = req.body;
  if (value) {
    req.session.counter += value;
  }
  res.send({
    count: req.session.counter
  });
});
