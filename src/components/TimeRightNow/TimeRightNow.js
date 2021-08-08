import React, {Component} from "react"
import {DateTime} from "luxon"
import OriginCard from './OriginCard'
import Card from './Card'
import TimeZoneSelector from './TimeZoneSelector'
import Dst from './Dst'
import css from "./TimeRightNow.module.css"
import {INITIAL_CARD_ZONES} from './INITIAL_CARD_ZONES'

const initialMainZone = { 
  location: 'Local Time', 
  timeZone: DateTime.local().zone.name 
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
      timeNow: DateTime.local().setZone(initialMainZone.timeZone),
      mainTimeZone: initialMainZone.timeZone,
      cardZones: INITIAL_CARD_ZONES
    }
  }
  
  componentDidMount () {
    this.storedCardZones = JSON.parse(
      window.localStorage.getItem('timeRightNow-cardZones'))
    // These sorts of checks are problematic.
    if (!this.storedCardZones) {
      window.localStorage.setItem('timeRightNow-cardZones', 
        JSON.stringify(INITIAL_CARD_ZONES))
      this.storedCardZones = INITIAL_CARD_ZONES
    }
    
    this.storedMainZone = JSON.parse(
      window.localStorage.getItem('timeRightNow-mainZone'))
    if (!this.storedMainZone) {
      window.localStorage.setItem('timeRightNow-mainZone', 
        JSON.stringify(initialMainZone))
      this.storedMainZone = initialMainZone
    }
    
    this.setState({
      timeNow: DateTime.local().setZone(this.storedMainZone.timeZone),
      mainTimeZone: this.storedMainZone,
      cardZones: this.storedCardZones
    })
    
    this.timerID = setInterval(() => this.tick(), 500)
  }
  
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
  
  tick () {
    // const timeNow = DateTime.local().plus({hours: -3})
    this.setState(
      { 
        timeNow: DateTime.local().setZone(this.storedMainZone.timeZone) 
      }
    )
  }
  
  resetAll () {
    const initialMainZone = { 
      location: 'Local Time', 
      timeZone: DateTime.local().zone.name 
    }
    window.localStorage.setItem(
      'timeRightNow-mainZone', 
      JSON.stringify(initialMainZone)
    )
    window.localStorage.setItem(
      'timeRightNow-cardZones', 
      JSON.stringify(INITIAL_CARD_ZONES)
    )
    this.setState({
      mainTimeZone: initialMainZone,
      cardZones: INITIAL_CARD_ZONES
    })
  }
  
  changeMainTimeZone (iANATZName) {
    let timeZone = { location: iANATZName, timeZone: iANATZName }
    window.localStorage.setItem('timeRightNow-mainZone', 
      JSON.stringify(timeZone))
    this.setState({ mainTimeZone: timeZone })
  }
  
  addTimeZone (iANATZName) {
    let timeZoneToBeAdded = { location: iANATZName, timeZone: iANATZName }
    let oldTimeZones = JSON.parse(
      window.localStorage.getItem('timeRightNow-cardZones'))
    let newTimeZones = oldTimeZones.concat([timeZoneToBeAdded])
    window.localStorage.setItem('timeRightNow-cardZones', 
      JSON.stringify(newTimeZones))
    this.setState({ cardZones: newTimeZones })
  }
  
  removeTimeZone (indexToRemove) {
    let oldTimeZones = JSON.parse(
      window.localStorage.getItem('timeRightNow-cardZones'))
    let filtered = oldTimeZones.filter(checkIndex)
    function checkIndex (timeZone, index) {
      if (index !== indexToRemove) return timeZone
    }
    window.localStorage.setItem('timeRightNow-cardZones', 
      JSON.stringify(filtered))
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
          <Dst 
            timeNow={this.state.timeNow}
            timeZone={this.state.mainTimeZone.timeZone}
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
