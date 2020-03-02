// import PropTypes from "prop-types"
import React, {Component} from "react"
// import DatePicker from "react-datepicker";
import css from "./TimeConverter.module.css"
import { DateTime } from "luxon"
import "react-datepicker/dist/react-datepicker.css";

class TimeConverter extends Component {
  timeNowFormat = "H':'mm':'ss"
  dateNowFormat = "ccc d LLL y"
  namedOffsetFormat = "ZZZZZ"
  
  constructor (props) {
    super(props)
    this.state = {
      singaporeTime: DateTime.local().setZone("Asia/Singapore").toFormat(this.timeNowFormat),
      singaporeDate: DateTime.local().setZone("Asia/Singapore").toFormat(this.dateNowFormat),
      singaporeNamedOffset: DateTime.local().setZone("Asia/Singapore").toFormat(this.namedOffsetFormat),
      startDate: new Date()
    }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    this.setState({
      singaporeTime: DateTime.local().setZone("Asia/Singapore").toFormat(this.timeNowFormat)
    })
  }
  
  handleChange = startDate => {
    this.setState({
      startDate
    })
  }
  
  render () {
    return (
      <div>
        <div className={css.mainTimeGroup}>
          Singapore: 
          <div className={css.timeNow}>{this.state.singaporeTime}</div>
          <div className={css.dateNow}>{this.state.singaporeDate}</div>
          <div className={css.namedOffsetNow}>{this.state.singaporeNamedOffset}</div>
          
        </div>
      </div>
    )
  }
}

export default TimeConverter
