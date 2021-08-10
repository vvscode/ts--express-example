import request from 'supertest';

import { app } from './app';

describe('app', () => {
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
});