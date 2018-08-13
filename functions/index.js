const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const listDir = ['tv', 'film']
var init = require('./utils/ReadDir')
module.exports = init(listDir)