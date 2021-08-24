import "@fontsource/anton"
import "@fontsource/lato"
import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout>{element}</Layout>
)
