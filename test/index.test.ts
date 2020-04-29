import { App } from '../src';

describe('App', () => {
  it('should return hey!', () => {
    const app = App();

    expect(app).toBe('Hey!');
  });
});
