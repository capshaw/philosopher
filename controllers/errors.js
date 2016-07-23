module.exports = (app) => {
  app.get('*', (req, res) => {
    res.status(404).send({
      error: 'The requested resource does not exist.',
      url: req.url,
    });
  });
};
