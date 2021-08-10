import { graphql } from 'gatsby';
import React from 'react'
import ReactMarkdown from "react-markdown"
import Styled from 'styled-components'

const ProjectPageStyles = Styled.div`

`;

const SingleProjectPage = ({ data: { project } }) => {
  return (
    <ProjectPageStyles>
      <h2>{project.name}</h2>
      <ReactMarkdown children={project.about} />
    </ProjectPageStyles>
  )
}

export default SingleProjectPage

export const query = graphql`
  query($id: String) {
    project: sanityProject(id: { eq: $id }) {
      id
      name
      about
    }
  }
`