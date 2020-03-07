import React, {Component} from "react"
import {DateTime} from "luxon"
import css from "./ZoneSelector.module.css"
import {TIMEZONES_WITH_COMMENTS} from '../TimeRightNow/TIMEZONES_WITH_COMMENTS'

class ZoneSelector extends Component {
  constructor (props) {
    super(props)
    this.role = props.role
    this.handleOriginTextInput = this.handleOriginTextInput.bind(this)
    this.handleOriginSelectChange = this.handleOriginSelectChange.bind(this)
    this.handleTargetTextInput = this.handleTargetTextInput.bind(this)
    this.handleTargetSelectChange = this.handleTargetSelectChange.bind(this)
    this.state = {
      originSelectOptions: this.props.originSelectOptions,
      targetSelectOptions: this.props.targetSelectOptions,
      selectedOriginTimezone: this.props.originTimeZone,
      selectedTargetTimezone: this.props.targetTimeZone
    }
  }
  
  handleOriginSelectChange (event) {
    const iANATimeZone = event.target.value
    this.props.changeOriginZone(iANATimeZone, this.state.originSelectOptions)
    this.setState({selectedOriginTimezone: iANATimeZone})
  }
  
  handleOriginTextInput (event) {
    let timeZoneOptions = []
    TIMEZONES_WITH_COMMENTS.forEach(function (timeZone, index) {
      const timeZoneFromData = timeZone.TZ.toLowerCase().trim()
      const inputText = event.target.value.toLowerCase().trim()
      if (timeZoneFromData.indexOf(inputText) !== -1) {
        timeZoneOptions.push(timeZone)
      }
    })
    if (timeZoneOptions.length === 0) {
      timeZoneOptions = TIMEZONES_WITH_COMMENTS
    }
    const iANATimeZone = timeZoneOptions[0].TZ
    this.props.changeOriginZone(iANATimeZone, timeZoneOptions)
    this.setState({
      originSelectOptions: timeZoneOptions,
      selectedOriginTimezone: iANATimeZone
    })
  }
  
  handleTargetSelectChange (event) {
    const iANATimeZone = event.target.value
    this.props.changeTargetZone(iANATimeZone, this.state.targetSelectOptions)
    this.setState({selectedTargetTimezone: iANATimeZone})
  }
  
  handleTargetTextInput (event) {
    let timeZoneOptions = []
    TIMEZONES_WITH_COMMENTS.forEach(function (timeZone, index) {
      const timeZoneFromData = timeZone.TZ.toLowerCase().trim()
      const inputText = event.target.value.toLowerCase().trim()
      if (timeZoneFromData.indexOf(inputText) !== -1) {
        timeZoneOptions.push(timeZone)
      }
    })
    if (timeZoneOptions.length === 0) {
      timeZoneOptions = TIMEZONES_WITH_COMMENTS
    }
    const iANATimeZone = timeZoneOptions[0].TZ
    this.props.changeTargetZone(iANATimeZone, timeZoneOptions)
    this.setState({
      targetSelectOptions: timeZoneOptions,
      selectedTargetTimezone: iANATimeZone
    })
  }
  
  render () {
    let inputs
    
    if (this.role === 'Origin') {
      const originOptions = this.props.originSelectOptions.map((timezone) =>
        <option key={timezone.TZ}>{timezone.TZ}</option>
      )
      
      inputs = (
        <div>
          <div className={css.inputContainer}>
            <input 
              className="timeZoneInput" 
              onChange={this.handleOriginTextInput} />
          </div>
          <select 
            value={this.props.originTimeZone} 
            onChange={this.handleOriginSelectChange} 
            name="originTimeZones"
            className="timeZoneSelect">
            {originOptions}
          </select>
        </div>
      )
    }
    
    if (this.role === 'Target') {
      const targetOptions = this.props.targetSelectOptions.map((timezone) =>
        <option key={timezone.TZ}>{timezone.TZ}</option>
      )
      
      inputs = (
        <div>
          <div className={css.inputContainer}>
            <input 
              className="timeZoneInput" 
              onChange={this.handleTargetTextInput} />
          </div>
          <select 
            value={this.props.targetTimeZone} 
            onChange={this.handleTargetSelectChange} 
            name="targetTimeZones"
            className="timeZoneSelect">
            {targetOptions}
          </select>
        </div>
      )
    } 
    
    return (
      <section className={css.mainContainer}>
        {inputs}
      </section>
    )
  }
}

export default ZoneSelector