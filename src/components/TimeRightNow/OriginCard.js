import React from "react"
import css from "./OriginCard.module.css"

function OriginCard (props) {
  const timeNowFormat = "H':'mm':'ss"
  const dateNowFormat = "ccc d LLL y"
  const namedOffsetFormat = "ZZZZZ"
  
  return (
    <section className={css.mainTimeGroup}>
      {props.location}:  
      <div className={css.timeNow}>
        {props.timeNow.setZone(props.timeZone).toFormat(timeNowFormat)}
      </div>
      <div className={css.dateNow}>
        {props.timeNow.setZone(props.timeZone).toFormat(dateNowFormat)}
      </div>
      <div className={css.namedOffsetNow}>
        {props.timeNow.setZone(props.timeZone).toFormat(namedOffsetFormat)}
      </div>
    </section>
  );
}

export default OriginCard