import React from "react"
import css from "./ConvertedTime.module.css"

function ConvertedTime (props) {
  const namedOffsetFormat = "ZZZZZ"
  
  return (
    <section className={css.mainTimeGroup}>
      <div className={css.namedOffsetNow}>
      </div>
    </section>
  )
}

export default ConvertedTime