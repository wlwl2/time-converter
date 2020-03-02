import React from "react"
import css from "./Card.module.css"

function Card (props) {
  const timeNowFormat = "H':'mm':'ss"
  const dateNowFormat = "ccc d LLL y"
  const namedOffsetFormat = "ZZZZZ"
  
  function dayDiffMessage (originTime, targetTime) {
    const origin = originTime.toObject().day
    const target = targetTime.toObject().day
    const difference = target - origin
    
    if (difference === 0) {
      return ``
    } else if (difference === -1) {
      return `Previous Day`
    } else if (difference === 1) {
      return `Next Day`
    }
  }
  
  return (
    <section className={css.timeGroup}>
      {props.location}: 
      <div className={css.time}>
        {props.targetTime.toFormat(timeNowFormat)}
      </div>
      <div className={css.dayDiffMessage}>
        {dayDiffMessage(props.originTime, props.targetTime)}
      </div>
      <div className={css.date}>
        {props.targetTime.toFormat(dateNowFormat)}
      </div>
      <div className={css.namedOffset}>
        {props.targetTime.toFormat(namedOffsetFormat)}
      </div>
    </section>
  );
}

export default Card