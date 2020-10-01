'use strict'

const fs = require('fs');
const countries = {};
fs.readFile('big-mac-index.csv', 'utf8', function (err, data) {
  var dataArray = data.split(/\r?\n/);
  processData(dataArray);
});


function processData(dataArray) {
    dataArray.shift();
    dataArray.forEach(entry => {
        const properties = entry.split(',');
        console.log(properties.length);
        //console.log(properties);
        const country = properties[0];
        //const date = properties[1];
        console.table(country);
    })
}