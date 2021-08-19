import { Link } from "gatsby"
import React from "react"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"

const ProjectListStyles = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    margin: 20px 0;
    padding: 10px;
    border-radius: 8px;
    transition: 0.5s;
    :hover {
      background-color: var(--beige);
      box-shadow: 5px 5px 10px 2px var(--darkgrey);
    }
  }
  a {
    text-decoration: none;
    color: black;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 100px 1fr;
  }
  img {
    border-radius: 4px;
  }
`

const InfoStyles = styled.div`
  padding: 0 15px;
  h2 {
    margin-top: 5px;
  }
`

const ProjectList = ({ projects }) => {
  return (
    <ProjectListStyles>
      {projects.map(project => (
        <li key={project.id}>
          <Link to={`/${project.slug.current}`}>
            <Img
              image={project.image.asset.gatsbyImageData}
              alt={`screenshot of ${project.name}`}
            />
            <InfoStyles>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </InfoStyles>
          </Link>
        </li>
      ))}
    </ProjectListStyles>
  )
}

export default ProjectList
