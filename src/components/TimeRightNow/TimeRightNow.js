import React, {Component} from "react"
import { DateTime } from "luxon"
import OriginCard from './OriginCard'
import Card from './Card'
import TimeZoneSelector from './TimeZoneSelector'
import css from "./TimeRightNow.module.css"

class TimeRightNow extends Component {
  constructor (props) {
    super(props)
    this.timeNowFormat = "H':'mm':'ss"
    this.dateNowFormat = "ccc d LLL y"
    this.namedOffsetFormat = "ZZZZZ"
    this.narrowOffsetFormat = "Z"
    this.timeNow = DateTime.local()
    this.state = {
      singaporeTime: this.timeNow.setZone("Asia/Singapore"),
      bostonTime: this.timeNow.setZone("America/New_York"),
      laTime: this.timeNow.setZone("America/Los_Angeles"),
      freiburgTime: this.timeNow.setZone("Europe/Berlin"),
      londonTime: this.timeNow.setZone("Europe/London"),
      sydneyTime: this.timeNow.setZone("Australia/Sydney"),
      shanghaiTime: this.timeNow.setZone("Asia/Shanghai")
    }
  }
  
  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    // const timeNow = DateTime.local().minus({hours: 3})
    const timeNow = DateTime.local()
    this.setState({
      singaporeTime: timeNow.setZone("Asia/Singapore"),
      bostonTime: timeNow.setZone("America/New_York"),
      laTime: timeNow.setZone("America/Los_Angeles"),
      freiburgTime: timeNow.setZone("Europe/Berlin"),
      londonTime: timeNow.setZone("Europe/London"),
      sydneyTime: timeNow.setZone("Australia/Sydney"),
      shanghaiTime: timeNow.setZone("Asia/Shanghai")
    })
  }
  
  render () {
    return (
      <div>
        <div>
          Warning: This is just used for testing the basic features (service workers etc.). A good version of the 
          converter will be available before 19 March 2020.
        </div>
        <div className={css.mainTimeContainer}>
          <OriginCard location="Singapore" originTime={this.state.singaporeTime} />
          <TimeZoneSelector />
        </div>
        <div className={css.TimeContainer}>
          <Card location="Boston" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.bostonTime} />
          <Card location="New York" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.bostonTime} />
          <Card location="Freiburg" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.freiburgTime} />
          <Card location="Los Angeles" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.laTime} />
          <Card location="London" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.londonTime} />
          <Card location="Sydney" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.sydneyTime} />
          <Card location="Shanghai" originLocation="Singapore"
            originTime={this.state.singaporeTime} targetTime={this.state.shanghaiTime} />
        </div>
      </div>
    )
  }
}

export default TimeRightNow
