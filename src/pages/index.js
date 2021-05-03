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
    
    <ul> 
	<li>Joan Retallack - The Poethical Wager</li>
    	<li> Donald Davie - Articulating Energy</li>
    	<li> Hugh Kenner - The Pound Era</li>
    	<li> Guy Davenport - Geographies of the Imagination</li>
    	<li> Frank Kermode - Romantic Image</li>
    	<li> Marjorie Perloff - 21st Century Modernism</li> 
    	<li> Anne Carson - Eros the Bittersweet</li>
    </ul>
  </Layout>
)

export default IndexPage
