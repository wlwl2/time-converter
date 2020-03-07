import { Link } from "gatsby"
import React from "react"
import css from "./titleLinks.module.css"

const TitleLinks = () => (
  <div className={css.container}>
    <Link to="/" className={css.titleLink}>
      Time Right Now
    </Link>
    <Link to="/converter/" className={css.titleLink}>
      Converter
    </Link>
  </div>
)

export default TitleLinks
