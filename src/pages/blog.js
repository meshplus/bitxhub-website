import {graphql} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, makeStyles, Typography} from '@material-ui/core'
import {createStyles} from '@material-ui/styles'
import BlogBanner from '../images/blog_banner.svg'

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
    },
    maxHeight: {
      height: '100%',
    },
    title: {
      background: '-webkit-linear-gradient(right, #01E1FF, #7DBCFC)',
      color: 'transparent',
      fontSize: '72px',
      fontWeight: 800,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    bg: {
      backgroundImage: `url(${BlogBanner})`,
      backgroundPosition: 'top 50px center',
      backgroundSize: '75%',
      backgroundRepeat: 'no-repeat',
    },
    categories: {
      fontSize: '12px',
      '& button': {
        margin: '0 8px 10px',
      },
    },
    tn: {},
  })
)

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
  const classes = useStyles()

  return (
    <Layout>
      <SEO title='Blog' />
      <Box className={classes.bg} pt={38}>
        <Container maxWidth='md'>
          <Box px={{md: 10, sm: 0}}>
            <Box textAlign='center' mb={1}>
              <Box fontSize='48px' className={classes.title} display='inline-block'>
                博客
              </Box>
            </Box>
            <Box textAlign='center' mb={30}>
              博观而约取，厚积而薄发
            </Box>
            <Box mb={30} className={classes.categories}>
              {data.allStrapiCategory.edges.map(category => (
                <Button variant='contained' color='inherit'>
                  {category.node.name}
                </Button>
              ))}
            </Box>
          </Box>
          {data.allStrapiArticle.edges.map(article => (
            <Box mb={16} px={10}>
              <Grid container>
                <Grid item md={8}>
                  <Typography variant='h5' fontSize='24px' mb={3} component='a' display='block' href={`/article/${article.node.strapiId}`}>
                    {article.node.title}
                    {console.log(article)}
                  </Typography>
                  <Typography variant='body1' fontSize='16px' color='rgba(255, 255, 255, 0.8)'>
                    {article.node.content.slice(0, 80)}
                  </Typography>
                  <Box mt={5} color='#828282' fontSize='16px'>
                    {new Date(article.node.published_at).toDateString()}
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box ml={5}>
                    <img src={`http://localhost:1337${article.node.cover.formats.small.url}`} height={160} alt='thumbnail' style={{display: 'block', width: '100%', objectFit: 'cover'}} />
                  </Box>
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
