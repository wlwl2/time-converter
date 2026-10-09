import { Link } from "gatsby"
import React from "react"
import css from "./titleLinks.module.css"

const activeStyles = {
  backgroundColor: '#EEEEEE',
  color: 'black'
}

const TitleLinks = () => (
  <div className={css.container}>
    <div className={css.guide}>
      Based on 1970 time zones. On your mobile phone, while still 
      online, you may have to refresh the pages below a couple of times to 
      "save" them for offline use. Test it out by turning both the Wi-Fi and 
      mobile internet off after "saving". '(C)' at the end of time zone names 
      means custom time zones. Note: possible problems on 
      the year 2038 (2038-01-19 03:14:07 UTC) due to 32-bit integer.
    </div>
    <Link to="/" className={css.titleLink} activeStyle={activeStyles}>
      Time Right Now
    </Link>
    <Link to="/converter/" className={css.titleLink} activeStyle={activeStyles}>
      Converter
    </Link>
    {/*<Link to="/calculator/" className={css.titleLink} activeStyle={activeStyles}>
      Calculator
    </Link>*/}
  </div>
)

export default TitleLinks
