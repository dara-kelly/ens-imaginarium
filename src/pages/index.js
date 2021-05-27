import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tx from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Dara Kelly" />
    <h1>Signal is processed</h1>
    <p>You look on helplessly while your mind insists on perceiving</p>
    <p>You wish you could stop. <i>You cannot</i>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Tx />
    </div>
    <Link to="/page-2/">You may go on, but not come back</Link>
    
  </Layout>
)

export default IndexPage
