import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import BG1 from '../images/quick_bg_1.png'
import BG2 from '../images/quick_bg_2.png'
import Quick1 from '../images/quick_1.png'
import One from '../images/01.png'
import Two from '../images/02.png'
import Third from '../images/03.png'
import Arrow from '../images/arrow.png'

const QuickPage = ({data}) => {
  return (
    <Box>
      <SEO title='快速开始' />
      <Layout>
        <Box
          pt={20}
          pb={30}
          sx={{
            backgroundImage: `url(${BG1}), url(${BG2})`,
            backgroundSize: '2000px 1264px, 2000px 770px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -50px, center 980px',
          }}
        >
          <Container maxWidth='lg'>
            <Box pt={10} mb={40}>
              <Typography variant='h3' mb={4}>
                快速开始
              </Typography>
              <Typography variant='subtitle2' pr={25} mb={8} maxWidth='530px'>
                通过Goduck可以一键搭建BitxHub快速体验跨链流程,
                想深入了解BitXHub跨链技术的小伙伴也可以通过快速开始文档分步搭建。
              </Typography>
            </Box>
            <Box mt={{xs: 5, md: 10}}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <Typography variant='h3' mb={4}>
                      跨链体验
                    </Typography>
                    <Typography variant='subtitle2' pr={25} mb={8}>
                      通过Goduck运维小工具来快速体验跨链流程。
                    </Typography>
                    <Button variant='outlined' color='primary' size='large'>
                      立即使用
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center'>
                  <img src={Quick1} alt='tool' height={330} />
                </Grid>
              </Grid>
            </Box>
            <Box pt={50} pb={10}>
              <Typography variant='h3' textAlign='center' mb={2}>
                快速开始
              </Typography>
              <Typography variant='subtitle2' textAlign='center' mb={11}>
                通过单独搭建bitxhub各个组件, 以深入了解BitXHub
              </Typography>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box
                  p={10}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '320px',
                    height: '320px',
                    borderRadius: '320px',
                    background: `url(${One}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundPosition: '20px 20px, top left',
                    backgroundSize: '200px 140px, 100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Box>
                    <Typography variant='h6' mb={2}>
                      环境准备
                    </Typography>
                    <Typography variant='body2'>在开始之前配置硬件、操作系统和软件环境</Typography>
                  </Box>
                </Box>
                <Box ml={-1} zIndex={-1}>
                  <img src={Arrow} alt='arrow' height={80} width={100} />
                </Box>
                <Box
                  p={10}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '320px',
                    height: '320px',
                    borderRadius: '320px',
                    background: `url(${Two}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundPosition: '20px 20px, top left',
                    backgroundSize: '200px 140px, 100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Box>
                    <Typography variant='h6' mb={2}>
                      组件启动
                    </Typography>
                    <Typography variant='body2'>基于文档分别部署好中继链、跨链网关、应用链</Typography>
                  </Box>
                </Box>

                <Box ml={-1} zIndex={-1}>
                  <img src={Arrow} alt='arrow' height={80} width={100} />
                </Box>
                <Box
                  p={10}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '320px',
                    height: '320px',
                    borderRadius: '320px',
                    background: `url(${Third}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundPosition: '20px 20px, top left',
                    backgroundSize: '200px 140px, 100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Box>
                    <Typography variant='h6' mb={2}>
                      跨链发起
                    </Typography>
                    <Typography variant='body2'>组件部署完毕后, 可以发起跨链交易</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box textAlign='center' mt={2}>
              <Button variant='outlined' color='primary' size='large'>
                立即开始
              </Button>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default QuickPage
