import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {Card, ColorText, HoverColorText, ReadMoreWithoutStyle, ReadMoreWithoutStyleRedirect} from '../components/style'
import {graphql, Link} from 'gatsby'
import Union from '../images/union.svg'
import Right from '../images/right.svg'
import Smile from '../images/smile.svg'
import BG from '../images/community_bg.svg'
import {Octokit} from '@octokit/rest'
import Moment from 'react-moment'
import CommunityCard from '../images/community_card.png'
import CommunityCardHover from '../images/community_card_hover.png'
import {theme} from '../components/theme'
import {useProgressiveImage} from '../hooks'
import BG1T from '../images/community_bg_tn.png'
import BG2T from '../images/community_bg_2_tn.png'
import BG3T from '../images/community_bg_3_tn.png'
import {getStaticUrl} from '../helpers'
import {Fade} from 'react-awesome-reveal'

export const pageQuery = graphql`
  query {
    allStrapiActivity(sort: {fields: [date], order: DESC}) {
      edges {
        node {
          id
          title
          content
          published_at
          link
          date
          cover {
            formats {
              thumbnail {
                url
              }
            }
            url
          }
        }
      }
    }
    allStrapiArticle(filter: {strapiId: {in: [7, 2, 1]}}) {
      edges {
        node {
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
    }
  }
`

