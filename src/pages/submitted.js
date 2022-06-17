import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.scss";

const KataSubmitted = ({ location }) => {
  return (
    <Layout location={location} title="Thanks!">
      <Seo title="Thanks for your submission" />
      <h1 style={{ textAlign: "center" }}>Thanks for submitting your Kata</h1>
      <p className="lead">I'll get around to adding it as soon as possible. In the mean time, see if any of the other katas are of interest, or take what you did and try expand it!</p>
    </Layout>
  )
}

export default KataSubmitted;
