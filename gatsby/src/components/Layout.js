import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Layout