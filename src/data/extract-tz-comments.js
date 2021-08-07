// Extract TZ and comments columns from "./zone1970.txt"

const fs = require('fs')

fs.readFile('zone1970.txt', (err, data) => {
  if (err) throw err
  const allData = data.toString()
  const allTimezoneRows = allData.split(/[\r\n]+/)
  let timeZones = []
  allTimezoneRows.forEach(function (timezoneRow, index) {
    const columns = timezoneRow.split(/\s+/)
    const TZvalue = columns[2]
    const TZvalueLength = TZvalue.length
    const cutoffPoint = timezoneRow.indexOf(columns[2]) + TZvalueLength
    const commentsValue = timezoneRow.substring(cutoffPoint).trim()
    let timezone = {}
    timezone.TZ = TZvalue
    timezone.comments = commentsValue
    timeZones.push(timezone)
  })
  
  fs.writeFile('tz-and-comments-only-raw.js', 
  JSON.stringify(timeZones, null, 2), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})