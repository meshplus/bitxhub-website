import React, {useEffect, useRef} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import BG1 from '../images/quick_bg_1.png'
import BG2 from '../images/quick_bg_2.png'
import Quick1 from '../images/quick_1.png'
import One from '../images/01.png'
import Two from '../images/02.png'
import Third from '../images/03.png'
import Arrow from '../images/arrow.png'
import lottie from 'lottie-web'
import {ColorText} from '../components/style'

const QuickPage = ({data}) => {
  const divRef = useRef()

  useEffect(() => {
    fetch('http://cdn.yourtheme.cn/quick.json')
      .then(async res => {
        const result = await res.json()
        const animation = lottie.loadAnimation({
          animationData: result,
          container: divRef.current,
          loop: true,
        })

        animation.setSpeed(0.5)
        animation.play()
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  if (typeof window === undefined) return null
  return (
    <Box>
      <SEO title='快速开始' />
      <Layout>
        <div
          ref={divRef}
          style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: -1, right: '0px'}}
        />
        <Box
          pt={20}
          pb={30}
          sx={{
            backgroundImage: `url(${BG1}), url(${BG2})`,
            backgroundSize: {md: '2000px, 2000px', xs: '1000px, 800px 500px'},
            backgroundRepeat: 'no-repeat',
            backgroundPosition: {md: 'center -30px, center 1290px', xs: 'center -50px, center 1110px'},
          }}
        >
          <Container maxWidth='lg'>
            <Box pt={10} mb={40}>
              <Typography variant='h3' mb={4}>
                快速开始
              </Typography>
              <Typography variant='subtitle1' pr={5} mb={8} maxWidth='560px'>
                通过Goduck可以一键搭建BitxHub快速体验跨链流程,
                想深入了解BitXHub跨链技术的小伙伴也可以通过快速开始文档分步搭建。
              </Typography>
            </Box>
            <Box
              mt={{xs: 5, md: 10}}
              sx={{
                '& .btn': {
                  display: {
                    md: 'inline-block',
                    xs: 'none',
                  },
                },
                '& .mobile-btn': {
                  display: {
                    md: 'none',
                    xs: 'inline-block',
                    margin: '0 auto',
                  },
                },
                '& img': {
                  display: 'block',
                  width: '80%',
                  margin: '0 auto',
                },
              }}
            >
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <Typography variant='h3' mb={4}>
                      一键体验
                    </Typography>
                    <Typography variant='subtitle1' pr={25} mb={8}>
                      通过Goduck运维小工具来快速体验跨链流程。
                    </Typography>
                    <Button
                      className='btn'
                      variant='outlined'
                      color='primary'
                      size='large'
                      component='a'
                      href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html'
                      target='_blank'
                    >
                      立即使用
                      <ColorText ml={2}>
                        <i className='icon icon-chevron-right' />
                      </ColorText>
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center'>
                  <img src={Quick1} alt='tool' />
                </Grid>
              </Grid>
              <Box textAlign='center' mt={4}>
                <Button
                  className='mobile-btn'
                  variant='outlined'
                  color='primary'
                  size='large'
                  component='a'
                  href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html'
                  target='_blank'
                >
                  立即使用
                  <ColorText ml={2}>
                    <i className='icon icon-chevron-right' />
                  </ColorText>
                </Button>
              </Box>
            </Box>
            <Box
              pt={{md: 50, xs: 20}}
              pb={10}
              sx={{
                '& .item': {
                  p: 10,
                  border: '4px solid #0b172c',
                  transition: 'all .3s ease',
                  '&:hover': {
                    borderColor: '#213961',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  width: {md: '320px', xs: '204px'},
                  height: {md: '320px', xs: '204px'},
                  borderRadius: '100%',
                  background: `url(${One}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                  backgroundPosition: '20px 20px, top left',
                  backgroundSize: {md: '200px 140px, 100% 100%', xs: '130px 85px, 100% 100%'},
                  backgroundRepeat: 'no-repeat',
                },
                '& .arrow': {
                  width: {md: '100px', xs: '64px'},
                  height: {md: '80px', xs: '50px'},
                },
              }}
            >
              <Typography variant='h3' textAlign='center' mb={2}>
                系统搭建
              </Typography>
              <Typography variant='subtitle1' textAlign='center' mb={11}>
                通过单独搭建bitxhub各个组件, 以深入了解BitXHub
              </Typography>
              <Box overflow={{md: '', xs: 'scroll'}}>
                <Box display='flex' alignItems='center' justifyContent='center' width={{md: '100%', xs: '820px'}}>
                  <Box
                    component='a'
                    href='https://meshplus.github.io/bitxhub/bitxhub/usage/env.html'
                    target='_blank'
                    className='item'
                    sx={{
                      background: `url(${One}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
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
                    <img src={Arrow} alt='arrow' className='arrow' />
                  </Box>
                  <Box
                    component='a'
                    href='https://meshplus.github.io/bitxhub/bitxhub/usage/deploy_bitxhub.html'
                    target='_blank'
                    className='item'
                    sx={{
                      background: `url(${Two}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
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
                    <img src={Arrow} alt='arrow' className='arrow' />
                  </Box>
                  <Box
                    component='a'
                    href='https://meshplus.github.io/bitxhub/bitxhub/usage/env.html'
                    target='_blank'
                    className='item'
                    sx={{
                      background: `url(${Third}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
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
            </Box>
            <Box textAlign='center' mt={2}>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                component='a'
                href='https://meshplus.github.io/bitxhub/bitxhub/usage/env.html'
                target='_blank'
              >
                立即开始
                <ColorText ml={2}>
                  <i className='icon icon-chevron-right' />
                </ColorText>
              </Button>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default QuickPage
