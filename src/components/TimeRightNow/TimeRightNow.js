import React, {Component} from "react"
import {DateTime} from "luxon"
import OriginCard from './OriginCard'
import Card from './Card'
import TimeZoneSelector from './TimeZoneSelector'
import css from "./TimeRightNow.module.css"
import {INITIAL_CARD_ZONES} from './INITIAL_CARD_ZONES'

const initialMainZone = { location: 'Local Time', timeZone: DateTime.local().zone.name }

let storedCardZones = JSON.parse(window.localStorage.getItem('timeRightNow-cardZones'))
// These sorts of checks are problematic.
if (!storedCardZones) {
  window.localStorage.setItem('timeRightNow-cardZones', JSON.stringify(INITIAL_CARD_ZONES))
  storedCardZones = INITIAL_CARD_ZONES
}

let storedMainZone = JSON.parse(window.localStorage.getItem('timeRightNow-mainZone'))
if (!storedMainZone) {
  window.localStorage.setItem('timeRightNow-mainZone', JSON.stringify(initialMainZone))
  storedMainZone = initialMainZone
}

class TimeRightNow extends Component {
  constructor (props) {
    super(props)
    this.timeNowFormat = "H':'mm':'ss"
    this.dateNowFormat = "ccc d LLL y"
    this.namedOffsetFormat = "ZZZZZ"
    this.narrowOffsetFormat = "Z"
    this.resetAll = this.resetAll.bind(this)
    this.changeMainTimeZone = this.changeMainTimeZone.bind(this)
    this.addTimeZone = this.addTimeZone.bind(this)
    this.removeTimeZone = this.removeTimeZone.bind(this)
    this.state = {
      timeNow: DateTime.local().setZone(storedMainZone.timeZone),
      mainTimeZone: storedMainZone,
      cardZones: storedCardZones
    }
  }
  
  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    // const timeNow = DateTime.local().plus({hours: -3})
    this.setState({ timeNow: DateTime.local().setZone(storedMainZone.timeZone) })
  }
  
  resetAll () {
    const initialMainZone = { location: 'Local Time', timeZone: DateTime.local().zone.name }
    window.localStorage.setItem('timeRightNow-mainZone', JSON.stringify(initialMainZone))
    window.localStorage.setItem('timeRightNow-cardZones', JSON.stringify(INITIAL_CARD_ZONES))
    this.setState({
      mainTimeZone: initialMainZone,
      cardZones: INITIAL_CARD_ZONES
    })
  }
  
  changeMainTimeZone (iANATZName) {
    let timeZone = { location: iANATZName, timeZone: iANATZName }
    window.localStorage.setItem('timeRightNow-mainZone', JSON.stringify(timeZone))
    this.setState({ mainTimeZone: timeZone })
  }
  
  addTimeZone (iANATZName) {
    let timeZoneToBeAdded = { location: iANATZName, timeZone: iANATZName }
    let oldTimeZones = JSON.parse(window.localStorage.getItem('timeRightNow-cardZones'))
    let newTimeZones = oldTimeZones.concat([timeZoneToBeAdded])
    window.localStorage.setItem('timeRightNow-cardZones', JSON.stringify(newTimeZones))
    this.setState({ cardZones: newTimeZones })
  }
  
  removeTimeZone (indexToRemove) {
    let oldTimeZones = JSON.parse(window.localStorage.getItem('timeRightNow-cardZones'))
    let filtered = oldTimeZones.filter(checkIndex)
    function checkIndex (timeZone, index) {
      if (index !== indexToRemove) return timeZone
    }
    window.localStorage.setItem('timeRightNow-cardZones', JSON.stringify(filtered))
    this.setState({ cardZones: filtered })
  }
  
  render () {
    const cards = this.state.cardZones.map((cardZone, index) => {
      return (
        <Card
          key={index}
          index={index}
          location={cardZone.location}
          timeZone={cardZone.timeZone}
          timeNow={this.state.timeNow}
          originTimeZone={this.state.mainTimeZone.timeZone}
          deleteButton={this.removeTimeZone}
        />
      )
    })
    
    return (
      <div>
        <div className={css.mainTimeContainer}>
          <OriginCard 
            location={this.state.mainTimeZone.location}
            timeZone={this.state.mainTimeZone.timeZone}
            timeNow={this.state.timeNow} />
          <TimeZoneSelector 
            role="Main"
            timeZone={this.state.mainTimeZone.timeZone}
            resetAllButtonClick={this.resetAll}
            selectMainTimeZone={this.changeMainTimeZone}
            />
        </div>
        <div className={css.TimeContainer}>
          {cards}
          <TimeZoneSelector 
            role="Add Card"
            addButtonClick={this.addTimeZone}
            />
        </div>
      </div>
    )
  }
}

export default TimeRightNow
