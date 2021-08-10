import request from 'supertest';

import { app } from './app';

describe('app', () => {
  it('sends "Hello World" for get /', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello World!')
      .end(done);
  });
});