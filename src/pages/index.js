import * as React from "react"

import plateImg from '../images/09.png'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Canvas from "../components/canvas"
import LatestRecipes from "../components/latestRecipes"
import TrackVisibility from 'react-on-screen';

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "09.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return(
  
  
    <Layout page="home-page">
      <Seo title="Home" />
  
      <div className="welcome">
  
        <div className="half">
          <h1>You deserve better</h1>
          <h2>Consider this a taste intervension.</h2>
          <Button txt="learn more"/>
        </div>
  
        <div className="half">
  
          <div className="img-container">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
  
        </div>
  
      </div>
  
      <div className="shop-now">
  
        <div className="half">
  
          <Canvas />
  
        </div>
  
        <div className="half">
  
          <h2>We make it easy for you to cook delicious dinner</h2>
  
          <p>Simply choose your recipes from a weekly menu and we'll diliver freshly picked vegetables, pro-portioned ingredients and step-by-step recipes direct to your door ready for you to cook</p>
  
          <Button txt="shop now"/>
  
        </div>
  
      </div>
  
  
      <div className="latest-recipes">
  
        <TrackVisibility>
  
          <LatestRecipes />
  
        </TrackVisibility>
  
      </div>
  
    </Layout>
  )
}


export default IndexPage
