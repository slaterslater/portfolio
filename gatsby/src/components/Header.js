import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  width: 100%;
  margin: 20px 0px;
  h1 {
    margin: 0;
    padding: 0;
    margin-right: 25px;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    @media (max-width: 480px) {
      justify-content: space-around;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <Link to={"/"}>
        <h1>slaterslater</h1>
        <StaticImage
          src="../images/icon.png"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
    </HeaderStyles>
  )
}

export default Header
