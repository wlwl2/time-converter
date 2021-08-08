// Get the extracted data from "./zone1970.txt" (tz-and-comments-only-raw.js)
// Then join this data with US custom time zones.

const fs = require('fs')

fs.readFile('../tz-and-comments-only-raw.js', (err, data) => {
  if (err) throw err
  const allData = data.toString()
  const allTimezones = JSON.parse(allData)
  const usCustomZones = [
    {"TZ":"US_PT_Pacific_Time_Ctm","comments":"America/Los_Angeles"},
    {"TZ":"US_MT_Mountain_Time_Ctm","comments":"America/Edmonton"},
    {"TZ":"US_CT_Central_Time_Ctm","comments":"America/Monterrey"},
    {"TZ":"US_ET_Eastern_Time_Ctm","comments":"America/New_York"},
    {"TZ":"US_Alaska_Ctm","comments":"America/Anchorage"},
    {"TZ":"US_Aleutian_Islands_Ctm","comments":"America/Adak"},
    {"TZ":"US_Hawaii_Ctm","comments":"Pacific/Honolulu"},
    {"TZ":"US_Samoa_Ctm","comments":"Pacific/Pago_Pago"},
    {"TZ":"US_Guam_Ctm","comments":"Pacific/Guam"}
  ]
  const combined = allTimezones.concat(usCustomZones)
  
  fs.writeFile('combined-us-time.js', JSON.stringify(combined), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})