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
        {props.originTime.toFormat(timeNowFormat)}
      </div>
      <div className={css.dateNow}>
        {props.originTime.toFormat(dateNowFormat)}
      </div>
      <div className={css.namedOffsetNow}>
        {props.originTime.toFormat(namedOffsetFormat)}
      </div>
    </section>
  );
}

export default OriginCard