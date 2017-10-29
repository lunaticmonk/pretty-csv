#!/usr/bin/env node
'use strict';

const fs = require('fs');
const file = fs.readFileSync(process.argv[2]).toString();

const rowArray = file.split('\n');
let maxLengthOfCharacter = 0;

rowArray.forEach((row) => {
  let eachrow = '';
  let columnArray = row.split(',');
  findMaxLengthString();

  // Loop over each entry in column to add to form a row string
  columnArray.forEach((item) => {
    eachrow += '|' + item;
    eachrow = eachrow + Array(maxLengthOfCharacter-item.length).join(" ");
  });

  // printing the row
  console.log(eachrow);
  console.log(Array(columnArray.length * maxLengthOfCharacter).join("-"));
});

function findMaxLengthString() {
  rowArray.forEach((row) => {
    row.split(',').forEach((item) => {
      if (item.length > maxLengthOfCharacter) {
        maxLengthOfCharacter = item.length + 1;
      }
    });
  });
}
