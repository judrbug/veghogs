import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>Send me a message!</p>
      <p>
        <a href="mailto:meffordhannah@gmail.com"> meffordhannah@gmail.com</a>
      </p>
    </Layout>
  )
}