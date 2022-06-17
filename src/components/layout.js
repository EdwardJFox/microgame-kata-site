import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.scss";
import Bio from "./bio";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link to="/">
        <StaticImage
          className="logo"
          src="../images/logo.png"
          width={700}
          alt="Microgame Kata Logo"
          loading="eager"
          placeholder="tracedSVG"
        />  
      </Link>
    )
  } else {
    header = (
      <Link to="/">
        <StaticImage
          className="logo"
          src="../images/logo_no_eyebrows.png"
          width={500}
          alt="Microgame Kata Logo"
          loading="eager"
          placeholder="tracedSVG"
        />  
      </Link>
    )
  }

  return (
    <div className="globalWrapper" data-is-root-path={isRootPath}>
      <header className="globalHeader">{header}</header>
      <main>{children}</main>
      <footer>
        <Bio />

        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
