const functions = require("firebase-functions");
module.exports = functions.https.onRequest((request, response) => {
    console.log("Test Function")
  response.send("test")
});
