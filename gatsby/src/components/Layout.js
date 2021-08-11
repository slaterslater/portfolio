import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "normalize.css"
import Footer from "./Footer"
import Header from "./Header"

const GlobalStyles = createGlobalStyle`
 :root {
   --white: #ffffff;
    --darkblue: #1a1b2c;
    --liteblue: #70b7e0;
    --offwhite: #fdffee;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper{
    margin: 0;
    min-width:100%;
    width:100%;
    /* min-height: 100%; */
    height: 100%;
    color: var(--darkblue);
    background-color: var(--offwhite);
  }
`

// do i need this? can it be placed above?
const PageStyles = styled.div`
  /* width:100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const ContentStyles = styled.div`
  /* justify-content: center; */
  max-width: 880px;
  min-width: 350px;
  /* border: 1px solid black; */
  /* align-items: center; */
  margin: 0 auto;
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
