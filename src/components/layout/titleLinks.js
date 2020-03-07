import { Link } from "gatsby"
import React from "react"
import css from "./titleLinks.module.css"

const activeStyles = {
  backgroundColor: '#EEEEEE',
  color: 'black'
}

const TitleLinks = () => (
  <div className={css.container}>
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
