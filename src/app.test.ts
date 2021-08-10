// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import MockDate from 'mockdate'


import { app } from './app';

describe('app', () => {
  beforeEach(() => {
    MockDate.set(new Date(2009, 1, 1))
  });
  afterEach(() => {
    MockDate.reset();
  });
    
  it('sends "Hello World" for get /', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end(done);
  });

  it('calculates sum from  /personal_json', async () => {
    const appRequest = request(app);
    let cookies;

    await appRequest.post('/personal_json')
    .send({
      value: 5
    })
    .expect(200, '{"count":5}')
    .then((res) => {
      cookies = res.headers["set-cookie"]
    });

    await appRequest.post('/personal_json')
    .set('Cookie', cookies)
    .send({
      value: 5
    })
    .expect(200, '{"count":10}');

    await appRequest.post('/personal_json')
    .set('Cookie', cookies)
    .send({
      value: 6
    })
    .expect(200, '{"count":16}');
  });

  it('renders today in html page', async () => {
    await request(app)
    .get('/today')
    .then((req) => {
      const todayText = '<h1>Today is 2/1/2009</h1>'
      if(!req.text.includes(todayText)) {
        throw new Error(`No "${todayText}" in "${req.text}"`);
      }
    });

  });
});