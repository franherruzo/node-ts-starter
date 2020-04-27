import { App } from '../src/Server';

describe('App', () => {
  it('should return hey!', () => {
    const app = App();

    expect(app).toBe('Hey!');
  });
});
