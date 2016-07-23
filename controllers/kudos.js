module.exports = (app) => {
  app.get('/kudos/:kudosId', (req, res) => {
    res.send({
      hello: 'world',
    });
  });

  app.post('/kudos', (req, res) => {
    res.send({
      hello: 'world',
    });
  });

  app.get('/feed/?:page?/?', (req, res) => {
    res.send({
      hello: 'world',
    });
  });
};
