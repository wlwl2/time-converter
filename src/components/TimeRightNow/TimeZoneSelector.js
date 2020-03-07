import React, {Component} from "react"
import {DateTime} from "luxon"
import css from "./TimeZoneSelector.module.css"
import {TIMEZONES_WITH_COMMENTS} from './TIMEZONES_WITH_COMMENTS'

class TimeZoneSelector extends Component {
  constructor (props) {
    super(props)
    this.role = props.role
    this.handleMainTextInput = this.handleMainTextInput.bind(this)
    this.handleMainSelectChange = this.handleMainSelectChange.bind(this)
    this.handleAddTextInput = this.handleAddTextInput.bind(this)
    this.resetButtonClick = this.resetButtonClick.bind(this)
    this.addButtonClick = this.addButtonClick.bind(this)
    this.state = {
      selectOptions: TIMEZONES_WITH_COMMENTS,
      addSelectOptions: TIMEZONES_WITH_COMMENTS,
      selectedMainTimezone: this.props.timeZone,
      selectedAddTimezone: this.props.timeZone
    }
  }
  
  handleMainSelectChange (event) {
    const iANATimeZone = event.target.value
    this.props.selectMainTimeZone(iANATimeZone)
    this.setState({selectedMainTimezone: iANATimeZone})
  }
  
  addButtonClick () {
    const select = document.querySelector('.addTimeZoneSelect')
    this.props.addButtonClick(select.value)
  }
  
  resetButtonClick () {
    const input = document.querySelector('.mainTimeZoneInput')
    const addInput = document.querySelector('.addTimeZoneInput')
    input.value = ''
    addInput.value = ''
    this.setState({
      selectOptions: TIMEZONES_WITH_COMMENTS,
      addSelectOptions: TIMEZONES_WITH_COMMENTS,
      selectedMainTimezone: DateTime.local().zone.name,
      selectedAddTimezone: DateTime.local().zone.name
    })
    this.props.resetAllButtonClick()
  }
  
  handleMainTextInput (event) {
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
    this.props.selectMainTimeZone(iANATimeZone)
    this.setState({
      selectOptions: timeZoneOptions,
      selectedMainTimezone: iANATimeZone
    })
  }
  
  handleAddTextInput (event) {
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
    // this.props.selectTimeZone(iANATimeZone)
    this.setState({
      addSelectOptions: timeZoneOptions,
      selectedAddTimezone: iANATimeZone
    })
  }
  
  render () {
    const options = this.state.selectOptions.map((timezone) =>
      <option key={timezone.TZ}>{timezone.TZ}</option>
    )
    
    const addOptions = this.state.addSelectOptions.map((timezone) =>
      <option key={timezone.TZ}>{timezone.TZ}</option>
    )
    
    // let toggleBox
    let inputs
    let buttons
    
    if (this.role === 'Add Card') {
      // toggleBox = (
      //   <div className={css.toggleOptions}>
      //     <span className={css.plusSymbol}>+</span>
      //   </div>
      // )
      inputs = (
        <div>
          {/*toggleBox*/}
          <div className={css.inputContainer}>
            <input className="addTimeZoneInput" onChange={this.handleAddTextInput} />
          </div>
          <select 
            value={this.state.selectedMainTimezone} 
            name="addTimezones" 
            className="addTimeZoneSelect">
            {addOptions}
          </select>
        </div>
      )
      
      buttons = (
        <div>
          <div>
            <button 
              className={css.deleteButton}
              onClick={this.addButtonClick}
              >
              Add
            </button>
          </div>
          {/*<div><button className={css.deleteButton}>Hide Options</button></div>*/}
        </div>
      )
    }
    
    if (this.role === 'Main') {
      inputs = (
        <div>
          <div className={css.inputContainer}>
            <input className="mainTimeZoneInput" onChange={this.handleMainTextInput} />
          </div>
          <select 
            value={this.props.timeZone}
            onChange={this.handleMainSelectChange} 
            name="timezones" 
            className="mainTimeZoneSelect">
            {options}
          </select>
        </div>
      )
      
      buttons = (
        <div>
          <button 
            className={css.deleteButton}
            onClick={this.resetButtonClick}
            >Reset All</button>
        </div>
      )
    } 
    
    return (
      <section className={css.mainContainer}>
        {inputs}
        {buttons}
      </section>
    )
  }
}

export default TimeZoneSelector