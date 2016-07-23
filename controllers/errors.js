module.exports = (app) => {
  app.get('*', (req, res) => {
    res.status(404).send({
      error: 'The requested resource does not exist.',
      url: req.url,
    });
  });

  app.post('*', (req, res) => {
    res.status(404).send({
      error: 'The requested resource does not exist.',
      url: req.url,
    });
  });

  app.delete('*', (req, res) => {
    res.status(404).send({
      error: 'The requested resource does not exist.',
      url: req.url,
    });
  });

  app.put('*', (req, res) => {
    res.status(404).send({
      error: 'The requested resource does not exist.',
      url: req.url,
    });
  });
};
