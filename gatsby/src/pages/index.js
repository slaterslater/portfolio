import { graphql } from 'gatsby';
import React from 'react'
import Styled from 'styled-components'
import ProjectList from '../components/ProjectList';

const HomePageStyles = Styled.div`

`;

const HomePage = ({data}) => {
  const projects = data.projects.nodes;
  return (
    <HomePageStyles>
      <p>this is going to be my portfolio of {projects.length} things...</p>
      <ProjectList projects={projects} />
    </HomePageStyles>
  )
}

export default HomePage

export const query = graphql`
  query {
    projects: allSanityProject (sort: {order: DESC, fields: date}) {
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
`;