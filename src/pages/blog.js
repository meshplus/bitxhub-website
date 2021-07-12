import {graphql} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import BlogBanner from '../images/blog_bg.png'
import {ColorText, Divider} from '../components/style'
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
  if (typeof window === undefined) return null
  return (
    <Layout>
      <SEO title='Blog' />
      <Box
        pt={{md: 38, xs: 28}}
        sx={{
          backgroundImage: `url(${BlogBanner})`,
          backgroundPosition: 'top 50px center',
          backgroundSize: {md: '2000px', xs: '1000px'},
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
            <Box my={20}>
              <Divider />
            </Box>
            <Box
              // mb={{md: 30, xs: 15}}
              fontSize={12}
              sx={{
                '& button': {
                  margin: '0 8px 16px',
                },
              }}
            >
              {/*{data.allStrapiCategory.edges.map(category => (*/}
              {/*  <Button variant='contained' color='inherit'>*/}
              {/*    {category.node.name}*/}
              {/*  </Button>*/}
              {/*))}*/}
            </Box>
          </Box>
          <Box
            sx={{
              px: {md: 12, xs: 0},
              '& .article:not(:last-child)': {
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              },
              '& .MuiTypography-h5': {
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
              },
              '& .title': {
                fontWeight: 400,
              },
              '& .content': {
                height: '20px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              },
              '& .date': {
                fontFamily: '"Titillium Web","Roboto","Helvetica","Arial",sans-serif !important',
              },
            }}
          >
            {data.allStrapiArticle.edges.map(article => (
              <Box mb={8} pb={8} className='article'>
                <Grid container flexDirection={{xs: 'row', md: 'row-reverse'}}>
                  <Grid item md={4}>
                    <Box ml={{md: 5, xs: 0}} mb={{md: 0, xs: 4}}>
                      <img
                        src={`${process.env.STRAPI_API_URL}${article.node.cover.formats.small.url}`}
                        height={160}
                        alt='thumbnail'
                        style={{display: 'block', width: '100%', objectFit: 'cover'}}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={8} display='flex' flexDirection='column' minHeight={{md: '160px', xs: '100px'}}>
                    <Typography
                      className='title'
                      variant='h5'
                      fontSize='24px'
                      mb={3}
                      component='a'
                      display='block'
                      href={`/article/${article.node.strapiId}`}
                    >
                      {article.node.title}
                    </Typography>
                    <Typography variant='body1' fontSize='16px' color='rgba(255, 255, 255, 0.8)' className='content'>
                      {article.node.content.slice(0, 80)}
                    </Typography>
                    <Typography variant='body1' mt={6} className='date' mt='auto'>
                      <Moment date={article.node.published_at} format='YYYY.MM.DD' />
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
export default BlogPage
