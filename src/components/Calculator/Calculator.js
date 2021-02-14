// import PropTypes from "prop-types"
import React, {Component} from "react"
import css from "./Calculator.module.css"
import { DateTime } from "luxon"
import LocalTime from './LocalTime'
import ConvertedTime from './ConvertedTime'
import DatePickerGroup from './DatePickerGroup'
import ZoneSelector from './ZoneSelector'

const initialTimeZone = DateTime.local().zone.name
const initialTime = Date.now()

class TimeConverter extends Component {
  constructor (props) {
    super(props)
    this.localZoneName = DateTime.local().zone.name
    this.changeTimeZone = this.changeTimeZone.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.resetTime = this.resetTime.bind(this)
    this.state = {
      localTimeNow: DateTime.local().setZone(initialTimeZone),
      timeZone: initialTimeZone,
      originTime: initialTime
    }
  }

  componentDidMount () {
    this.storedTimeZone = window.localStorage.getItem('calculator-timeZone')
    if (!this.storedTimeZone) {
      window.localStorage.setItem('calculator-timeZone', initialTimeZone)
      this.storedTimeZone = initialTimeZone
    }
    
    this.storedOriginTime = Number(window.localStorage.getItem('calculator-originTime'))
    if (!this.storedOriginTime) {
      window.localStorage.setItem('calculator-originTime', initialTime.toString())
      this.storedOriginTime = initialTime
    }
    
    this.setState({
      localTimeNow: DateTime.local().setZone(this.localZoneName),
      timeZone: this.storedTimeZone,
      originTime: this.storedOriginTime
    })
    
    this.timerID = setInterval(() => this.tick(), 500)
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    this.setState({localTimeNow: DateTime.local().setZone(this.localZoneName)})
  }
  
  changeTimeZone (timeZoneName) {
    window.localStorage.setItem('calculator-timeZone', timeZoneName)
    this.setState({timeZone: timeZoneName})
  }
  
  changeTime (newTime) {
    window.localStorage.setItem('calculator-originTime', newTime.toString())
    this.setState({originTime: newTime})
  }
  
  resetTime () {
    window.localStorage.setItem('calculator-originTime', Date.now().toString())
    this.setState({originTime: Date.now()})
  }
  
  render () {
    return (
      <div>
        
        <LocalTime 
          timeZone={this.localZoneName} 
          timeNow={this.state.localTimeNow} />
        
        <section className={css.timeConverter}>
          <div className={css.timeGroup}>
            <div className={css.title}>Origin</div>
            <ZoneSelector 
              timeZone={this.state.timeZone}
              changeZone={this.changeTimeZone}
              />
            <div className={css.datepickerContainer}>
              <DatePickerGroup 
                origin={this.state.originTime}
                changeTime={this.changeTime}
                />
            </div>
            <ConvertedTime 
              timeZone={this.state.timeZone} 
              />
            <div>
              <button
                className={css.resetButton}
                onClick={this.resetTime}>
                Reset Time
              </button>
            </div>
          </div>
          
          <div className={css.timeGroup}>
            <div className={css.title}>Target</div>
            <ZoneSelector 
              timeZone={this.state.timeZone}
              changeZone={this.changeTimeZone}
              />
            <div className={css.datepickerContainer}>
              <DatePickerGroup 
                origin={this.state.originTime}
                changeTime={this.changeTime}
                />
            </div>
            <ConvertedTime 
              timeZone={this.state.timeZone} 
              />
            <div>
              <button
                className={css.resetButton}
                onClick={this.resetTime}>
                Reset Time
              </button>
            </div>
          </div>
          
          <section className={css.timeDifference}>
            <div>
              (Years Months Days Hours Minutes difference)
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default TimeConverter
