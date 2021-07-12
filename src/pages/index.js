import {AnimationOnScroll} from 'react-animation-on-scroll'
import React, {useEffect, useRef} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import {ColorText, IndexBar, IndexDottedLine} from '../components/style'
import CaseBG from '../images/index_case_bg.png'
import lottie from 'lottie-web'
import IndexBG3 from '../images/index_bg_3.png'
import {StaticImage} from 'gatsby-plugin-image'
import data from './data.json'
import IndexBG2 from '../images/index_bg_2.png'
import Roadmap from '../components/index/roadmap'
import Banner from '../components/index/banner'
import Case from '../components/index/case'
import Datum from '../components/index/datum'
import More from '../components/index/more'
import DataBG from '../images/index_data_bg.png'

const IndexPage = () => {
  const bgRef = useRef()

  console.log('Initializing......')
  useEffect(() => {
    return
    console.log(`Fetching animation......`)
    fetch('http://cdn.yourtheme.cn/index_bg.json')
      .then(async res => {
        const result = await res.json()
        const animation = lottie.loadAnimation({
          animationData: result,
          container: bgRef.current,
          loop: true,
        })

        animation.setSpeed(0.5)
        animation.play()
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  if (typeof window !== 'undefined') {
    return (
      <Layout>
        <SEO title='Home' />
        <Box
          zIndex={-1}
          position='fixed'
          ref={bgRef}
          style={{top: '50%', transform: 'translateY(-50%)', right: '0px'}}
        />
        <Banner />
        {/* 2 */}
        <Box
          position='relative'
          pt={{xs: 0, md: 40}}
          pb={{xs: 0, md: 45}}
          sx={{
            backgroundImage: `url(${IndexBG2}), url(${IndexBG3}), url(${CaseBG}), url(${DataBG})`,
            backgroundSize: {md: '2000px', xs: '2000px, 1000px, 1000px, 800px'},
            backgroundRepeat: 'no-repeat',
            backgroundPosition: {
              xs: 'center -300px, -490px 200px, center 1160px, -300px 2420px',
              md: 'center top, center 500px, center 1450px, center 3050px',
            },
          }}
        >
          <Container maxWidth='lg' style={{display: 'flex', alignItems: 'center'}}>
            <Grid item md={6} />
            <Grid item md={6}>
              <Box ml={{md: 8}}>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Typography variant='h3' mb={10}>
                    <ColorText mr={2}>万链如一</ColorText>一可链万
                  </Typography>
                </AnimationOnScroll>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={{xs: 3, md: 5}}
                        titleMb={3}
                        title={
                          <>
                            <StaticImage src='../images/index_2_1.png' height={40} alt='icon' />
                            <Box ml={3}>异构链适配</Box>
                          </>
                        }
                        desc='采用通用跨链传输协议，实现对异构/同构应用链的协议适配'
                      />
                    </AnimationOnScroll>
                  </Grid>
                  <Grid item xs={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={{xs: 3, md: 5}}
                        titleMb={3}
                        title={
                          <>
                            <StaticImage src='../images/index_2_2.png' height={40} alt='icon' />
                            <Box ml={3}>交易验证</Box>
                          </>
                        }
                        desc='验证跨链交易的来源及交易证明是否满足指定的跨链验证规则'
                      />
                    </AnimationOnScroll>
                  </Grid>
                  <Grid item xs={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={{xs: 3, md: 5}}
                        titleMb={3}
                        title={
                          <>
                            <StaticImage src='../images/index_2_3.png' height={40} alt='icon' />
                            <Box ml={3}>跨链事务</Box>
                          </>
                        }
                        desc='内置事务管理合约，保证不同业务场景下跨链交易的事务性'
                      />
                    </AnimationOnScroll>
                  </Grid>
                  <Grid item xs={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={{xs: 3, md: 5}}
                        titleMb={3}
                        title={
                          <>
                            <StaticImage src='../images/index_2_4.png' height={40} alt='icon' />
                            <Box ml={3}>隐私保护</Box>
                          </>
                        }
                        desc='针对用户需要对托管数字资产全方位保护的解决方案'
                      />
                    </AnimationOnScroll>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Container>
          {/* 3 */}
          <Box
            pt={{xs: 30, md: 60}}
            position='relative'
            sx={{
              '& .ball': {
                width: {md: '80px', xs: '65px'},
                mr: {md: 5, xs: 3},
              },
            }}
          >
            <Container maxWidth='lg' style={{display: 'flex', alignItems: 'center'}}>
              <Grid item md={7}>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Typography variant='h3' mb={13}>
                    <ColorText>核心组件</ColorText>
                  </Typography>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Box display='flex' alignItems='center' mb={{xs: 4, md: 8}} position='relative'>
                    <StaticImage src='../images/index_3_1.png' alt='ball' className='ball' />
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
                      px={{xs: 3, md: 6}}
                      py={{xs: 3}}
                      width='100%'
                      title='中继链'
                      desc='实现通用跨链协议的开放许可链，提供应用链管理、跨链交易验证与路由等服务'
                    />
                  </Box>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Box display='flex' alignItems='center' position='relative' mb={{xs: 4, md: 8}}>
                    <StaticImage src='../images/index_3_2.png' alt='ball' className='ball' />
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
                      px={{xs: 3, md: 6}}
                      py={{xs: 3}}
                      width='100%'
                      title='跨链网关'
                      desc='支持不同区块链间跨链消息的交互，担任收集和传播跨链交易的角色'
                    />
                  </Box>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Box display='flex' alignItems='center' position='relative'>
                    <StaticImage src='../images/index_3_3.png' alt='ball' className='ball' />
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
                      px={{xs: 3, md: 6}}
                      py={{xs: 3}}
                      width='100%'
                      title='应用链'
                      desc='承载具体应用业务逻辑，根据是否支持跨链协议分为同构应用链与异构应用链'
                    />
                  </Box>
                </AnimationOnScroll>
              </Grid>
              <Grid item md={5} />
            </Container>
          </Box>
          <Case />
          <Roadmap />
          <Datum />
          <More />
        </Box>
      </Layout>
    )
  }
  return null
}
export default IndexPage
