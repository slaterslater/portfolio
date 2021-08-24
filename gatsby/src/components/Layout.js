import React from "react"
import "@fontsource/anton"
import "@fontsource/lato"
import "normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --offwhite: #fdffee;
    --beige: #efeddf;
    --litegrey: #efefef;
    --darkgrey: #888888;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper{
    margin: 0;
    min-width:100%;
    width:100%;
    height: 100%;
    background-color: var(--offwhite);
  }
`

const PageStyles = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  h1, h2, h3 {
    font-family: "Anton", sans-serif;
  }
`

const ContentStyles = styled.div`
  max-width: 880px;
  min-width: 320px;
  margin: 0 auto;
  padding: 10px;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageStyles>
        <Header />
        <ContentStyles>{children}</ContentStyles>
        <Footer />
      </PageStyles>
    </>
  )
}

export default Layout
