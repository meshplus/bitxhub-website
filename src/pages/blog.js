import {graphql} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import BlogBanner from '../images/blog_bg.png'
import {ColorText} from '../components/style'
import Moment from 'react-moment'

export const pageQuery = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          id
          name
          published_at
        }
      }
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          id
          title
          content
          published_at
          cover {
            formats {
              small {
                url
              }
            }
          }
        }
      }
    }
  }
`

const BlogPage = ({data}) => {
  return (
    <Layout>
      <SEO title='Blog' />
      <Box
        pt={38}
        sx={{
          backgroundImage: `url(${BlogBanner})`,
          backgroundPosition: 'top 50px center',
          backgroundSize: '2000px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth='md'>
          <Box>
            <Box textAlign='center' mb={1}>
              <Box fontSize='48px'>
                <ColorText fontWeight='bold'>博客</ColorText>
              </Box>
            </Box>
            <Box textAlign='center' mb={{md: 30, xs: 15}}>
              博观而约取，厚积而薄发
            </Box>
            <Box
              mb={{md: 30, xs: 15}}
              fontSize={12}
              sx={{
                '& button': {
                  margin: '0 8px 16px',
                },
              }}
            >
              {data.allStrapiCategory.edges.map(category => (
                <Button variant='contained' color='inherit'>
                  {category.node.name}
                </Button>
              ))}
            </Box>
          </Box>
          {data.allStrapiArticle.edges.map(article => (
            <Box mb={16}>
              <Grid container flexDirection={{xs: 'row', md: 'row-reverse'}}>
                <Grid item md={4}>
                  <Box ml={{md: 5, xs: 0}} mb={4}>
                    <img
                      src={`http://localhost:1337${article.node.cover.formats.small.url}`}
                      height={160}
                      alt='thumbnail'
                      style={{display: 'block', width: '100%', objectFit: 'cover'}}
                    />
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Typography
                    variant='h5'
                    fontSize='24px'
                    mb={3}
                    component='a'
                    display='block'
                    href={`/article/${article.node.strapiId}`}
                  >
                    {article.node.title}
                  </Typography>
                  <Typography variant='body1' fontSize='16px' color='rgba(255, 255, 255, 0.8)'>
                    {article.node.content.slice(0, 80)}
                  </Typography>
                  <Typography variant='body1' mt={5}>
                    <Moment date={article.node.published_at} format='YYYY.MM.DD' />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>
    </Layout>
  )
}
export default BlogPage
