const functions = require("firebase-functions");
module.exports = functions.https.onRequest((request, response) => {
    var obj = {
        title : "Hung",
        value : "test"
    }
  response.send(files)
});