const CommunityPage = ({data}) => {
  const [users, setUsers] = useState()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const bg1 = useProgressiveImage(BG1T, getStaticUrl('community_bg.png'))
  const bg2 = useProgressiveImage(BG2T, getStaticUrl('community_bg_2.png'))
  const bg3 = useProgressiveImage(BG3T, getStaticUrl('community_bg_3.png'))

  useEffect(() => {
    const octokit = new Octokit()
    octokit.rest.repos
      .listContributors({
        owner: 'meshplus',
        repo: 'bitxhub',
      })
      .then(res => {
        console.log(res)
        setUsers(res.data)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg1}), url(${bg2}), url(${bg3})`,
        backgroundPosition: 'center top, center 1200px, center 1500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1837px 610px, 2000px 500px, 2000px 1011px',
      }}
    >
      <Layout>
        <Container maxWidth='lg'>
          <SEO title='Community' />
          <Box pt={35}>
            {isMobile ? (
              <Fade direction='up' duration={500}>
                <Typography variant='h3' mb={3} textAlign='center'>
                  打通价值孤岛
                </Typography>
                <Typography variant='h3' mb={3} textAlign='center'>
                  从开源开始
                </Typography>
              </Fade>
            ) : (
              <Fade direction='up' duration={500}>
                <Typography variant='h3' mb={3}>
                  打通价值孤岛 ，从开源开始
                </Typography>
              </Fade>
            )}
            <Fade direction='up' duration={500}>
              <Typography
                variant='body1'
                mb={8}
                mt={{md: 0, xs: 4}}
                className='description'
                textAlign={{md: 'left', xs: 'center'}}
              >
                BitXHub的核心技术完全开源，加入我们一起构建区块链跨链世界
              </Typography>
            </Fade>
            <Fade direction='up' duration={500}>
              <Box textAlign={{md: 'left', xs: 'center'}}>
                <Button variant='outlined' size='large'>
                  <Link to='/article/4'>
                    成为贡献者
                    <ColorText ml={2}>
                      <i className='icon icon-chevron-right' />
                    </ColorText>
                  </Link>
                </Button>
              </Box>
            </Fade>
            <Box mt={20}>
              <Fade direction='up' duration={500}>
                <Typography variant='h4' mb={3}>
                  社区活动
                </Typography>
              </Fade>
              <Box mt={8}>
                <Grid container spacing={4}>
                  <Grid item md={8} xs={12}>
                    {data.allStrapiActivity.edges.slice(0, 1).map(activity => (
                      <Card
                        link={activity.node.link}
                        singleTitle={true}
                        title={activity.node.title}
                        desc={activity.node.content.slice(0, 80)}
                        date={activity.node.date}
                        img={`${process.env.STRAPI_API_URL}${activity.node.cover.url}`}
                      />
                    ))}
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      px={6}
                      pt={10}
                      pb='45px'
                      sx={{
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '12px',
                        '& .title': {
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        },
                        '& .item': {
                          '&:not(:last-child)': {
                            borderBottom: '1px solid rgba(71, 71, 71, 0.5)',
                            mb: 5,
                            pb: 5,
                          },
                        },
                        '& .date': {
                          fontFamily: '"Titillium Web","Roboto","Helvetica","Arial",sans-serif !important',
                          fontWeight: 700,
                        },
                      }}
                    >
                      {data.allStrapiActivity.edges.slice(1).map(activity => (
                        <Box className='item'>
                          <Typography variant='body1' mb={1}>
                            <Moment date={activity.node.date} format='YYYY.MM.DD' className='date' />
                          </Typography>
                          <Typography variant='subtitle1' component='a' href={activity.node.link} target='_blank'>
                            <HoverColorText maxHeight='28px' overflow='hidden' className='title'>
                              {activity.node.title}
                            </HoverColorText>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Fade direction='up' duration={500}>
                <Typography variant='h4' mt={20} mb={3}>
                  新手任务
                </Typography>
              </Fade>
              <Typography variant='body1' mb={8}>
                加入我们，贡献你的力量
              </Typography>
              <Box
                style={{background: `url(${BG})`}}
                sx={{
                  '& .item': {
                    zIndex: 4,
                    padding: '25px',
                    position: 'relative',
                    background: `url(${CommunityCardHover})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    '&:after': {
                      content: '" "',
                      display: 'block',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 1,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 25px bottom 25px',
                    },
                    '&:hover': {
                      backgroundImage: `url(${CommunityCard})`,
                      '& .read-more, & .read-more a': {
                        background: {md: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)', xs: ''},
                        color: {md: 'transparent', xs: '#4f96ff'},
                        WebkitBackgroundClip: {md: 'text !important', xs: ''},
                        WebkitTextFillColor: {md: 'transparent', xs: ''},
                      },
                    },
                  },
                }}
              >
                <Grid container spacing={4}>
                  <Grid item md={4} xs={12}>
                    <Box className='item' borderRadius='16px' sx={{'&:after': {backgroundImage: `url(${Union})`}}}>
                      <Box zIndex={4} position='relative'>
                        <Typography variant='subtitle1'>贡献指南</Typography>
                        <Typography variant='body2' mb={6}>
                          按照指南，提交你的Issue和PR
                        </Typography>
                        <ReadMoreWithoutStyle to='/article/4' className='read-more' />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      className='item'
                      borderRadius='16px'
                      p={4}
                      sx={{'&:after': {backgroundImage: `url(${Right})`}}}
                    >
                      <Box zIndex={4} position='relative'>
                        <Typography variant='subtitle1'>修复BUG</Typography>
                        <Typography variant='body2' mb={6}>
                          解决已发现的Bug，保护BitXHub的安全
                        </Typography>
                        <ReadMoreWithoutStyleRedirect
                          to='https://github.com/meshplus/bitxhub/issues?q=is%3Aissue+is%3Aopen+label%3Abug'
                          target='_blank'
                          className='read-more'
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      className='item'
                      borderRadius='16px'
                      p={4}
                      sx={{'&:after': {backgroundImage: `url(${Smile})`}}}
                    >
                      <Box zIndex={4} position='relative'>
                        <Typography variant='subtitle1'>产品优化</Typography>
                        <Typography variant='body2' mb={6}>
                          完成新功能，不断优化产品
                        </Typography>
                        <ReadMoreWithoutStyleRedirect
                          to='https://github.com/meshplus/bitxhub/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22'
                          target='_blank'
                          className='read-more'
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Fade direction='up' duration={500}>
                <Typography variant='h4' mt={20} mb={3}>
                  社区之星
                </Typography>
              </Fade>
              <Typography variant='body1' mb={8}>
                感谢杰出的社区贡献者
              </Typography>
              <Grid container>
                {users?.slice(0, 12).map(user => (
                  <Grid
                    key={user.html_url}
                    item
                    md={2}
                    sm={4}
                    xs={4}
                    sx={{
                      textAlign: {md: 'left', xs: 'left'},
                      '& a': {
                        display: 'block',
                        mb: 10,
                        textAlign: {md: 'left', xs: 'center'},
                      },
                      '& img': {
                        width: {md: '100px', xs: '80px'},
                      },
                      '& .MuiTypography-subtitle1': {
                        fontSize: {md: '16px', xs: '14px'},
                        color: '#fff',
                      },
                    }}
                  >
                    <a href={user.html_url} target='_blank' rel='noopener noreferrer'>
                      <img src={user.avatar_url} alt='user' style={{borderRadius: '16px'}} />
                      <Typography variant='subtitle1' mt={2}>
                        {user.login}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
              <Fade direction='up' duration={500}>
                <Typography variant='h4' mt={20} mb={8}>
                  社区学习库
                </Typography>
              </Fade>
              <Grid container spacing={10}>
                {data.allStrapiArticle.edges.map(article => (
                  <Grid item md={4} xs={12}>
                    <Card
                      title={article.node.title}
                      link={`/article/${article.node.strapiId}`}
                      date={article.node.published_at}
                      img={`${process.env.STRAPI_API_URL}${article.node.cover.formats.small.url}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Layout>
    </Box>
  )
}
export default CommunityPage
