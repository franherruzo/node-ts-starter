import request from 'supertest';
import httpStatus from 'http-status';
import { Application } from '../../../../src/apps/api/infrastructure/http/Application';

describe('App test', () => {
  let app: Application;

  beforeAll(async () => {
    app = new Application();
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });

  it('should launch the http server', async () => {
    const res = await request(app.httpServer).get('/api');

    expect(res.status).toEqual(httpStatus.OK);
  });
});
