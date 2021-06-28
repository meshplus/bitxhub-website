import {AnimationOnScroll} from 'react-animation-on-scroll'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Grid, SwipeableDrawer, Typography} from '@material-ui/core'
import {ColorText, Hero, IndexBar, IndexDottedLine, ReadMore} from '../components/style'
import CaseBG from '../images/index_case_bg.png'
import DataBG from '../images/index_data_bg.png'
import lottie from 'lottie-web'
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
import RoadmapCard from '../images/roadmap_card.png'
import DataCard from '../images/data_card.png'
import data from './data.json'

const IndexPage = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const bgRef = useRef()

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  console.log('Initializing......')
  useEffect(() => {
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

  const ref = useRef()

  const [active, setActive] = useState({1: '', 2: '', 3: '', 4: ''})
  const [inactive, setInactive] = useState({1: '', 2: '', 3: '', 4: ''})
  const init = {1: '', 2: '', 3: '', 4: ''}

  const handleActive = i => {
    setActive({...init, [i]: 'active'})
    setInactive({...inactive, [i]: ''})
  }
  const handleInactive = i => {
    setInactive({...init, [i]: 'inactive'})
    setActive({...active, [i]: ''})
  }

  useEffect(() => {
    console.log(`Loading animation......`)
    lottie.setQuality('low')
    // const animation = lottie.loadAnimation({animationData: data, container: ref1.current})
    // const animation2 = lottie.loadAnimation({animationData: Animate2, container: ref2.current})
    // animation.goToAndPlay(0, true)
    // animation2.goToAndPlay(0, true)
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
                <Typography variant='subtitle1' mb={6}>
                  打造新一代跨链服务基础设施，实现区块链互联网链间价值传递
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Link to='/quick' style={{marginRight: '20px'}}>
                  <Button variant='outlined' size='large'>
                    <Box mr={2}>快速开始</Box>
                    <i className='icon icon-chevron-right' />
                  </Button>
                </Link>
                <a href='https://github.com/meshplus/bitxhub' target='_blank' rel='noreferrer'>
                  <Button variant='outlined' size='large'>
                    <i className='icon icon-github' style={{fontSize: '22px'}} />
                    <Box ml={2} mr={2}>
                      Github
                    </Box>
                    <i className='icon icon-chevron-right' />
                  </Button>
                </a>
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
            <Grid item md={6} />
            <Grid item md={6}>
              <Box ml={8}>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Typography variant='h3' mb={10}>
                    <ColorText mr={2}>万链如一</ColorText>一可链万
                  </Typography>
                </AnimationOnScroll>
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={5}
                        title={
                          <>
                            <StaticImage src='../images/index_2_1.png' height={40} alt='icon' />
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
                        p={5}
                        title={
                          <>
                            <StaticImage src='../images/index_2_2.png' height={40} alt='icon' />
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
                        p={5}
                        title={
                          <>
                            <StaticImage src='../images/index_2_3.png' height={40} alt='icon' />
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
                        p={5}
                        title={
                          <>
                            <StaticImage src='../images/index_2_4.png' height={40} alt='icon' />
                            <Box ml={3}>异构适配</Box>
                          </>
                        }
                        desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                      />
                    </AnimationOnScroll>
                  </Grid>
                </Grid>
              </Box>
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
                <Typography variant='h3' mb={13}>
                  <ColorText>核心组件</ColorText>
                </Typography>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' mb={8} position='relative'>
                  <Box mr={5} position='relative'>
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
                    px={6}
                    py={3}
                    width='100%'
                    title='中继链'
                    desc='是一种实现通用跨链协议的开放许可链，用于数字身份管理、应用链管理、跨链交易的可信验证与可靠路由'
                  />
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' position='relative' mb={8}>
                  <Box mr={5} position='relative'>
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
                    px={6}
                    py={3}
                    width='100%'
                    title='跨链网关'
                    desc='支持不同区块链间跨链消息的交互，担任收集和传播跨链交易的角色'
                  />
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                <Box display='flex' alignItems='center' position='relative'>
                  <Box mr={5} position='relative'>
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
                    px={6}
                    py={3}
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
          <Box pt={24} pb={70}>
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
                          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
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
                      为不同业务链上数据提供数据更新和同步服务，打破异构区块链间的信息壁垒，有效地进行链上数据的安全共享
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
                  onOpen={() => setOpen2(true)}
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
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
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
                      针对已有区块链基础设施的情况下，通过跨链服务实现业务耦合高、流程复杂的异构区块链间的横向打通，扩大业务规模，实现互利共赢。
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
                  onOpen={() => setOpen3(true)}
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
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
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
              zIndex: 1,
              position: 'relative',
              '& .hover_title': {
                visibility: 'none',
                opacity: 0,
                position: 'absolute',
                top: '70px',
                left: 0,
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.5s ease',
              },
              '@keyframes scaleB': {
                '0%': {transform: 'scale(1)'},
                '50%': {transform: 'scale(6)'},
                '100%': {transform: 'scale(5.6)'},
              },
              '@keyframes scaleS': {
                from: {transform: 'scale(5.6)'},
                to: {transform: 'scale(1)'},
              },
              '& .roadmap_item': {
                margin: '0 10px',
                padding: '50px 30px',
                cursor: 'pointer',
                width: '200px',
                '&.active': {
                  '& .title': {
                    opacity: 0,
                  },
                  '& .hover_title': {
                    visibility: 'visible',
                    opacity: 1,
                  },
                  '& .roadmap_desc': {
                    display: 'block',
                  },
                  '& .date': {
                    display: 'none',
                  },
                  '& .roadmap_ball': {
                    animation: 'scaleB 0.6s ease-in-out forwards',
                  },
                },
                '&.inactive': {
                  '& .roadmap_ball': {
                    animation: 'scaleS 0.5s ease forwards',
                  },
                },
              },
              '& .roadmap_ball': {
                display: 'inline-block',
              },
              '& .roadmap_desc': {
                display: 'none',
                position: 'absolute',
                top: '130px',
                width: '300px',
                minHeight: '240px',
                textAlign: 'left',
                backgroundImage: `url(${RoadmapCard})`,
                backgroundSize: '300px 241px',
                backgroundRepeat: 'no-repeat',
                left: '50%',
                transform: 'translateX(-50%)',
                marginLeft: '-150px',
                '& .roadmap_desc.active': {
                  display: 'block',
                },
                '& ul': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  paddingLeft: '20px',
                  fontSize: '14px',
                  '& li': {
                    marginBottom: '5px',
                  },
                },
              },
            }}
          >
            <Container maxWidth='lg'>
              <Typography variant='h3' mb={14}>
                <ColorText mr={1}>BitXHub</ColorText>开源规划
              </Typography>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                position='relative'
                height='250px'
                sx={{
                  '&:after': {
                    content: '" "',
                    display: 'block',
                    position: 'absolute',
                    top: '50%',
                    width: '100%',
                    height: '1px',
                    zIndex: -1,
                    background:
                      'linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(78,155,226,1) 17%, rgba(78,155,226,1) 75%, rgba(51,51,51,1) 100%)',
                  },
                }}
              >
                <Box
                  position='relative'
                  textAlign='center'
                  className={`roadmap_item ${active[1]} ${inactive[1]}`}
                  onMouseEnter={() => handleActive(1)}
                  onMouseLeave={() => handleInactive(1)}
                >
                  <Typography variant='subtitle2' className={`title`}>
                    DID组件开源
                  </Typography>
                  <img src={RoadmapBall} className={`roadmap_ball`} alt='ball' height={36} />
                  <Typography variant='subtitle2' className={`hover_title`}>
                    DID组件开源
                  </Typography>
                  <Typography variant='body2' className='date'>
                    2021.04
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={10}
                    pb={2}
                    pt={16}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>分布式数字身份组件库开源</li>
                      <li>打造基于数字身份的互通机制</li>
                    </ul>
                  </Box>
                </Box>

                <Box
                  textAlign='center'
                  position='relative'
                  className={`roadmap_item ${active[2]} ${inactive[2]}`}
                  onMouseEnter={() => handleActive(2)}
                  onMouseLeave={() => handleInactive(2)}
                >
                  <Typography variant='subtitle2' className='title'>
                    跨链浏览器
                  </Typography>
                  <img src={RoadmapBall} className={`roadmap_ball`} alt='ball' height={36} />
                  <Typography variant='subtitle2' className={`hover_title`}>
                    跨链浏览器
                  </Typography>
                  <Typography variant='body2' className='date'>
                    2021.06
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={10}
                    pb={2}
                    pt={16}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>实时交易数据查询</li>
                      <li>应用链管理</li>
                      <li>中继链自治</li>
                      <li>DApp的聚合生态管理</li>
                    </ul>
                  </Box>
                </Box>
                <Box
                  textAlign='center'
                  position='relative'
                  className={`roadmap_item ${active[3]} ${inactive[3]}`}
                  onMouseEnter={() => handleActive(3)}
                  onMouseLeave={() => handleInactive(3)}
                >
                  <Typography variant='subtitle2' className='title'>
                    开放测试网
                  </Typography>
                  <img
                    src={RoadmapBall}
                    className={`roadmap_ball ${active[3]} ${inactive[3]}`}
                    alt='ball'
                    height={36}
                  />
                  <Typography variant='subtitle2' className={`hover_title`}>
                    开放测试网
                  </Typography>
                  <Typography variant='body2' className='date'>
                    2021.08
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={10}
                    pb={2}
                    pt={16}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>为用户提供资产/数据交换服务</li>
                      <li>DApp跨链服务体验</li>
                    </ul>
                  </Box>
                </Box>
                <Box
                  textAlign='center'
                  position='relative'
                  className={`roadmap_item ${active[4]} ${inactive[4]}`}
                  onMouseEnter={() => handleActive(4)}
                  onMouseLeave={() => handleInactive(4)}
                >
                  <Typography variant='subtitle2' className={`title`}>
                    联盟链跨链治理
                  </Typography>
                  <img src={RoadmapBall} className={`roadmap_ball`} alt='ball' height={36} />
                  <Typography variant='subtitle2' className={`hover_title`}>
                    联盟链跨链治理
                  </Typography>
                  <Typography variant='body2' className='date'>
                    2021.10
                  </Typography>
                  <Box
                    className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}
                    px={10}
                    pb={2}
                    pt={16}
                  >
                    <Typography variant='subtitle2' mb={2}>
                      2021.06
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>支持统一的身份管理，跨链权限控制</li>
                      <li>节点管理服务及数据审计追溯等模块</li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            pt={40}
            pb={55}
            sx={{
              background: `url(${DataBG})`,
              backgroundPosition: 'center -120px',
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
                        <ColorText>跨链</ColorText>
                        <Box>行业领导者</Box>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={8}>
                    <Box
                      sx={{
                        '& .datum_num': {
                          display: 'flex',
                          alignItems: 'flex-end',
                          position: 'absolute',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          justifyContent: 'center',
                          width: '138px',
                          '& h3': {
                            lineHeight: 1,
                          },
                        },
                        '& .datum_meta': {display: 'block'},
                        '& .datum_meta_list': {display: 'none', '& h6': {lineHeight: 1.8}},
                        '& .datum_item': {
                          display: 'flex',
                          alignItems: 'center',
                          padding: '35px 0',
                          transition: 'background 0.2s ease',
                          '&:hover': {
                            backgroundImage: `url(${DataCard})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '632px 215px',
                            backgroundPosition: 'top 0 left 70px',
                            '& .datum_meta': {
                              display: 'none',
                            },
                            '& .datum_meta_list': {
                              display: 'block',
                            },
                          },
                        },
                      }}
                    >
                      <Box position='relative' ml={15} mt={10} className={`datum_item`}>
                        <img src={Datum1} alt='datum' height={136} />
                        <Box position='absolute' className='datum_num'>
                          <Typography variant='h3'>3</Typography>
                          <Typography variant='body1'>项</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h6'>参与测评</Typography>
                            <Typography variant='body2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                          </Box>
                          <Box className='datum_meta_list'>
                            <Typography variant='subtitle2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                            <Typography variant='subtitle2'>
                              首批通过中国信息通信研究院的可信区块链的跨链服务功能测评
                            </Typography>
                            <Typography variant='subtitle2'>
                              通过浙江省电子信息产品检验研究院的跨链服务功能测试
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box position='relative' ml={6} className={'datum_item'}>
                        <img src={Datum2} alt='datum' height={139} />
                        <Box position='absolute' className={'datum_num'}>
                          <Typography variant='h3'>4</Typography>
                          <Typography variant='body1'>项</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h6'>专利&论文</Typography>
                            <Typography variant='body2'>
                              在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                            </Typography>
                          </Box>
                          <Box className='datum_meta_list'>
                            <Typography variant='subtitle2'>
                              参与中国信通院——可信推进计划《区块链互操作白皮书》编写工作
                            </Typography>
                            <Typography variant='subtitle2'>
                              参与国际电联电信标准化部门（ITU-T）2项DLT互操作框架标准制定
                            </Typography>
                            <Typography variant='subtitle2'>
                              参与中国通信标准化协会（CCSA）《区块链链间互操作》团体标准制定
                            </Typography>
                            <Typography variant='subtitle2'>
                              参与计算机协会区块链和分布式记账委员会（IEEE C/BDL)区块链互操作3项标准制定；
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box position='relative' ml={12} className={'datum_item'}>
                        <img src={Datum3} alt='datum' height={139} />
                        <Box position='absolute' className={'datum_num'}>
                          <Typography variant='h3'>23</Typography>
                          <Typography variant='body1'>篇</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h6'>专利&论文</Typography>
                            <Typography variant='body2'>
                              在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                            </Typography>
                          </Box>
                          <Box className='datum_meta_list'>
                            <Typography variant='subtitle2'>
                              在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                            </Typography>
                          </Box>
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
