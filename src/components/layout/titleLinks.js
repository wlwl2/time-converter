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
      On your mobile phone, while still online, you may have to refresh the 
      pages below a couple of times to "save" them for offline use. Test it 
      out by turning both the Wi-Fi and mobile internet off after "saving".
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
