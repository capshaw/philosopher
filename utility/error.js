 module.exports.serverError = function (message, res) {

   // TODO: better logging format
   console.error(err);

   res.status(500).send({
     'message': 'There was a server error, please try again.'
   });

   return;
 }
