import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Calculator from '../components/Calculator/Calculator'

const CalculatorLink = () => (
  <Layout>
    <SEO title="Calculator" />
    <div>
      <Calculator />
    </div>
  </Layout>
)

export default CalculatorLink
