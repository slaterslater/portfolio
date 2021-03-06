import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import ProjectList from "../components/ProjectList"
import SEO from "../components/SEO"

const HomePageStyles = styled.div`
  padding: 8px;
`

const HomePage = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <>
      <SEO />
      <HomePageStyles>
        <ProjectList projects={projects} />
      </HomePageStyles>
    </>
  )
}

export default HomePage

export const query = graphql`
  query {
    projects: allSanityProject(sort: { order: DESC, fields: date }) {
      nodes {
        id
        name
        summary
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 100, layout: FIXED)
          }
        }
        skills {
          id
          name
        }
      }
    }
  }
`
