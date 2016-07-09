var properties = require('properties');

module.exports = function(options) {

  /**
   * Load application properties stored in application.properties. On success,
   * pass these loaded properties as a key/value object to the 'success' function
   * provided. Otherwise, log an error (the success callback is not called).
   */
  var load_properties = function (success) {
    properties.parse('application.properties', {path: true}, function (error, result) {
      if (error) {
        return console.error(error);
      }
      success(result);
    });
  }

  return {
    load_properties: load_properties
  }
}
