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
        const [country,date,localPrice,ex,dollarPrice,ppp,valuation]= entry.split(',');
        countries[country] = {
          country,
          date,
          localPrice,
          ex,
          dollarPrice,
          ppp,
          valuation
        }
    })
    console.log(Object.keys(countries).length, 'countries in total');
    console.log(Object.keys(countries));
    console.warn("Data for United States:")
    console.warn("-----------------------")
    console.table(countries["United States"]);
}