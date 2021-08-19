import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import {
  FaGithub as Github,
  FaBackward as Back,
  FaGlobeAmericas as Globe,
} from "react-icons/fa"
import styled from "styled-components"
import SEO from "../components/SEO"

const ProjectPageStyles = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: black;
  }
  h2 {
    margin-top: 0;
  }
  h3 {
    margin-top: 30px;
  }
  p {
    padding-right: 35px;
    text-align: justify;
  }
  .gatsby-image-wrapper {
    margin-top: 25px;
  }
  img {
    border-radius: 8px;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    h2 {
      text-align: center;
    }
    p {
      padding-right: 10px;
    }
  }
`

const ProjectNavStyles = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    padding: 15px 0;
    width: 300px;
    justify-content: space-evenly;
  }
  a {
    padding: 8px 5px;
    text-decoration: none;
    border: 1px solid black;
    color: black;
    border-radius: 5px;
    transition: 0.25s;
    :hover {
      box-shadow: 2px 2px 5px 2px #888888;
    }
  }
  svg {
    vertical-align: top;
    padding-right: 6px;
  }
`

const SingleProjectPage = ({ data: { project } }) => {
  return (
    <>
      <SEO title={project.name} />
      <ProjectPageStyles>
        <div>
          <Link to={project.deploy}>
            <h2>{project.name}</h2>
          </Link>
          <ReactMarkdown children={project.about} />
          <h3>Skills Used</h3>
          <ul>
            {project.skills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={project.deploy}>
            <Img
              image={project.image.asset.gatsbyImageData}
              alt={`${project.name} screenshot`}
            />
          </Link>
          <ProjectNavStyles>
            <ul>
              <li>
                <Link to={"/"}>
                  <Back />
                  Back
                </Link>
              </li>
              <li>
                <Link to={project.repo}>
                  <Github />
                  Code
                </Link>
              </li>
              <li>
                <Link to={project.deploy}>
                  <Globe />
                  Website
                </Link>
              </li>
            </ul>
          </ProjectNavStyles>
        </div>
      </ProjectPageStyles>
    </>
  )
}

export default SingleProjectPage

export const query = graphql`
  query($id: String) {
    project: sanityProject(id: { eq: $id }) {
      name
      about
      deploy
      repo
      skills {
        id
        name
      }
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED, width: 300, layout: FIXED)
        }
      }
    }
  }
`
