import React from "react"
import css from "./ConvertedTime.module.css"
import {DateTime} from "luxon"

function ConvertedTime (props) {
  const timeNowFormat = "H':'mm"
  const dateNowFormat = "ccc d LLL y"
  const namedOffsetFormat = "ZZZZZ"
  
  function dayDiffMessage (originTime, targetTime) {
    const origin = originTime.toObject().day
    const target = targetTime.toObject().day
    const difference = target - origin
    
    if (difference === 0) {
      return ``
    } else if (difference === -1) {
      return `(Previous Day)`
    } else if (difference === 1) {
      return `(Next Day)`
    }
  }
  
  function getRealMs (originMs, originZone) {
    const originOffset = DateTime.fromMillis(
      Number(originMs), {zone: originZone}).offset
    const localOffset = DateTime.local().offset
    const diff = localOffset - originOffset
    const diffMs = diff * 60 * 1000
    return originMs + diffMs
  }
  
  function getOrigin (originMs, originZone) {
    return DateTime.fromMillis(
      getRealMs(originMs, originZone), {zone: originZone})
    
  }
  
  function getTarget (originMs, originZone, targetZone) {
    return DateTime.fromMillis(
      getRealMs(originMs, originZone), {zone: targetZone})
  }
  
  return (
    <section className={css.mainTimeGroup}>
      <div className={css.timeNow}>
        {getTarget(props.timeNow, props.originTimeZone, props.targetTimeZone).toFormat(timeNowFormat)}
      </div>
      <div className={css.dayDiffMessage}>
        {dayDiffMessage(
          getOrigin(props.timeNow, props.originTimeZone), 
          getTarget(props.timeNow, props.originTimeZone, props.targetTimeZone)
        )}
      </div>
      <div className={css.dateNow}>
        {getTarget(props.timeNow, props.originTimeZone, props.targetTimeZone).toFormat(dateNowFormat)}
      </div>
      <div className={css.namedOffsetNow}>
        {getTarget(props.timeNow, props.originTimeZone, props.targetTimeZone).toFormat(namedOffsetFormat)}
      </div>
    </section>
  )
}

export default ConvertedTime