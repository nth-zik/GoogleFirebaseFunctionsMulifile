let fs = require('fs');
let path = require('path');
const camelCase = require('camelcase');
module.exports = function (listDir) {
    let exArray = []
    for (let index in listDir) {
        let files = fs.readdirSync(path.resolve(listDir[index]));
        for (let key in files) {
            exArray[camelCase(files[key].replace(".js", ""))] = require(path.resolve(listDir[index]) + "/" + files[key])
        }
    }
    return exArray
}