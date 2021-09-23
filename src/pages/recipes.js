import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"


export default function Recipes() {
  return (
    <Layout>
      <Header headerText="Recipes" />
      <p>Here is a list of recipes that I enjoy and make often.</p>
    </Layout>
  )
}