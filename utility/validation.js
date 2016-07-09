/**
 * Given a list of field names, check if the request has those fields using
 * express-validator. Write an error request if those fields are not present.
 * Returns true if there are errors, false otherwise.
 */
 module.exports.requireBodyParameters = function (fields, req, res) {

  for (var i = 0, len = fields.length; i < len; i++) {
    var message = 'The field \'' + fields[i] + '\' is required.';
    req.checkBody(fields[i], message).notEmpty();
  }

  var errors = req.validationErrors();
  if (errors) {
    res.status(400).send({
        'message': 'There was at least one error with your request',
        'errors': errors
    });
    return true;
  }

  return false;
}
