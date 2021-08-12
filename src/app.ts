import express from  'express';
import {json}  from 'body-parser';
import session from 'express-session';

import './types'

///
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(':memory:');
db.run('CREATE TABLE visitors (ts INTEGER, agent TEXT)');
// 


export const app = express();

app.set('views', `${__dirname }/views`)
app.set('view engine', 'ejs')

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

app.get('/today', (req, res) => {
  res.render('today', { today: new Date().toLocaleDateString() });
});

app.get('/dbcounter', (req, res) => {
  db.run(`INSERT INTO visitors (ts, agent) 
          VALUES  (?, ?)`, 
          [Date.now() / 1000, req.headers['user-agent'] || 'Unknown'], 
          (insertError) => {
    if (insertError) {
      res.status(404);
      res.send({ status: 'error', err: insertError });
      return;
    }

    db.get(`SELECT COUNT(*) AS count FROM visitors`, (selectCountError, row) => {
      if (selectCountError) {
        res.status(404);
        res.send({ status: 'error', err: selectCountError });
        return;
      }
      res.send({ status: 'ok', count: row.count });
    });

  });
});