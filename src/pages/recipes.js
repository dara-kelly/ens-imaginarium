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
 
    <Link to="/">Go back. You can. But it won&#39;t be the same.</Link>
  </Layout>
)

export default recipePage
