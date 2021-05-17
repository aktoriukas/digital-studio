import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "../components/button"
import Canvas from "../components/canvas"
import LatestRecipes from "../components/latestRecipes"
import TrackVisibility from 'react-on-screen';

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const IndexPage = () => {


  const data = useStaticQuery(graphql`
  
    query Images{
      plateIMG: file(relativePath: {eq: "img09.png"}) {
        childImageSharp {
          fluid(quality:100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      dish1: file(relativePath: {eq: "img10.jpg"}) {
        childImageSharp{
          fluid(quality:60){
            ...GatsbyImageSharpFluid
          }
        }
      }
      dish2: file(relativePath: {eq: "img11.jpg"}) {
        childImageSharp{
          fluid(quality:60){
            ...GatsbyImageSharpFluid
          }
        }
      }
      dish3: file(relativePath: {eq: "img12.jpg"}) {
        childImageSharp{
          fluid(quality:60){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd1: file(relativePath: {eq: "img1.png"}) {
        childImageSharp{
          fluid(quality:60){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd2: file(relativePath: {eq: "img2.png"}) {
        childImageSharp{
          fluid(quality:10){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd3: file(relativePath: {eq: "img3.png"}) {
        childImageSharp{
          fluid(quality:10){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd4: file(relativePath: {eq: "img4.png"}) {
        childImageSharp{
          fluid(quality:10){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd5: file(relativePath: {eq: "img5.png"}) {
        childImageSharp{
          fluid(quality:10){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd6: file(relativePath: {eq: "img6.png"}) {
        childImageSharp{
          fluid(quality:10){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ingrd7: file(relativePath: {eq: "img7.png"}) {
        childImageSharp{
          fluid(quality:10){
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
            
            <Img fluid={data.plateIMG.childImageSharp.fluid} />
          </div>
  
        </div>
  
      </div>
  
      <div className="shop-now">
  
        <div className="half">
  
          <Canvas data={data} />
  
        </div>
  
        <div className="half">
  
          <h2>We make it easy for you to cook delicious dinner</h2>
  
          <p>Simply choose your recipes from a weekly menu and we'll diliver freshly picked vegetables, pro-portioned ingredients and step-by-step recipes direct to your door ready for you to cook</p>
  
          <Button txt="shop now"/>
  
        </div>
  
      </div>
  
  
      <div className="latest-recipes">
  
        <TrackVisibility>
  
          <LatestRecipes data={data} />
  
        </TrackVisibility>
  
      </div>
  
    </Layout>
  )
}


export default IndexPage


