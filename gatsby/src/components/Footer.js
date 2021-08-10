import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  text-align: center;
  margin-top:auto;
`;

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterStyles>
      <p>&copy; slaterslater {year}</p>
    </FooterStyles>
  )
}

export default Footer