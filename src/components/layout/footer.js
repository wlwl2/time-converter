import React from "react"
import css from "./footer.module.css"

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.footerLine}><a href="https://github.com/wlwl2/time-converter">Source</a></div>
    <div className={css.footerLine}>Built by {` `} <a href="https://www.wlwl2.com/">wlwl2</a></div>
    <div className={css.footerLine}>
      Built with {` `}
      {` `} <a href="https://www.iana.org/time-zones">IANA Data</a>,
      {` `} <a href="https://moment.github.io/luxon">Luxon</a>,
      {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
