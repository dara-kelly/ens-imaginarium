import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const recipePage = () => (
  <Layout>
    <h1>Recipes page</h1>
    <p>Recipes will be going in below</p>
  <li>Bread </li>
  <li>Coconut and turmeric chickpea stew </li>
  <li>Vegan curry </li>
  <li>Leeks and preserved lemons</li>
  <li>Shakshuka </li>
  <li>Mezze </li>
 
  <div style="color: grey"; margin:5rem>
   <p> Language is external in the sense both of the word of others, the highest point of which seems to be cliche, and the exact opposite, in the lyrical moment which seems to puncture the smooth surface of the theyself and reveal in its singularity a strange universality. Most of our living and our language occurs stranded between these two points, one of pure muttering which we try to escape, a grunting, barely legible <i>stimmung </i></p>
  <p> The other, absolute singularity, which is true generality. The general truth, the shared truth, can only be encountered as an individual, and felt here as a moment of sublimity, and nausea. The voice of the 'theyself' is precisely that of individuality from the outside, which is to say a mediated or subtracted individuality, one which is reduced and fearful, which senses its own internal void and sees the eyes gazing at it, fearing that they must sense it too. </p>
  </div>
    <Link to="/">Go back. You can. But it won&#39;t be the same.</Link>
  </Layout>
)

export default recipePage
