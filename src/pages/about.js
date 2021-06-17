import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import Group from '../images/group.png'
import GZH from '../images/gzh.png'
import BG from '../images/about_bg.png'
import GrowBG from '../images/about_grow_bg.png'
import ContactBG from '../images/about_contact_bg.png'
import SmallBall from '../images/about_sm_ball.png'

const AboutPage = ({data}) => {
  return (
    <Box>
      <SEO title='关于我们' />
      <Layout>
        <Box
          pt={50}
          pb={30}
          sx={{
            backgroundImage: `url(${BG}), url(${GrowBG}), url(${ContactBG})`,
            backgroundSize: '1991px 681px, 2000px 1500px, 2000px 1630px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -60px, center 800px, center bottom',
          }}
        >
          <Container maxWidth='lg'>
            <Typography variant='h3' mb={8} textAlign='center'>
              关于我们
            </Typography>
            <Typography variant='body2' textAlign='center' px={{xs: 3, md: 20}}>
              我们是趣链科技BH团队，依托技术先发优势不断探索，并为用户提供在信息和资产交换场景下，专注于多方共治理、安全高可用、通用易扩展、留痕可追溯的跨链服务，真正实现万链互联、价值互通的区块链互联网。
            </Typography>
            <Box mt={{xs: 10, md: 40}}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Typography variant='h2'>
                    <ColorText>跨链</ColorText>
                    <Box>行业领导者</Box>
                  </Typography>
                </Grid>
                <Grid item md={7}>
                  <Box display='flex' alignItems='center' mb={8} ml={10}>
                    <img src={SmallBall} alt='ball' width={139} />
                    <Box>
                      <Typography variant='subtitle1'>参与测评</Typography>
                      <Typography variant='body2'>首批通过《区块链技术金融应用》评估规则</Typography>
                    </Box>
                  </Box>
                  <Box display='flex' alignItems='center' mb={8}>
                    <img src={SmallBall} alt='ball' width={139} />
                    <Box>
                      <Typography variant='subtitle1'>参与测评</Typography>
                      <Typography variant='body2'>首批通过《区块链技术金融应用》评估规则</Typography>
                    </Box>
                  </Box>
                  <Box display='flex' alignItems='center' ml={10}>
                    <img src={SmallBall} alt='ball' width={139} />
                    <Box>
                      <Typography variant='subtitle1'>专利&论文</Typography>
                      <Typography variant='body2'>
                        在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box pt={20} pb={200}>
              <Container maxWidth='lg'>
                <Grid container>
                  <Grid item md={6}>
                    <Typography variant='h3' mb={2}>
                      我们的成长历程
                    </Typography>
                    <Typography variant='body2'>
                      我们专注于多方共治理、安全高可用、通用易扩展、留痕可追溯的跨链服务，真正实现万链互联、价值互通的区块链互联网。
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box py={20}>
              <Grid container>
                <Grid item md={6}>
                  <Typography variant='h3'>
                    <Box>有任何问题</Box>
                    欢迎联系我们
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant='h6' mb={4}>
                    公司总部
                  </Typography>
                  <Typography variant='subtitle2' mb={2}>
                    杭州市滨江区丹枫路399号2号楼A楼2001室
                  </Typography>
                  <Typography variant='subtitle2'>电话：0571-89995238</Typography>
                  <Typography variant='h6' mt={8} mb={4}>
                    邮箱
                  </Typography>
                  <Typography variant='subtitle2'>杭州市滨江区丹枫路399号2号楼A楼2001室</Typography>
                  <Typography variant='h6' mt={4} mb={4}>
                    微信公众号
                  </Typography>
                  <Grid container>
                    <Grid item md={4}>
                      <Typography variant='subtitle2' mb={2}>
                        趣链科技公众号
                      </Typography>
                      <img src={Group} alt='group' width={145} />
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant='subtitle2' mb={2}>
                        进入开源技术交流群
                      </Typography>
                      <img src={GZH} alt='gzh' width={145} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default AboutPage
