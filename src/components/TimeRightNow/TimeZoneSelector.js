import React from "react"
import css from "./TimeZoneSelector.module.css"
import {TIMEZONES_WITH_COMMENTS} from './TIMEZONES_WITH_COMMENTS'

function TimeZoneSelector (props) {
  // let strArray = []
  // 
  // TIMEZONES_WITH_COMMENTS.forEach(function (timezone, index) {
  //   strArray.push(timezone.TZ)
  // })
  // https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
  // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  // 
  // console.log(findDuplicates(strArray)) // All duplicates
  // console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates
  
  const options = TIMEZONES_WITH_COMMENTS.map((timezone) =>
    <option key={timezone.TZ}>{timezone.TZ}</option>
  )
  
  return (
    <section className={css.section}>
      <select name="timezones">
        {options}
      </select>
    </section>
  );
}

export default TimeZoneSelector