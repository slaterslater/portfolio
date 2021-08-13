import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--darkgrey);
  a {
    text-decoration: none;
    color: black;
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <h1>
        <Link to={"/"}>slaterslater</Link>
      </h1>
    </HeaderStyles>
  )
}

export default Header
