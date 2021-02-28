import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
    <Header headerText="Welcome!"/>
    <p>Let's get cooking.</p>
    <img src="https://images.unsplash.com/photo-1589832020701-87d1717b4653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
  </Layout>
  );
}