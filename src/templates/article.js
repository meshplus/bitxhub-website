import React from 'react'
import {graphql} from 'gatsby'

import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import {Box, Button, Container, createStyles, makeStyles, Typography} from '@material-ui/core'
import SEO from '../components/seo'
import {useHelperStyles} from '../components/style'

const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
    },
    content: {
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '26px',
      '& img': {
        display: 'block',
        maxWidth: '100%',
        margin: '25px 0',
      },
    },
  })
)

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: {eq: $id}) {
      strapiId
      title
      content
      published_at
      authors {
        username
      }
      categories {
        name
      }
    }
  }
`

const Article = ({data}) => {
  const classes = useStyles()
  const helperClasses = useHelperStyles()
  const article = data.strapiArticle

  return (
    <Layout>
      <SEO title={article.title} />
      <Container maxWidth='md'>
        <Box pt={20} px={{md: 10, xs: 0}}>
          <Box className={classes.main} p={{md: 15}}>
            <Typography variant='h4' textAlign='center' mb={4}>
              {article.title}
            </Typography>
            <Box className={classes.content}>
              <ReactMarkdown children={article.content} transformImageUri={uri => (uri.startsWith('http') ? uri : `http://localhost:1337${uri}`)} />
            </Box>
            <Box my={6}>
              {article.categories.map(category => (
                <Button variant='contained' color='inherit' style={{marginRight: '10px'}}>
                  {category.name}
                </Button>
              ))}
            </Box>
            <Box>
              {article.authors.map(author => (
                <Box display='flex' alignItems='center'>
                  <Typography display='inline' className={helperClasses.title} mr={2}>
                    {author.username}
                  </Typography>
                  <Typography variant='body2' mr={2}>
                    发表于
                  </Typography>
                  <Typography variant='subtitle1'>{new Date(article.published_at).toDateString()}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Article
