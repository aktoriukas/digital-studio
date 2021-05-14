/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import "./layout.css"
import "../scss/index.css"

const Layout = ({ children, page }) => {


  return (
    <>
      <Header />


      <main className={page}>{children}</main>

    </>
  )
}

export default Layout
