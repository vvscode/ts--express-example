import express from  'express';
import {json}  from 'body-parser';

export const app = express();

app.use(json({}));

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
