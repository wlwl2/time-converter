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
      return `(Previous Day)`
    } else if (difference === 1) {
      return `(Next Day)`
    }
  }
  
  function deleteButtonClick () {
    props.deleteButton(props.index)
  }
  
  return (
    <section className={css.timeGroup}>
      {props.location}: 
      <div className={css.time}>
        {props.timeNow.setZone(props.timeZone).toFormat(timeNowFormat)}
      </div>
      <div className={css.dayDiffMessage}>
        {dayDiffMessage(
          props.timeNow.setZone(props.originTimeZone), 
          props.timeNow.setZone(props.timeZone)
        )}
      </div>
      <div className={css.date}>
        {props.timeNow.setZone(props.timeZone).toFormat(dateNowFormat)}
      </div>
      <div className={css.namedOffset}>
        {props.timeNow.setZone(props.timeZone).toFormat(namedOffsetFormat)}
      </div>
      <div>
        <button 
          className={css.deleteButton}
          onClick={deleteButtonClick}
          >
          Delete
        </button>
      </div>
    </section>
  );
}

export default Card