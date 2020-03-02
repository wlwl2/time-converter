import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimeConverter from '../components/TimeConverter/TimeConverter'

const Converter = () => (
  <Layout>
    <SEO title="Converter" />
    <div>
      <TimeConverter />
    </div>
  </Layout>
)

export default Converter
