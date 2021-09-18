import request from 'supertest';
import app from './app';

describe('GET /', function() {
  it('responds with html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).toMatch(/Otus!/)
        return done();
      });
  });
});

describe('GET /404', function() {
  it('responds with html', function(done) {
    request(app)
      .get('/404')
      .expect('Content-Type', /html/)
      .expect(404, done);
  });
});

