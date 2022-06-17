import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const KataIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const katas = data.allMarkdownRemark.nodes

  if (katas.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All katas" />
        <p>
          No katas found. Add markdown katas to "content/katas" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All katas" />
      <p className="lead">Tiny microgame katas based on Warioware, picked to help you practice game dev while having fun. When you're ready, you can submit your katas <Link to="/submit">here</Link>.</p>
      <ol className="kataList">
        {katas.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = getImage(post.frontmatter.thumbnail)

          return (
            <li
              key={post.fields.slug}
              className="kataListItem">
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <GatsbyImage image={thumbnail} alt={`${title} thumbnail`} />
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <h3>{post.frontmatter.number}</h3>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default KataIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___number], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          number
          published_at(formatString: "MMMM DD, YYYY")
          last_updated_at(formatString: "MMMM DD, YYYY")
          description
          thumbnail {
            publicURL,
            childImageSharp {
              gatsbyImageData(
                width: 240,
                height: 160,
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
