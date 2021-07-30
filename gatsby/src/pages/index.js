import { graphql } from 'gatsby';
import React from 'react'
import Styled from 'styled-components'
import Layout from '../components/Layout';

const HomePageStyles = Styled.div`

`;

const HomePage = ({data}) => {
  
  const projects = data.projects.nodes;
  
  return (
    <Layout>
    <HomePageStyles>
      <p>this is going to be my portfolio of {projects.length} things...</p>
    </HomePageStyles>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query {
    projects: allSanityProject {
      nodes {
        name
        about
        id
      }
    }
  }
`;