import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, createStyles, Grid, makeStyles, Typography} from '@material-ui/core'
import CommunityBanner from '../images/community_banner.svg'
import First from '../images/1.png'
import Link from 'gatsby-link'
import {Card, Divider, useCustomStyles} from '../components/style'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {graphql} from 'gatsby'
import Union from '../images/union.svg'
import Right from '../images/right.svg'
import Smile from '../images/smile.svg'
import BG from '../images/community_bg.svg'
import {Octokit} from '@octokit/rest'

export const pageQuery = graphql`
  query {
    allStrapiActivity {
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
            url
          }
        }
      }
    }
  }
`

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
      backgroundImage: `url(${CommunityBanner})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    },
    list: {
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '12px',
    },
    card: {
      borderRadius: '16px',
    },
    border: {
      borderRadius: '16px',
    },
  })
)

const BlogPage = ({data}) => {
  const classes = useStyles()
  const custom = useCustomStyles()
  const [users, setUsers] = useState()

  useEffect(() => {
    console.log(222)
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
    <Box className={classes.bg}>
      <Layout>
        <Container maxWidth='lg'>
          <SEO title='Home' />
          <Box pt={35}>
            <Typography variant='h3' mb={3}>
              打通价值孤岛 ，从开源开始
            </Typography>
            <Typography variant='subtitle1' mb={8}>
              BitXHub的核心技术完全开源，加入我们一起构建区块链跨链世界
            </Typography>
            <Button variant='outlined' size='large'>
              成为贡献者
            </Button>
            <Box mt={20}>
              <Typography variant='h4' mb={3}>
                丰富的社区活动
              </Typography>
              <Typography variant='subtitle1'>查看最新的活动</Typography>
              <Box mt={8}>
                <Grid container spacing={4}>
                  <Grid item md={8}>
                    {data.allStrapiActivity.edges.slice(0, 1).map(activity => (
                      <Card
                        singleTitle={true}
                        title={activity.node.title}
                        desc={activity.node.content.slice(0, 80)}
                        date={new Date(activity.node.published_at).toDateString()}
                        img={`http://localhost:1337${activity.node.cover.url}`}
                      />
                    ))}
                  </Grid>
                  <Grid item md={4}>
                    <Box className={classes.list} p={6}>
                      {data.allStrapiActivity.edges.slice(1).map(article => (
                        <>
                          <Typography variant='body1'>2021.02.01</Typography>
                          <Typography variant='subtitle1'>技术沙龙直播间——跨链开源一周年</Typography>
                          <Divider my={4} />
                        </>
                      ))}
                      <Box my={6}>
                        <Link to={'/'} className={custom.link}>
                          查看更多
                          <ChevronRightIcon />
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant='h4' mt={20} mb={3}>
                新手任务
              </Typography>
              <Typography variant='subtitle1' mb={8}>
                可以提供的开发人物
              </Typography>
              <Box
                style={{
                  background: `url(${BG})`,
                }}
              >
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Box
                      className={classes.card}
                      p={4}
                      style={{
                        background: `url(${Union}) right 20px bottom 20px, linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)`,
                        backgroundRepeat: 'no-repeat, repeat',
                      }}
                    >
                      <Typography variant='subtitle1'>提交漏洞</Typography>
                      <Typography variant='body2' mb={6}>
                        提交你发现的漏洞，保护bitxhub的安全
                      </Typography>
                      <Box>
                        <Link to={'/'} className={custom.link}>
                          查看更多
                          <ChevronRightIcon />
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box
                      className={classes.card}
                      p={4}
                      style={{
                        background: `url(${Right}) right 20px bottom 20px, linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)`,
                        backgroundRepeat: 'no-repeat, repeat',
                      }}
                    >
                      <Typography variant='subtitle1'>提交漏洞</Typography>
                      <Typography variant='body2' mb={6}>
                        提交你发现的漏洞，保护bitxhub的安全
                      </Typography>
                      <Box>
                        <Link to={'/'} className={custom.link}>
                          查看更多
                          <ChevronRightIcon />
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box
                      className={classes.card}
                      p={4}
                      style={{
                        background: `url(${Smile}) right 20px bottom 20px, linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)`,
                        backgroundRepeat: 'no-repeat, repeat',
                      }}
                    >
                      <Typography variant='subtitle1'>提供协助</Typography>
                      <Typography variant='body2' mb={6}>
                        提交你发现的漏洞，保护bitxhub的安全
                      </Typography>
                      <Box>
                        <Link to={'/'} className={custom.link}>
                          查看更多
                          <ChevronRightIcon />
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant='h4' mt={20} mb={3}>
                新手任务
              </Typography>
              <Typography variant='subtitle1' mb={8}>
                可以提供的开发人物
              </Typography>
              <Grid container spacing={10}>
                {users?.slice(0, 6).map(user => (
                  <Grid item md={2}>
                    <a href={user.html_url} target='_blank'>
                      <img src={user.avatar_url} width='120' alt='' className={classes.border} />
                      <Typography variant='subtitle2' mt={4}>
                        {user.login}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
              <Typography variant='h4' mt={20} mb={8}>
                学习资料
              </Typography>
              <Grid container spacing={10}>
                <Grid item md={4}>
                  <Card title='关于跨链技术的分析和思考' date='2020.02.01' img={First} />
                </Grid>
                <Grid item md={4}>
                  <Card title='IPFS存储一致性难题？IPFS -Cluster帮你解决' date='2020.02.01' img={First} />
                </Grid>
                <Grid item md={4}>
                  <Card title='关于跨链技术的分析和思考' date='2020.02.01' img={First} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Layout>
    </Box>
  )
}
export default BlogPage
