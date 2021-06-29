import React, {useEffect, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import CommunityBanner from '../images/community_bg.png'
import CommunityBG2 from '../images/community_bg_2.png'
import CommunityBG3 from '../images/community_bg_3.png'
import First from '../images/1.png'
import {Card, Divider, HoverColorText, ReadMore} from '../components/style'
import {graphql} from 'gatsby'
import Union from '../images/union.svg'
import Right from '../images/right.svg'
import Smile from '../images/smile.svg'
import BG from '../images/community_bg.svg'
import {Octokit} from '@octokit/rest'
import Moment from 'react-moment'

export const pageQuery = graphql`
  query {
    allStrapiActivity {
      edges {
        node {
          id
          title
          content
          published_at
          link
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

const CommunityPage = ({data}) => {
  const [users, setUsers] = useState()

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
        backgroundImage: `url(${CommunityBanner}), url(${CommunityBG2}), url(${CommunityBG3})`,
        backgroundPosition: 'center top, center 1200px, center 1500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1837px 610px, 2000px 500px, 2000px 1011px',
      }}
    >
      <Layout>
        <Container maxWidth='lg'>
          <SEO title='Community' />
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
                  <Grid item md={8} xs={12}>
                    {data.allStrapiActivity.edges.slice(0, 1).map(activity => (
                      <Card
                        link={activity.node.link}
                        singleTitle={true}
                        title={activity.node.title}
                        desc={activity.node.content.slice(0, 80)}
                        date={activity.node.published_at}
                        img={`http://localhost:1337${activity.node.cover.url}`}
                      />
                    ))}
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      p={6}
                      sx={{
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        borderRadius: '12px',
                      }}
                    >
                      {data.allStrapiActivity.edges.slice(1).map(activity => (
                        <>
                          <Typography variant='body1' mb={1}>
                            <Moment date={activity.node.published_at} format='YYYY.MM.DD' />
                          </Typography>
                          <Typography variant='subtitle1' component='a' href={activity.node.link} target='_blank'>
                            <HoverColorText>{activity.node.title}</HoverColorText>
                          </Typography>
                          <Divider my={4} />
                        </>
                      ))}
                      <ReadMore to='/' my={6} />
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
              <Box style={{background: `url(${BG})`}}>
                <Grid container spacing={4}>
                  <Grid item md={4} xs={12}>
                    <Box
                      borderRadius='16px'
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
                      <ReadMore to='/' />
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      borderRadius='16px'
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
                      <ReadMore to='/' />
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box
                      borderRadius='16px'
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
                      <ReadMore to='/' />
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
                {users?.slice(0, 14).map(user => (
                  <Grid
                    item
                    md={2}
                    sm={4}
                    xs={6}
                    sx={{
                      textAlign: {md: 'left', xs: 'left'},
                    }}
                  >
                    <a href={user.html_url} target='_blank' rel='noopener noreferrer'>
                      <img src={user.avatar_url} width='120' alt='' style={{borderRadius: '16px'}} />
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
export default CommunityPage
