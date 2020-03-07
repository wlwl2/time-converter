import React, {Component} from "react"
import DatePicker from "react-datepicker"
import {DateTime} from "luxon"
import css from "./DatePickerGroup.module.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class DatePickerGroup extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      startDate: this.props.originTime
    }
  }

  handleChange (date) {
    this.props.changeOriginTime(Date.parse(date))
    this.setState({startDate: date})
  }
  
  render () {
    return (
      <div className={css.datePickerGroup}>
        <DatePicker
          showYearDropdown
          showTimeInput
          selected={this.props.originTime}
          onChange={this.handleChange}
          dateFormat="d MMM yyyy H:mm"
          />
      </div>
    )
  }
}

export default DatePickerGroup
