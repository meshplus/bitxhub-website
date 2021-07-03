import {AnimationOnScroll} from 'react-animation-on-scroll'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Grid, SwipeableDrawer, Typography} from '@material-ui/core'
import {ColorText, Hero, IndexBar, IndexDottedLine, ReadMore, ReadMoreNoHrefWithoutStyle} from '../components/style'
import CaseBG from '../images/index_case_bg.png'
import DataBG from '../images/index_data_bg.png'
import lottie from 'lottie-web'
import RoadmapBall from '../images/index_roadmap_ball.png'
import Datum1 from '../images/datum_1.png'
import Datum2 from '../images/datum_2.png'
import IndexBG3 from '../images/index_bg_3.png'
import CardBG1 from '../images/01.png'
import CardBG2 from '../images/02.png'
import CardBG3 from '../images/03.png'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import RoadmapCard from '../images/roadmap_card.png'
import DataCard from '../images/data_card.png'
import data from './data.json'
import IndexBG2 from '../images/index_bg_2.png'
import {useWindowSize} from 'react-use'
import RoadmapShine from '../images/roadmap_shine.png'
import DataExchange from '../images/data_exchange.png'

const IndexPage = () => {
  const ref1 = useRef()
  const bgRef = useRef()
  const {width} = useWindowSize()

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [datumActive, setDatumActive] = useState('active')
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

  const [active, setActive] = useState({1: '', 2: 'active', 3: '', 4: ''})
  const [inactive, setInactive] = useState({1: '', 2: '', 3: '', 4: ''})
  const init = {1: '', 2: '', 3: '', 4: ''}

  const handleActive = i => {
    setActive({...init, [i]: 'active'})
    if (i === 2) {
      // setInactive({...inactive, [i]: '', [2]: ''})
    } else {
      setInactive({...inactive, [i]: '', [2]: 'inactive'})
    }
  }

  const handleInactive = i => {
    if (i !== 2) {
      setInactive({...init, [i]: 'inactive', [2]: ''})
      setActive({...active, [i]: '', [2]: 'active'})
    } else {
      // setInactive({...init, [i]: 'inactive'})
      // setActive({...active, [i]: ''})
    }
  }

  useEffect(() => {
    console.log(`Loading animation......`)
    lottie.setQuality('low')
    const animation = lottie.loadAnimation({animationData: data, container: ref1.current})
    // const animation2 = lottie.loadAnimation({animationData: Animate2, container: ref2.current})
    animation.goToAndPlay(0, true)
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
                    <ColorText>
                      <i className='icon icon-chevron-right' />
                    </ColorText>
                  </Button>
                </Link>
                <a href='https://github.com/meshplus/bitxhub' target='_blank' rel='noreferrer'>
                  <Button variant='outlined' size='large'>
                    <i className='icon icon-github' style={{fontSize: '22px'}} />
                    <Box ml={2} mr={2}>
                      Github
                    </Box>
                    <ColorText>
                      <i className='icon icon-chevron-right' />
                    </ColorText>
                  </Button>
                </a>
              </AnimationOnScroll>
            </Grid>
          </Container>
        </Hero>

        {/* 2 */}
        <Box
          position='relative'
          pt={40}
          pb={45}
          sx={{
            backgroundImage: `url(${IndexBG2}), url(${IndexBG3})`,
            backgroundSize: '2000px, 2000px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top, center 500px',
          }}
        >
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
                  <Grid item md={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={5}
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
                  <Grid item md={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={5}
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
                  <Grid item md={6}>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                      <IndexBar
                        p={5}
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
          <Box pt={60} position='relative'>
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
                    <Box mr={5}>
                      <StaticImage src='../images/index_3_1.png' width={80} alt='ball' />
                    </Box>
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
                      px={6}
                      py={3}
                      width='100%'
                      title='中继链'
                      desc='实现通用跨链协议的开放许可链，提供应用链管理、跨链交易验证与路由等服务'
                    />
                  </Box>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                  <Box display='flex' alignItems='center' position='relative' mb={8}>
                    <Box mr={5}>
                      <StaticImage src='../images/index_3_2.png' width={80} alt='ball' />
                    </Box>
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
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
                    <Box mr={5}>
                      <StaticImage src='../images/index_3_3.png' width={80} alt='ball' />
                    </Box>
                    <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                      <IndexDottedLine />
                    </Box>
                    <IndexBar
                      lighterBG={true}
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
        </Box>

        {/* case */}
        <Box
          ref={ref}
          pt={10}
          sx={{
            background: `url(${CaseBG})`,
            backgroundPosition: 'center -100px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '2000px 1233px',
          }}
        >
          <Box pt={24} pb={70}>
            <Container maxWidth='lg'>
              <Typography variant='h3' mb={14}>
                <ColorText mr={1}>BitXHub</ColorText>构建解决方案
              </Typography>
              <Box
                display='flex'
                justifyContent='flex-end'
                sx={{
                  '& .case_item': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '60px',
                    width: '320px',
                    height: '380px',
                    position: 'relative',
                    cursor: 'pointer',
                    '& h5': {
                      fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                    },
                    '& .MuiTypography-body1': {
                      lineHeight: '26px',
                    },
                    '&:hover': {
                      '& .read-more': {
                        background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      },
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
                      backgroundSize: '200px 142px',
                      backgroundPosition: '15px 20px',
                      backgroundRepeat: 'no-repeat',
                    },
                  },
                }}
              >
                <Box className='case_item' sx={{'&:after': {backgroundImage: `url(${CardBG1})`}}}>
                  <Box zIndex={4} mt={15}>
                    <Typography variant='h5' mb={5}>
                      资产互换
                    </Typography>
                    <Typography variant='body1' mb={7}>
                      为用户提供不同链上资产转移服务，资产可以包括通证或凭证如：积分、证件、收藏品等。
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setOpen1(true)} className='read-more' />
                    <SwipeableDrawer
                      ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                      }}
                      anchor={'right'}
                      open={open1}
                      onOpen={() => setOpen1(true)}
                      onClose={() => setOpen1(false)}
                      sx={{'& .MuiDrawer-paper': {boxSizing: 'border-box', width: width / 2}}}
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
                <Box className='case_item' ml={4} sx={{'&:after': {backgroundImage: `url(${CardBG2})`}}}>
                  <Box zIndex={4} mt={15}>
                    <Typography variant='h5' mb={5}>
                      数据互通
                    </Typography>
                    <Typography variant='body1' mb={7}>
                      提供跨链数据更新和同步服务，打破异构区块链间的信息壁垒，有效地进行链上数据的安全共享
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setOpen2(true)} className='read-more' />
                  </Box>
                  <SwipeableDrawer
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    anchor={'right'}
                    open={open2}
                    onOpen={() => setOpen2(true)}
                    onClose={() => setOpen2(false)}
                    sx={{
                      '& .MuiDrawer-paper': {boxSizing: 'border-box', width: width / 2},
                    }}
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
                        background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                      }}
                    >
                      <Typography variant='h5' mb={4}>
                        数据互通
                      </Typography>
                      <Typography variant='body1' mb={4}>
                        在异构多层级体系架构中，底层的省级和市级的数据治理网络和上层具体业务服务层，通过跨链服务实现各个省级和市级的治理链与骨干链网络的数据互通及治理审计。
                      </Typography>
                      <img src={DataExchange} alt='exchange' width='100%' />
                    </Box>
                  </SwipeableDrawer>
                </Box>

                <Box className='case_item' ml={4} sx={{'&:after': {backgroundImage: `url(${CardBG3})`}}}>
                  <Box zIndex={4} mt={15}>
                    <Typography variant='h5' mb={5}>
                      业务互补
                    </Typography>
                    <Typography variant='body1' mb={7}>
                      实现业务耦合高、流程复杂的异构区块链间的横向打通服务，扩大业务规模，实现互利共赢。
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setOpen3(true)} className='read-more' />
                  </Box>
                  <SwipeableDrawer
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    anchor={'right'}
                    open={open3}
                    onOpen={() => setOpen3(true)}
                    onClose={() => setOpen3(false)}
                    sx={{
                      '& .MuiDrawer-paper': {boxSizing: 'border-box', width: width / 2},
                    }}
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
                        background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                      }}
                    >
                      <Typography variant='h5' mb={4}>
                        业务互补
                      </Typography>
                      <Typography variant='body1' mb={4}>
                        通过跨链服务实现电子存证链与法院专网链业务数据互信，并统一在司法链上存证和在线核验，为智慧法院建设提供有力支撑，全面提升多部门异构链间的业务协同和审判质效。
                      </Typography>
                      <img src='http://cdn.yourtheme.cn/data_exchange.png' alt='exchange' width='100%' />
                    </Box>
                  </SwipeableDrawer>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            pb={20}
            sx={{
              zIndex: 1,
              position: 'relative',
              '& .title': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
              '& .hover_title': {
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.8)',
                visibility: 'none',
                opacity: 0,
                position: 'absolute',
                top: '95px',
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 10px',
                cursor: 'pointer',
                width: '240px',
                height: '214px',
                backgroundImage: `url(${RoadmapShine})`,
                backgroundSize: '0 0',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '140px 140px',
                transition: 'background .5s ease',
                '&.active': {
                  backgroundSize: '230px 230px',
                  backgroundPosition: '-47px -47px',
                  '& .title': {
                    opacity: 0,
                    display: 'none',
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
                    animation: 'scaleB 0.8s ease-in-out forwards',
                  },
                },
                '&.inactive': {
                  '& .roadmap_ball': {
                    animation: 'scaleS 0.8s ease forwards',
                  },
                },
              },
              '& .roadmap_ball': {
                display: 'inline-block',
              },
              '& .roadmap_desc': {
                display: 'none',
                position: 'absolute',
                top: '148px',
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
              <Box mb={14} display='flex' alignItems='flex-end'>
                <Typography variant='h3' mr={5}>
                  <ColorText mr={1}>BitXHub</ColorText>开源规划
                </Typography>
                <ReadMore to='/about#roadmap' mb={1} />
              </Box>
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
                  <Typography variant='body1' className={`title`}>
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
                      2021.04
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>提供链原生的应用链、网关和用户的统一身份标识</li>
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
                  <Typography variant='body1' className='title'>
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
                      <li>区块和交易的实时展示</li>
                      <li>应用链和验证规则管理</li>
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
                  <Typography variant='body1' className='title'>
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
                      2021.08
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>提供资产/数据交换服务</li>
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
                  <Typography variant='body1' className={`title`}>
                    跨链治理框架
                  </Typography>
                  <img src={RoadmapBall} className={`roadmap_ball`} alt='ball' height={36} />
                  <Typography variant='subtitle2' className={`hover_title`}>
                    跨链治理框架
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
                      2021.10
                    </Typography>
                    <Divider sx={{background: '#405584'}} />
                    <ul>
                      <li>统一身份管理和权限控制</li>
                      <li>节点管理及数据审计服务</li>
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
                        '& .datum_meta': {
                          display: 'block',
                          marginLeft: '20px',
                          '& h5': {
                            color: 'rgba(255, 255, 255, 0.5)',
                            marginBottom: '12px',
                            position: 'relative',
                            '&:before': {
                              content: '" "',
                              display: 'block',
                              width: '8px',
                              height: '8px',
                              borderRadius: '2px',
                              background: 'rgba(255, 255, 255, 0.5)',
                              position: 'absolute',
                              left: '-20px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            },
                          },
                        },
                        '& .datum_meta_list': {display: 'none', '& h6': {lineHeight: '26px', fontWeight: 400}},
                        '& .datum_item': {
                          display: 'flex',
                          alignItems: 'center',
                          padding: '35px 0',
                          transition: 'background 0.4s ease',
                          backgroundRepeat: 'no-repeat',
                          backgroundImage: `url(${DataCard})`,
                          backgroundPosition: 'top 1px left 70px',
                          backgroundSize: '0 215px',
                          '& .datum_ball_active': {
                            display: 'none',
                          },
                          '&:hover, &.active': {
                            backgroundSize: '632px 215px',
                            '& .datum_meta': {
                              display: 'none',
                            },
                            '& .datum_ball_active': {
                              display: 'block',
                            },
                            '& .datum_ball': {
                              display: 'none',
                            },
                            '& .datum_meta_list': {
                              display: 'block',
                            },
                          },
                        },
                      }}
                    >
                      <Box
                        position='relative'
                        ml={15}
                        mt={10}
                        className={`datum_item`}
                        onMouseEnter={() => setDatumActive('')}
                        onMouseLeave={() => setDatumActive('active')}
                      >
                        <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                        <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                        <Box position='absolute' className='datum_num'>
                          <Typography variant='h3'>3</Typography>
                          <Typography variant='body1'>项</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h5'>参与测评</Typography>
                            <Typography variant='body1'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
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
                      <Box
                        position='relative'
                        ml={6}
                        className={`datum_item ${datumActive}`}
                        onMouseEnter={() => setDatumActive('')}
                        onMouseLeave={() => setDatumActive('active')}
                      >
                        <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                        <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                        <Box position='absolute' className={'datum_num'}>
                          <Typography variant='h3'>4</Typography>
                          <Typography variant='body1'>项</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h5'>专利&论文</Typography>
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
                      <Box
                        position='relative'
                        ml={12}
                        className={'datum_item'}
                        onMouseEnter={() => setDatumActive('')}
                        onMouseLeave={() => setDatumActive('active')}
                      >
                        <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                        <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                        <Box position='absolute' className={'datum_num'}>
                          <Typography variant='h3'>23</Typography>
                          <Typography variant='body1'>篇</Typography>
                        </Box>
                        <Box pl={6}>
                          <Box className='datum_meta'>
                            <Typography variant='h5'>专利&论文</Typography>
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
                <Button
                  variant='outlined'
                  color='primary'
                  size='large'
                  component='a'
                  target='_target'
                  href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'
                >
                  白皮书
                  <ColorText ml={2}>
                    <i className='icon icon-chevron-right' />
                  </ColorText>
                </Button>
              </Grid>
              <Grid item md={4}>
                <Typography variant='body2' mb={4}>
                  关于技术指导
                </Typography>
                <Button
                  variant='outlined'
                  color='primary'
                  size='large'
                  component='a'
                  href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html'
                  target='_blank'
                >
                  查看文档
                  <ColorText ml={2}>
                    <i className='icon icon-chevron-right' />
                  </ColorText>
                </Button>
              </Grid>
              <Grid item md={4} textAlign='left'>
                <Typography variant='body2' ml={7} mb={4}>
                  快速体验跨链
                </Typography>
                <Link to='/quick'>
                  <Button variant='outlined' color='primary' size='large'>
                    快速开始
                    <ColorText ml={2}>
                      <i className='icon icon-chevron-right' />
                    </ColorText>
                  </Button>
                </Link>
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
