import React from "react"
import css from "./footer.module.css"

const Footer = () => (
  <footer className={css.footer}>
    <a href="https://github.com/wlwl2/time-converter">Source</a> <br></br>
    Built by {` `} <a href="https://www.wlwl2.com/">wlwl2</a> <br></br>
    Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
