import React, {Component} from "react"
import {DateTime} from "luxon"
import css from "./ZoneSelector.module.css"
import {TIMEZONES_WITH_COMMENTS} from '../TimeRightNow/TIMEZONES_WITH_COMMENTS'

class ZoneSelector extends Component {
  constructor (props) {
    super(props)
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleOriginSelectChange = this.handleOriginSelectChange.bind(this)
    this.state = {
      selectOptions: TIMEZONES_WITH_COMMENTS,
      selectedMainTimezone: this.props.timeZone
    }
  }
  
  handleOriginSelectChange (event) {
    const iANATimeZone = event.target.value
    this.props.changeZone(iANATimeZone)
    this.setState({selectedMainTimezone: iANATimeZone})
  }
  
  handleTextInput (event) {
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
    this.props.changeZone(iANATimeZone)
    this.setState({
      selectOptions: timeZoneOptions,
      selectedMainTimezone: iANATimeZone
    })
  }
  
  render () {
    const options = this.state.selectOptions.map((timezone) =>
      <option key={timezone.TZ}>{timezone.TZ}</option>
    )
    
    return (
      <section className={css.mainContainer}>
        <div className={css.inputContainer}>
          <input 
            className="timeZoneInput" 
            onChange={this.handleTextInput} />
        </div>
        <select 
          value={this.state.selectedMainTimezone} 
          onChange={this.handleOriginSelectChange} 
          name="timezones"
          className="timeZoneSelect">
          {options}
        </select>
      </section>
    )
  }
}

export default ZoneSelector