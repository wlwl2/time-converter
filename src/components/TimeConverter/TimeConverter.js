// import PropTypes from "prop-types"
import React, {Component} from "react"
import css from "./TimeConverter.module.css"
import {DateTime} from "luxon"
import LocalTime from './LocalTime'
import ConvertedTime from './ConvertedTime'
import DatePickerGroup from './DatePickerGroup'
import ZoneSelector from './ZoneSelector'
import {TIMEZONES_WITH_COMMENTS} from '../TimeRightNow/TIMEZONES_WITH_COMMENTS'

const initialTimeZone = DateTime.local().zone.name
const initialTime = Date.now()

const windowGlobal = typeof window !== 'undefined' && window

let storedOriginTimeZone = windowGlobal.localStorage.getItem('timeConverter-originTimeZone')
if (!storedOriginTimeZone) {
  windowGlobal.localStorage.setItem('timeConverter-originTimeZone', initialTimeZone)
  storedOriginTimeZone = initialTimeZone
}

let storedTargetTimeZone = windowGlobal.localStorage.getItem('timeConverter-targetTimeZone')
if (!storedTargetTimeZone) {
  windowGlobal.localStorage.setItem('timeConverter-targetTimeZone', initialTimeZone)
  storedTargetTimeZone = initialTimeZone
}

let storedOriginTime = Number(windowGlobal.localStorage.getItem('timeConverter-originTime'))
if (!storedOriginTime) {
  windowGlobal.localStorage.setItem('timeConverter-originTime', initialTime.toString())
  storedOriginTime = initialTime
}

class TimeConverter extends Component {
  constructor (props) {
    super(props)
    this.localZoneName = DateTime.local().zone.name
    this.changeOriginTimeZone = this.changeOriginTimeZone.bind(this)
    this.changeTargetTimeZone = this.changeTargetTimeZone.bind(this)
    this.changeOriginTime = this.changeOriginTime.bind(this)
    this.resetTime = this.resetTime.bind(this)
    this.state = {
      localTimeNow: DateTime.local().setZone(this.localZoneName),
      originTimeZone: storedOriginTimeZone,
      targetTimeZone: storedTargetTimeZone,
      originTime: storedOriginTime,
      originSelectOptions: TIMEZONES_WITH_COMMENTS,
      targetSelectOptions: TIMEZONES_WITH_COMMENTS
    }
  }

  changeOriginTime (newTime) {
    windowGlobal.localStorage.setItem('timeConverter-originTime', newTime.toString())
    this.setState({originTime: newTime})
  }
  
  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    this.setState({localTimeNow: DateTime.local().setZone(this.localZoneName)})
  }
  
  changeOriginTimeZone (timeZoneName, timeZoneOptions) {
    windowGlobal.localStorage.setItem('timeConverter-originTimeZone', timeZoneName)
    this.setState({
      originTimeZone: timeZoneName,
      originSelectOptions: timeZoneOptions
    })
  }
  
  changeTargetTimeZone (timeZoneName, timeZoneOptions) {
    windowGlobal.localStorage.setItem('timeConverter-targetTimeZone', timeZoneName)
    this.setState({
      targetTimeZone: timeZoneName,
      targetSelectOptions: timeZoneOptions
    })
  }
  
  resetTime () {
    const textInputs = document.querySelectorAll('.timeZoneInput')
    textInputs.forEach(input => input.value = '')
    const localTimeZone = DateTime.local().zone.name
    const localTimeNow = Date.now()
    windowGlobal.localStorage.setItem('timeConverter-originTimeZone', localTimeZone)
    windowGlobal.localStorage.setItem('timeConverter-originTime', localTimeNow.toString())
    windowGlobal.localStorage.setItem('timeConverter-targetTimeZone', localTimeZone)
    this.setState({
      originTimeZone: localTimeZone,
      targetTimeZone: localTimeZone,
      originTime: localTimeNow,
      originSelectOptions: TIMEZONES_WITH_COMMENTS,
      targetSelectOptions: TIMEZONES_WITH_COMMENTS
    })
  }
  
  render () {
    return (
      <div>
        <LocalTime 
          originTimeZone={this.localZoneName} 
          timeNow={this.state.localTimeNow} />
        
        <section className={css.timeConverter}>
          <div className={css.timeGroup}>
            <div className={css.title}>Origin</div>
            <ZoneSelector
              role="Origin"
              originTimeZone={this.state.originTimeZone}
              changeOriginZone={this.changeOriginTimeZone}
              originSelectOptions={this.state.originSelectOptions}
              />
            <div className={css.datepickerContainer}>
              <DatePickerGroup 
                originTime={this.state.originTime}
                changeOriginTime={this.changeOriginTime}
                />
            </div>
            <div>
              <button
                className={css.resetButton}
                onClick={this.resetTime}>
                Reset Time
              </button>
            </div>
          </div>
          
          <div className={css.timeGroup}>
            <div className={css.title}>Result</div>
            <ZoneSelector 
              role="Target"
              targetTimeZone={this.state.targetTimeZone}
              changeTargetZone={this.changeTargetTimeZone}
              targetSelectOptions={this.state.targetSelectOptions}
              />
            <ConvertedTime 
              originTimeZone={this.state.originTimeZone} 
              targetTimeZone={this.state.targetTimeZone} 
              timeNow={this.state.originTime}
              />
          </div>
          
        </section>
      </div>
    )
  }
}

export default TimeConverter
