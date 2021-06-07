import {graphql, StaticQuery} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, createStyles, Grid, makeStyles, Typography} from '@material-ui/core'
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
      backgroundPosition: 'top center',
      backgroundSize: '70%',
      backgroundRepeat: 'no-repeat',
    },
  })
)

export const pageQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          published_at
          cover {
            formats {
              thumbnail {
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
      <SEO title='Home' />
      <Box className={classes.bg} pt={20}>
        <Box textAlign='center' fontSize='48px' className={classes.title}>
          博客
        </Box>
        <Box textAlign='center' mb={8}>
          博观而约取，厚积而薄发
        </Box>
        <Box mb={30}>
          <Button variant='contained'>全部类型</Button>
          <Button variant='contained'>技术类型一</Button>
          <Button variant='contained'>技术类型二</Button>
          <Button variant='contained'>技术类型三</Button>
          <Button variant='contained'>技术类型四</Button>
        </Box>
        {/*<StaticQuery*/}
        {/*  query={pageQuery}*/}
        {/*  render={data => (*/}
        {/*    <>*/}
        {data.allStrapiArticle.edges.map(article => (
          <Box mb={16} px={30}>
            <Grid container>
              <Grid item md={9}>
                <Typography variant='h5' fontSize='24px' mb={3}>
                  {article.node.title}
                </Typography>
                <Typography variant='body1' fontSize='16px' color='rgba(255, 255, 255, 0.8)'>
                  {article.node.content.slice(0, 80)}
                </Typography>
                <Box mt={5} color='#828282' fontSize='16px'>
                  {new Date(article.node.published_at).toDateString()}
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box ml={5}>
                  <img src={`http://localhost:1337${article.node.cover.formats.thumbnail.url}`} height={200} alt='thumbnail' />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
        {/*</>*/}
        {/*)}*/}
        {/*/>*/}
      </Box>
    </Layout>
  )
}
export default BlogPage
