import React from "react"
import { graphql, Link} from "gatsby"
// import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"


export default function Home({data}) {
  console.log(data.file.childrenImageSharp[0]);
  // const {title,description}=data.site.siteMetadata;
  return (
    <Layout>
    <section className={styles.header}>
       <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer based in Manchester.</p>
        <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
       </div>
       <Img fluid={data.file.childrenImageSharp[0].fluid}/>
       </section>
    </Layout>
  )
}

export const query =graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childrenImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`


