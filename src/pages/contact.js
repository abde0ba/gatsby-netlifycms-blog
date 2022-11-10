import * as React from "react"
import { Link, graphql } from "gatsby"
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const contact = ({ data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
        <div className="contact-section">
        <Container>
          <h1>Contact</h1>
          
          <form>
           <Row>
              <Col>
              <div>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" />
              </div>
              </Col>
           </Row>
           <Row>
              <Col>
              <div>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              </div>
              </Col>
              </Row>
          <TextField
          id="standard-multiline-flexible"
          label="Your Message"
          multiline
          />
          <br />
         <Button variant="outlined" >
            Send
          </Button>
          </form>
          </Container>
        </div>
    </Layout>
    
  )
}

export default contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`