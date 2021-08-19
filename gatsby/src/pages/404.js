import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to={"/"}>Return to Homepage</Link>
  </>
)

export default NotFoundPage
