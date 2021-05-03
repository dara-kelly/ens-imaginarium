import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Dara Kelly" />
    <h1>Signal is processed</h1>
    <p>You look on helplessly while your mind insists on perceiving</p>
    <p>You wish you could stop. <i>You cannot</i>.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">You may go on, but not come back</Link>
    
    <ul> Joan Retallack - The Poethical Wager</ul>
    <ul> Donald Davie - Articulating Energy</ul>
    <ul> Hugh Kenner - The Pound Era</ul>
    <ul> Guy Davenport - Geographies of the Imagination</ul>
    <ul> Frank Kermode - Romantic Image</ul>
    <ul> Marjorie Perloff - 21st Century Modernism</ul> 
    <ul> Anne Carson - Eros the Bittersweet</ul>

  </Layout>
)

export default IndexPage
