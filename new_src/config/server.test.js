import server from './server';

describe('server', () => {
  const app = server(8080);

  it('responde na porta 8080', () => {
    expect(app.address().port).toBe(8080);
    app.close();
  });
});
