/*
Name: Luis Morales
Date: Friday 30, 2023
*/
const fs = require('fs');

class CvsToJson {
  parseCvsToJson(input, output) {
    let csvFile = fs.readFileSync(input);

    const array = csvFile.toString().split('\r');

    let result = [];
    let headers = array[0].split(", ");

    for (let i = 1; i < array.length - 1; i++) {
      let objectData = {};

      let currentArrayValue = array[i];
      let newString = '';

      let flag = 0;
      for (let character of currentArrayValue) {
        if (character === '"' && flag === 0) {
          flag = 1;
        } else if (character === '"' && flag == 1) flag = 0;
        if (character === ", " && flag === 0) character = "|";
        if (character !== '"') newString += character;
      }

      let properties = newString.split('|');

      for (let header in headers) {
        if (properties[header].includes(', ')) {
          objectData[headers[header]] = properties[header]
            .split(', ')
            .map((item) => item.trim());
        } else objectData[headers[header]] = properties[header];
      }

      result.push(objectData);
    }

    let json = JSON.stringify(result);
    fs.writeFileSync(output, json);
  }
}

module.exports = CvsToJson;
