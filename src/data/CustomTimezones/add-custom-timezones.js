// Get the extracted data from "./zone1970.txt" (tz-and-comments-only-raw.js)
// Then join this data with US custom time zones.

const fs = require('fs')

fs.readFile('../tz-and-comments-only-raw.js', (err, data) => {
  if (err) throw err
  const allData = data.toString()
  const allTimezones = JSON.parse(allData)
  const usCustomZones = [
    {"TZ":"US PT Pacific Time (C)","comments":"America/Los_Angeles"},
    {"TZ":"US MT Mountain Time (C)","comments":"America/Edmonton"},
    {"TZ":"US CT Central Time (C)","comments":"America/Monterrey"},
    {"TZ":"US ET Eastern Time (C)","comments":"America/New_York"},
    {"TZ":"US Alaska (C)","comments":"America/Anchorage"},
    {"TZ":"US Aleutian Islands (C)","comments":"America/Adak"},
    {"TZ":"US Hawaii (C)","comments":"Pacific/Honolulu"},
    {"TZ":"US Samoa (C)","comments":"Pacific/Pago_Pago"},
    {"TZ":"US Guam Chamorro (C)","comments":"Pacific/Guam"},
    {"TZ":"US Puerto Rico Virgin Islands (C)","comments":"America/Puerto_Rico"}
  ]
  const combined = allTimezones.concat(usCustomZones)
  
  fs.writeFile('combined-us-time.js', JSON.stringify(combined), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})