 module.exports.serverError = (message) => {
   console.error(message);

   return {
     message: 'There was a server error, please try again.',
   };
 };
