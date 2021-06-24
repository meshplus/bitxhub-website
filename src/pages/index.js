import {AnimationOnScroll} from 'react-animation-on-scroll'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Grid, SwipeableDrawer, Typography} from '@material-ui/core'
import {ColorText, Hero, IndexBar, IndexDottedLine, ReadMore} from '../components/style'
import CaseBG from '../images/index_case_bg.png'
import DataBG from '../images/index_data_bg.png'
import lottie from 'lottie-web'
import data from './data.json'
import Animate2 from './2.json'
import RoadmapBall from '../images/roadmap_ball.svg'
import Datum1 from '../images/datum_1.svg'
import Datum2 from '../images/datum_2.svg'
import Datum3 from '../images/datum_3.svg'
import IndexBG3 from '../images/index_bg_3.png'
import CardBG1 from '../images/01.png'
import CardBG2 from '../images/02.png'
import CardBG3 from '../images/03.png'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const bgRef = useRef()

  const [open1, setOpen1] = useState()
  const [open2, setOpen2] = useState()
  const [open3, setOpen3] = useState()

  useEffect(() => {
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

  const ref = useRef()

  const [active, setActive] = useState({1: false, 2: true, 3: false, 4: false})

  const handleActive = p => {
    const init = {1: false, 2: false, 3: false, 4: false}
    setActive({...init, [p]: true})
  }

  useEffect(() => {
    console.log(`Loading animation......`)
    const animation = lottie.loadAnimation({animationData: data, container: ref1.current})
    const animation2 = lottie.loadAnimation({animationData: Animate2, container: ref2.current})
    animation.goToAndPlay(0, true)
    animation2.goToAndPlay(0, true)
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
        <Hero position='relative'>
          <Box
            position='absolute'
            zIndex={-2}
            ref={ref1}
            style={{top: '50%', transform: 'translateY(-50%)', right: '0px'}}
          />
          <Container maxWidth='lg' style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
            <Grid item md={6}>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Typography variant='h2'>
                  <ColorText>万链互连</ColorText>
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Typography variant='h2' mb={6}>
                  共建生态
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Typography variant='subtitle1' mb={6} maxWidth='72%'>
                  打造新一代跨链服务基础设施，实现区块链互联网链间价值传递
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Link to='/quick'>
                  <Button variant='outlined' size='large'>
                    快速开始
                    <i className='icon icon-chevron-right' />
                  </Button>
                </Link>
              </AnimationOnScroll>
            </Grid>
          </Container>
        </Hero>

        {/* 2 */}
        <Box position='relative' pt={40} pb={25}>
          <Box
            position='absolute'
            zIndex={-2}
            ref={ref2}
            style={{top: '50%', transform: 'translateY(-50%)', right: '0px'}}
          />
          <Container maxWidth='lg' style={{display: 'flex', alignItems: 'center'}}>
            <Grid item md={7} />
            <Grid item md={5}>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Typography variant='h3' mb={10}>
                  <ColorText mr={2}>万链如一</ColorText>一可链万
                </Typography>
              </AnimationOnScroll>
              <Grid container spacing={4}>
                <Grid item md={6}>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                    <IndexBar
                      title={
                        <>
                          <StaticImage src='../images/1.svg' height={30} alt='icon' />
                          <Box ml={3}>异构适配</Box>
                        </>
                      }
                      desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                    />
                  </AnimationOnScroll>
                </Grid>
                <Grid item md={6}>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                    <IndexBar
                      title={
                        <>
                          <StaticImage src='../images/2.svg' height={30} alt='icon' />
                          <Box ml={3}>异构适配</Box>
                        </>
                      }
                      desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                    />
                  </AnimationOnScroll>
                </Grid>
                <Grid item md={6}>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                    <IndexBar
                      title={
                        <>
                          <StaticImage src='../images/2.svg' height={30} alt='icon' />
                          <Box ml={3}>异构适配</Box>
                        </>
                      }
                      desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                    />
                  </AnimationOnScroll>
                </Grid>
                <Grid item md={6}>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                    <IndexBar
                      title={
                        <>
                          <StaticImage src='../images/2.svg' height={30} alt='icon' />
                          <Box ml={3}>异构适配</Box>
                        </>
                      }
                      desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                    />
                  </AnimationOnScroll>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* 3 */}
        <Box
          pt={60}
          pb={45}
          position='relative'
          sx={{
            backgroundImage: `url(${IndexBG3})`,
            backgroundPosition: 'center -100px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '2000px',
          }}
        >
          <Box />
          <Container maxWidth='lg' style={{display: 'flex', alignItems: 'center'}}>
            <Grid item md={7}>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Typography variant='h3' mb={10}>
                  <ColorText>核心组件</ColorText>
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' mb={8} position='relative'>
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/5.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '10px', top: '10px'}}
                    />
                  </Box>
                  <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                    <IndexDottedLine />
                  </Box>
                  <IndexBar
                    width='100%'
                    title='中继链'
                    desc='是一种实现通用跨链协议的开放许可链，用于数字身份管理、应用链管理、跨链交易的可信验证与可靠路由'
                  />
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' position='relative' mb={8}>
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/6.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '15px', top: '15px'}}
                    />
                  </Box>
                  <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                    <IndexDottedLine />
                  </Box>
                  <IndexBar
                    width='100%'
                    title='跨链网关'
                    desc='支持不同区块链间跨链消息的交互，担任收集和传播跨链交易的角色'
                  />
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' position='relative'>
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/7.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '15px', top: '15px'}}
                    />
                  </Box>
                  <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                    <IndexDottedLine />
                  </Box>
                  <IndexBar
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

        {/* case */}
        <Box
          ref={ref}
          pt={20}
          sx={{
            background: `url(${CaseBG})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '2000px 1233px',
          }}
        >
          <Box pt={24} pb={70} id='fuck'>
            <Container maxWidth='lg'>
              <Typography variant='h3' mb={14}>
                <ColorText mr={1}>BitXHub</ColorText>构建解决方案
              </Typography>
              <Box display='flex' justifyContent='flex-end'>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '50px',
                    width: '320px',
                    height: '380px',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      '&:before': {
                        transform: 'scaleY(1.1)',
                      },
                    },
                    '&:before': {
                      backgroundImage: `linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      top: 0,
                      left: 0,
                      borderRadius: '16px',
                      height: '100%',
                      color: '#fff',
                      transition: 'transform .7s cubic-bezier(.19,1,.22,1)',
                      zIndex: 2,
                    },
                    '&:after': {
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      zIndex: 3,
                      backgroundImage: `url(${CardBG1})`,
                      backgroundSize: '200px 142px',
                      backgroundPosition: '20px 20px',
                      backgroundRepeat: 'no-repeat',
                    },
                  }}
                >
                  <Box zIndex={4}>
                    <Typography variant='h5' mb={5}>
                      资产互换
                    </Typography>
                    <Typography variant='body2' mb={7}>
                      为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                    </Typography>
                    <ReadMore to='/' onClick={() => setOpen1(true)} />
                    <SwipeableDrawer
                      ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                      }}
                      anchor={'right'}
                      open={open1}
                      onOpen={() => setOpen1(true)}
                      onClose={() => setOpen1(false)}
                    >
                      <Box
                        p={10}
                        minHeight='100%'
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        style={{
                          color: '#fff',
                          borderRadius: '10px',
                          width: '600px',
                          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);',
                        }}
                      >
                        <Typography variant='h5' mb={4}>
                          资产互换
                        </Typography>
                        <Typography variant='body1' mb={4}>
                          针对不同区块链的数字资产模型，中继链会采取不同的资产跨链方案，每种方案的侧重点不同，旨在为用户提供完备、安全、稳定、高效的跨链数字资产交换体验。中继跨链平台提供三种跨链数字资产交换的方式：中继节点多签方案、基于安全多方计算和门限签名方案和去中心化用户自主控制托管方案。
                        </Typography>
                        <img src='http://cdn.yourtheme.cn/asset_exchange.png' alt='exchange' width='100%' />
                      </Box>
                    </SwipeableDrawer>
                  </Box>
                </Box>

                <Box
                  ml={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '50px',
                    width: '320px',
                    height: '380px',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      '&:before': {
                        transform: 'scaleY(1.1)',
                      },
                    },
                    '&:before': {
                      backgroundImage: `linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      top: 0,
                      left: 0,
                      borderRadius: '16px',
                      height: '100%',
                      color: '#fff',
                      transition: 'transform .7s cubic-bezier(.19,1,.22,1)',
                      zIndex: 2,
                    },
                    '&:after': {
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      zIndex: 3,
                      backgroundImage: `url(${CardBG2})`,
                      backgroundSize: '200px 142px',
                      backgroundPosition: '20px 20px',
                      backgroundRepeat: 'no-repeat',
                    },
                  }}
                >
                  <Box zIndex={4}>
                    <Typography variant='h5' mb={5}>
                      数据互通
                    </Typography>
                    <Typography variant='body2' mb={7}>
                      为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                    </Typography>
                    <ReadMore to='/' onClick={() => setOpen2(true)} />
                  </Box>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={open2}
                  onClose={() => setOpen2(false)}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    style={{
                      color: '#fff',
                      borderRadius: '10px',
                      width: '600px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);',
                    }}
                  >
                    <Typography variant='h5' mb={4}>
                      数据互通
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      在异构多层级体系架构中，底层的省级和市级的数据治理网络和上层具体业务服务层，通过跨链服务实现各个省级和市级的治理链与骨干链网络的数据互通及治理审计。
                    </Typography>
                    <img src='http://cdn.yourtheme.cn/data_exchange.png' alt='exchange' width='100%' />
                  </Box>
                </SwipeableDrawer>
                <Box
                  ml={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '50px',
                    width: '320px',
                    height: '380px',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover': {
                      '&:before': {
                        transform: 'scaleY(1.1)',
                      },
                    },
                    '&:before': {
                      backgroundImage: `linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      top: 0,
                      left: 0,
                      borderRadius: '16px',
                      height: '100%',
                      color: '#fff',
                      transition: 'transform .7s cubic-bezier(.19,1,.22,1)',
                      zIndex: 2,
                    },
                    '&:after': {
                      display: 'block',
                      content: '" "',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      zIndex: 3,
                      backgroundImage: `url(${CardBG3})`,
                      backgroundSize: '200px 142px',
                      backgroundPosition: '20px 20px',
                      backgroundRepeat: 'no-repeat',
                    },
                  }}
                >
                  <Box zIndex={4}>
                    <Typography variant='h5' mb={5}>
                      业务互补
                    </Typography>
                    <Typography variant='body2' mb={7}>
                      为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                    </Typography>
                    <ReadMore to='/' onClick={() => setOpen3(true)} />
                  </Box>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={open3}
                  onClose={() => setOpen3(false)}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    style={{
                      color: '#fff',
                      borderRadius: '10px',
                      width: '600px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);',
                    }}
                  >
                    <Typography variant='h5' mb={4}>
                      业务互补
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      通过跨链服务实现电子存证链与法院专网链业务数据互信，并统一在司法链上存证和在线核验，为智慧法院建设提供有力支撑，全面提升多部门异构链间的业务协同和审判质效。
                    </Typography>
                    <img src='http://cdn.yourtheme.cn/bussiness_exchange.png' alt='exchange' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Box>
            </Container>
          </Box>
          <Box
            pb={20}
            sx={{
              zIndex: 999,
              position: 'relative',
              '& .roadmap_desc': {
                display: 'none',
                position: 'absolute',
                bottom: '-150px',
                width: '260px',
                zIndex: -1,
                textAlign: 'left',
                background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px',
                border: '3px solid rgba(28, 67, 102, 0.83)',
                // borderImageSource:
                //   'linear-gradient(162.14deg, #162B75 -3.32%, rgba(28, 67, 102, 0.83) 19.27%, rgba(100, 143, 255, 0) 77%)',
                left: '50%',
                transform: 'translateX(-50%)',
                marginLeft: '-130px',
                '& ul': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  paddingLeft: '20px',
                },
                '&:after': {
                  content: '" "',
                  display: 'none',
                  width: '164px',
                  height: '82px',
                  borderBottomLeftRadius: '160px',
                  borderBottomRightRadius: '160px',
                  borderTop: '0',
                  border: '3px solid rgba(28, 67, 102, 0.83)',
                  position: 'absolute',
                  top: '-3px',
                  left: '50px',
                  background: '#000',
                },
              },
              '& .active': {
                position: 'relative',
                '& .roadmap_desc': {
                  display: 'block',
                },
                '& .title': {
                  position: 'absolute',
                  top: '76px',
                  textAlign: 'center',
                  width: '100%',
                },
                '& .date': {
                  display: 'none',
                },
                '& .roadmap_ball': {
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                  display: 'inline-block',
                  height: '160px',
                },
              },
            }}
          >
            <Container maxWidth='lg'>
              <Typography variant='h3' mb={14}>
                <ColorText mr={1}>BitXHub</ColorText>开源规划
              </Typography>
              <Box display='flex' alignItems='center' justifyContent='center' position='relative' height='250px'>
                <Box
                  sx={{
                    zIndex: -1,
                    width: '100%',
                    position: 'absolute',
                    height: '1px',
                    background: '#52AEF1',
                    top: '50%',
                  }}
                />
                <Box
                  textAlign='center'
                  sx={{width: '160px', cursor: 'pointer'}}
                  className={`${active[1] ? 'active' : ''}`}
                  mr={20}
                  onClick={() => handleActive(1)}
                >
                  <Typography
                    variant='subtitle2'
                    className={`animate__animated animate__fadeInUp animate__faster title`}
                  >
                    DID组件开源
                  </Typography>
                  <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                  <Typography variant='body2' className='date'>
                    2021.04
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={6}
                    pb={2}
                    pt={8}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider
                      sx={{
                        background: '#405584',
                      }}
                    />
                    <ul>
                      <li>实时交易数据查询</li>
                      <li>应用链管理</li>
                      <li>中继链自治</li>
                      <li>Dapp的聚合生态管理</li>
                    </ul>
                  </Box>
                </Box>
                <Box
                  textAlign='center'
                  sx={{width: '160px', cursor: 'pointer'}}
                  className={`${active[2] ? 'active' : ''}`}
                  mr={20}
                  onClick={() => handleActive(2)}
                >
                  <Typography variant='subtitle2' className='title'>
                    跨链浏览器
                  </Typography>
                  <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                  <Typography variant='body2' className='date'>
                    2021.06
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={6}
                    pb={2}
                    pt={8}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider
                      sx={{
                        background: '#405584',
                      }}
                    />
                    <ul>
                      <li>实时交易数据查询</li>
                      <li>应用链管理</li>
                      <li>中继链自治</li>
                      <li>Dapp的聚合生态管理</li>
                    </ul>
                  </Box>
                </Box>
                <Box
                  textAlign='center'
                  sx={{width: '160px', cursor: 'pointer'}}
                  className={`${active[3] ? 'active' : ''}`}
                  mr={20}
                  onClick={() => handleActive(3)}
                >
                  <Typography variant='subtitle2' className='title'>
                    开放测试网
                  </Typography>
                  <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                  <Typography variant='body2' className='date'>
                    2021.08
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={6}
                    pb={2}
                    pt={8}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider
                      sx={{
                        background: '#405584',
                      }}
                    />
                    <ul>
                      <li>实时交易数据查询</li>
                      <li>应用链管理</li>
                      <li>中继链自治</li>
                      <li>Dapp的聚合生态管理</li>
                    </ul>
                  </Box>
                </Box>
                <Box
                  textAlign='center'
                  sx={{width: '160px', cursor: 'pointer'}}
                  className={`${active[4] ? 'active' : ''}`}
                  mr={20}
                  onClick={() => handleActive(4)}
                >
                  <Typography
                    variant='subtitle2'
                    className={`title animate__animated animate__fadeInUp animate__faster`}
                  >
                    联盟链跨链治理
                  </Typography>
                  <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                  <Typography variant='body2' className='date'>
                    2021.10
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={6}
                    pb={2}
                    pt={8}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider
                      sx={{
                        background: '#405584',
                      }}
                    />
                    <ul>
                      <li>实时交易数据查询</li>
                      <li>应用链管理</li>
                      <li>中继链自治</li>
                      <li>Dapp的聚合生态管理</li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            py={55}
            sx={{
              background: `url(${DataBG})`,
              backgroundPosition: 'center -180px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '2000px',
            }}
          >
            <Container maxWidth='lg'>
              <Box>
                <Grid container alignItems='stretch'>
                  <Grid item md={4} display='flex' alignItems='center'>
                    <Box>
                      <Typography variant='h2'>
                        <ColorText display='block'>跨链</ColorText>
                        行业领导者
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={8}>
                    <Box>
                      <Box position='relative' mb={10} ml={12} display='flex' alignItems='center'>
                        <img src={Datum1} alt='datum' height={139} />
                        <Box position='absolute' top='44px' left='44px'>
                          <Typography variant='h3' display='inline-block'>
                            3
                          </Typography>
                          <Typography variant='body1' display='inline-block'>
                            项
                          </Typography>
                        </Box>
                        <Box pl={2}>
                          <Typography variant='h6'>参与测评</Typography>
                          <Typography variant='body2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                        </Box>
                      </Box>
                      <Box position='relative' ml={2} display='flex' alignItems='center'>
                        <img src={Datum2} alt='datum' height={139} />
                        <Box position='absolute' top='44px' left='44px'>
                          <Typography variant='h3' display='inline-block'>
                            4
                          </Typography>
                          <Typography variant='body1' display='inline-block'>
                            项
                          </Typography>
                        </Box>
                        <Box pl={2}>
                          <Typography variant='h6'>专利&论文</Typography>
                          <Typography variant='body2'>
                            在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                          </Typography>
                        </Box>
                      </Box>
                      <Box position='relative' mt={10} ml={12} display='flex' alignItems='center'>
                        <img src={Datum3} alt='datum' height={139} />
                        <Box position='absolute' top='44px' left='44px'>
                          <Typography variant='h3' display='inline-block'>
                            23
                          </Typography>
                          <Typography variant='body1' display='inline-block'>
                            篇
                          </Typography>
                        </Box>
                        <Box pl={2}>
                          <Typography variant='h6'>专利&论文</Typography>
                          <Typography variant='body2'>
                            在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box textAlign='center'>
            <Typography variant='h3' mb={8}>
              <ColorText>了解更多</ColorText>
            </Typography>
            <Grid container maxWidth='lg' spacing={8}>
              <Grid item md={4} textAlign='right'>
                <Typography variant='body2' mr={7} mb={4}>
                  关于技术实现
                </Typography>
                <Button variant='outlined' color='primary' size='large'>
                  白皮书
                  <i className='icon icon-chevron-right' />
                </Button>
              </Grid>
              <Grid item md={4}>
                <Typography variant='body2' mb={4}>
                  关于技术指导
                </Typography>
                <Button variant='outlined' color='primary' size='large'>
                  查看文档
                  <i className='icon icon-chevron-right' />
                </Button>
              </Grid>
              <Grid item md={4} textAlign='left'>
                <Typography variant='body2' ml={7} mb={4}>
                  快速体验跨链
                </Typography>
                <Button variant='outlined' color='primary' size='large'>
                  快速开始
                  <i className='icon icon-chevron-right' />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Layout>
    )
  }
  return null
}
export default IndexPage
