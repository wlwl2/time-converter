import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimeRightNow from '../components/TimeRightNow/TimeRightNow'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TimeRightNow />
  </Layout>
)

export default IndexPage
