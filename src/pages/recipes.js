import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Other page" />
    <h1>"Recipes page"</h1>
    <p>"Recipes will be going in below"</p>
    <Link to="/">Go back. You can. But it won&#39;t be the same.</Link>
  </Layout>
)

export default SecondPage
