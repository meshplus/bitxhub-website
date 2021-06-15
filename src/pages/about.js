import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import Banner from '../images/tech_banner.svg'
import {ColorText} from '../components/style'
import Group from '../images/group.png'
import GZH from '../images/gzh.png'

const AboutPage = ({data}) => {
  return (
    <Box
      mt={10}
      sx={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <SEO title='Home' />
      <Layout>
        <Container maxWidth='lg'>
          <Typography variant='h3' mb={8} mt={40} textAlign='center'>
            关于我们
          </Typography>
          <Typography variant='body2' textAlign='center' px={20}>
            我们是趣链科技BH团队，依托技术先发优势不断探索，并为用户提供在信息和资产交换场景下，专注于多方共治理、安全高可用、通用易扩展、留痕可追溯的跨链服务，真正实现万链互联、价值互通的区块链互联网。
          </Typography>
          <Box py={40}>
            <Grid container>
              <Grid item md={4}>
                <Typography variant='h2'>
                  <ColorText display='block'>跨链</ColorText>
                  行业领导者
                </Typography>
              </Grid>
              <Grid item md={8}></Grid>
            </Grid>
          </Box>
          <Box py={30}>
            <Grid container>
              <Grid item md={6}>
                <Typography variant='h3' mb={2}>
                  我们的成长历程
                </Typography>
                <Typography variant='body2'>我们专注于多方共治理、安全高可用、通用易扩展、留痕可追溯的跨链服务，真正实现万链互联、价值互通的区块链互联网。</Typography>
              </Grid>
            </Grid>
          </Box>
          {/* */}
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
      </Layout>
    </Box>
  )
}
export default AboutPage
