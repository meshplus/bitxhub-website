import React from 'react'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import {Box, Button, Container, Typography} from '@material-ui/core'
import SEO from '../components/seo'
import {ColorText} from '../components/style'
import BlogBG from '../images/community_bg.png'
import Dot from '../images/dot.png'
import Layer from '../images/layer.png'
import Moment from 'react-moment'

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
      cover {
        formats {
          small {
            url
          }
        }
      }
      categories {
        name
      }
    }
  }
`

const Article = ({data}) => {
  const article = data.strapiArticle

  return (
    <Layout>
      <SEO title={article.title} />
      <Box
        pt={30}
        pb={10}
        mt={17}
        sx={{
          // backgroundImage: `url(http://localhost:1337${article.cover.formats.small.url}), url(${Layer})`,
          backgroundImage: `linear-gradient(180deg , rgb(26 33 39 / 69%) 0%, #000 100%), url(http://localhost:1337${article.cover.formats.small.url})`,
          backgroundPosition: 'center top, center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%, 100%',
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h4' mb={4} color='primary'>
            {article.title}
          </Typography>
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
                <Typography display='inline' mr={2}>
                  <ColorText>{author.username}</ColorText>
                </Typography>
                <Typography variant='body2' mr={2}>
                  发表于
                </Typography>
                <Typography variant='subtitle1'>
                  <Moment date={article.published_at} format='YYYY.MM.DD' />
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box
        pt={10}
        px={{md: 10, xs: 0}}
        sx={{
          backgroundImage: `url(${BlogBG}), url(${Dot})`,
          backgroundPosition: 'center 400px, center 300px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '2000px, 2000px',
          backgroundAttachment: 'fixed, fixed',
        }}
      >
        <Container maxWidth='md'>
          <Box
            mb={20}
            p={{md: 15}}
            sx={{
              border: '2px solid #262D3D',
              borderRadius: '16px',
              background: '#151B2B',
            }}
          >
            <Box
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '26px',
                '& img': {
                  display: 'block',
                  maxWidth: '100%',
                  margin: '25px 0',
                },
              }}
            >
              <ReactMarkdown
                children={article.content}
                transformImageUri={uri => (uri.startsWith('http') ? uri : `http://localhost:1337${uri}`)}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Article
