import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
`

const Header = () => {
  return (
    <HeaderStyles>
      <h1>slaterslater</h1>
    </HeaderStyles>
  )
}

export default Header
