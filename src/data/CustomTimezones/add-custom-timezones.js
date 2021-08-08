// Get the extracted data from "./zone1970.txt" (tz-and-comments-only-raw.js)
// Then join this data with US custom time zones.

const fs = require('fs')

fs.readFile('../tz-and-comments-only-raw.js', (err, data) => {
  if (err) throw err
  const allData = data.toString()
  const allTimezones = JSON.parse(allData)
  console.log(allTimezones);
  const usCustomZones = [
    {"TZ":"","comments":"US PT Pacific Time (C)"},
    {"TZ":"","comments":"US MT Mountain Time (C)"},
    {"TZ":"","comments":"US CT Central Time (C)"},
    {"TZ":"","comments":"US ET Eastern Time (C)"},
    {"TZ":"","comments":"US Alaska (C)"},
    {"TZ":"","comments":"US Aleutian Islands (C)"},
    {"TZ":"","comments":"US Hawaii (C)"},
    {"TZ":"","comments":"US Samoa (C)"},
    {"TZ":"","comments":"US Guam (C)"}
  ]
  
  // fs.writeFile('tz-and-comments-only-raw.js', 
  // JSON.stringify(timeZones, null, 2), (err) => {
  //   if (err) throw err
  //   console.log('The file has been saved!')
  // })
})