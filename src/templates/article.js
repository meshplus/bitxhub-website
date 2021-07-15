import React from 'react'
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import {Box, Button, Container, Typography} from '@material-ui/core'
import SEO from '../components/seo'
import {ColorText} from '../components/style'
import BlogBG from '../images/article_bg.png'
import Dot from '../images/dot.png'
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
        pb={{md: 10, xs: 5}}
        mt={{md: 17, xs: 11}}
        sx={{
          backgroundImage: `linear-gradient(180deg , rgb(26 33 39 / 69%) 0%, #000 100%), url(${process.env.STRAPI_API_URL}${article.cover.formats.small.url})`,
          backgroundPosition: 'center top, center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%, 100%',
          '& .date': {
            fontFamily: '"Titillium Web","Roboto","Helvetica","Arial",sans-serif !important',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: {md: '16px', xs: '12px'},
          },
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h4'
            mb={4}
            color='#1DB5F4'
            fontFamily='"Roboto","Helvetica","Arial",sans-serif !important'
            fontSize={{md: '2.125rem', xs: '20px'}}
          >
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
                <Typography variant='body2' mr={1}>
                  发表于
                </Typography>
                <Typography variant='subtitle1' className='date'>
                  <Moment date={article.published_at} format='YYYY.MM.DD' />
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box
        pt={8}
        pb={10}
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
            p={{md: 15, xs: 3}}
            sx={{
              border: '2px solid #262D3D',
              borderRadius: '16px',
              background: '#151B2B',
            }}
          >
            <Box
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 300,
                lineHeight: '30px',
                fontSize: {md: '16px', xs: '14px'},
                '& strong': {color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500},
                '& h1, h2, h3, h4, h5, h6': {
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                  margin: '35px 0 20px',
                  color: '#fff',
                  fontWeight: 500,
                },
                '& pre': {
                  whiteSpace: 'pre-wrap',
                  background: 'rgba(255, 255, 255, 0.09)',
                  padding: '16px 24px',
                  overflowX: 'scroll',
                },
                '& code': {
                  fontFamily: 'Source Code Pro',
                },
                '& blockquote': {
                  wordBreak: 'break-all',
                  margin: '30px 0 30px 0',
                  paddingLeft: '15px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  borderLeft: '4px solid #002C51',
                },
                '& img': {
                  display: 'block',
                  maxWidth: '100%',
                  margin: '25px auto',
                },
                '& ul, & ol': {
                  margin: '24px 0',
                  lineHeight: '26px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  '& li': {
                    paddingLeft: '12px',
                  },
                  '& p': {
                    margin: '0 0 8px',
                  },
                },
              }}
            >
              <ReactMarkdown
                children={article.content}
                transformImageUri={uri => (uri.startsWith('http') ? uri : `${process.env.STRAPI_API_URL}${uri}`)}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Article
