import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dara Kelly" />
    <h1>Signal is processed</h1>
    <p>You look on helplessly while your brain insists on reading</p>
    <p>You wish you could stop. You cannot</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">You may go on, but not come back</Link>
  </Layout>
)

export default IndexPage
