import React, {Component} from "react"
import css from "./Dst.module.css"
import {DateTime, Interval} from "luxon"

class Dst extends Component {
  constructor (props) {
    super(props)
    this.dateNowFormat = "ccc d LLL y"
    this.dstChangeDetection = this.dstChangeDetection.bind(this)
    this.leapYearMsg = this.leapYearMsg.bind(this)
    this.state = {}
  }
  
  dstChangeDetection (dstYear, dstChangeTimeZone) {
    const startOfYearDate = DateTime.fromObject({ 
      year: dstYear, month: 1, day: 1,
      hour: 0, minute: 0, second: 0, zone: dstChangeTimeZone })
    
    const endOfYearDate = DateTime.fromObject({ 
      year: dstYear, month: 12, day: 31,
      hour: 23, minute: 59, second: 59, zone: dstChangeTimeZone })
    
    const daysInYear = Interval.fromDateTimes(
      startOfYearDate.startOf("day"), 
      endOfYearDate.endOf("day"))
    .splitBy({days: 1}).map(d => d.start)
    
    const dstStatuses = []
    
    const dstChangeDates = []
    
    daysInYear.forEach(function (day) {
      if (day.isInDST === true) {
        dstStatuses.push("In DST")
      } 
      if (day.isInDST === false) {
        dstStatuses.push("Not In DST")
      }
    })
    
    for (var i = 0; i < dstStatuses.length; i++) {
      if (dstStatuses[i + 1]) {
        if (
          (dstStatuses[i] === "In DST" && dstStatuses[i + 1] === "Not In DST") ||
          (dstStatuses[i] === "Not In DST" && dstStatuses[i + 1] === "In DST")
        ) {
          dstChangeDates.push(daysInYear[i].toFormat(this.dateNowFormat))
        }
      }
    }
    
    const dstChangeDatesJoined = dstChangeDates.join(' and ')
    
    let finalMessage
    
    if (dstChangeDates.length === 0) {
      finalMessage = ``
    } 
    
    if (dstChangeDates.length > 0) {
      finalMessage = `DST changes on (approx.): ${dstChangeDatesJoined} in ${dstChangeTimeZone}.`
    }
    
    return finalMessage
  }
  
  leapYearMsg (time) {
    if (time.isInLeapYear) {
      return `February this year has 29 days.`
    } else {
      return `February this year has 28 days.`
    }
  }
  
  render () {
    return (
      <section className={css.mainTimeGroup}>
        <div>
          <div>
            {this.leapYearMsg(this.props.timeNow)}
          </div>
          <div>
            {this.dstChangeDetection(this.props.timeNow.year, this.props.timeZone)}
          </div>
        </div>
      </section>
    )
  }
}

export default Dst