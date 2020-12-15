import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Other page" />
    <h1>How can there be an extension of nothing&#63;</h1>
    <p>This is the second page, or another page, the non-first page. It is defined only by its opposition to the first page (which is to say, spatially for you, temporally for me), and has no substance.</p>
    <Link to="/">Go back. You can. But it won&#39;t be the same.</Link>
  </Layout>
)

export default SecondPage
