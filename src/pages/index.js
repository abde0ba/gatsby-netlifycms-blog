import * as React from "react"
import { Link, graphql } from "gatsby"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout className='text' location={location} title={siteTitle}>
      <div>
      <div className="trending-section">
        <h1>Trending</h1>
      </div>
      
      <Carousel className='slider-section' variant='dark'>
      {posts.map(post => {
        
          const title = post.frontmatter.title || post.fields.slug
          const postFeaturedImage = getImage(post.frontmatter.featuredImage);

          return(
            
      
      <Carousel.Item>
        <Link to={post.fields.slug}>
        <Row>
         <Col> 
        <GatsbyImage
          className="d-block slider-img"
          
          image={postFeaturedImage}
          alt="First slide"
        />
        </Col>
        </Row>
        <Row>
        <Col>
        <Carousel.Caption className='caption-section'>
       
          <h3>{title}</h3>
          <p>{post.excerpt.slice(0, 97) || post.frontmatter.description.slice(0, 97)}...</p>
        </Carousel.Caption>
        </Col>
        </Row>
        </Link>
      </Carousel.Item>
      
      
      
          )
      })}
      </Carousel>
      </div>
      <div className="trending-section">
      <h1>Latest Articles</h1>
      </div>
      <ol style={{ listStyle: `none` }}>
      
      
      <Container>
      <Row>
      
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const postFeaturedImage = getImage(post.frontmatter.featuredImage);
         
          
          return (
            <Col>
            <li key={post.fields.slug}>
                
                <Card className='card-section' sx={{ maxWidth: 345, maxHeight: 600 }}>
                <Link to={post.fields.slug}>
                  <CardActionArea>
                    <GatsbyImage
                      component="img"
                      style={{maxHeight: 150}}
                      image={postFeaturedImage}
                      //alt="green iguana"
                    />
                    <CardContent>
                      <small>{post.frontmatter.date}</small>
                      <Typography gutterBottom variant="h5" component="div">
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.excerpt.slice(0, 97) || post.frontmatter.description.slice(0, 97)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  </Link>
                </Card>
                
            </li>
            </Col>
           
          )
        })}
        
        </Row>
        </Container>
      </ol>
     
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

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
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
