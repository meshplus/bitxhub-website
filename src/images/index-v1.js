import {StaticImage} from 'gatsby-plugin-image'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Grid, SwipeableDrawer, Typography} from '@material-ui/core'
import {ColorText, IndexBar, IndexDottedLine, ReadMore} from '../components/style'
import CaseBG from './index_case_bg.png'
import DataBG from './index_data_bg.png'
import lottie from 'lottie-web'
import data from '../pages/data.json'
import RoadmapBall from './roadmap_ball.svg'
import Datum1 from './datum_1.svg'
import Datum2 from './datum_2.svg'
import Datum3 from './datum_3.svg'

import IndexBG1 from './index_bg_1.png'
import CardBG1 from './01.png'
import CardBG2 from './02.png'
import CardBG3 from './03.png'
import {usePrevious, useWindowScroll, useWindowSize} from 'react-use'
import {Link} from 'gatsby'

let firstUpFlag = false
let firstDownFlag = false
let secondUpFlag = false
let secondDownFlag = false
let secondFinish = false
let caseDown = false
let caseUp = false

const fadeInUp = 'animate__fadeInUp'
const fadeOutDown = 'animate__fadeOutDown'

const IndexPage = () => {
  const divRef = useRef()
  const bgRef = useRef()
  const [animation, setAnimation] = useState()

  const [firstName, setFirstName] = useState('animate__fadeInUp')
  const [secondName, setSecondName] = useState('')
  const [thirdName, setThirdName] = useState('')
  const [open, setOpen] = useState()

  const {y} = useWindowScroll()
  const prevY = usePrevious(y)
  const isUp = prevY > y
  const {height} = useWindowSize()

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

  function useOnScreen(ref, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false)
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting)
        },
        {
          rootMargin,
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return () => {
        observer.unobserve(ref.current)
      }
    }, []) // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting
  }

  const ref = useRef()
  const onScreen = useOnScreen(ref, '20px')

  const [active, setActive] = useState({
    1: false,
    2: true,
    3: false,
    4: false,
  })

  const handleActive = p => {
    const init = {1: false, 2: false, 3: false, 4: false}
    setActive({...init, [p]: true})
  }

  if (typeof window !== 'undefined') {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))

  const handleFirstUp = async () => {
    if (firstUpFlag) return
    firstUpFlag = true
    console.log('Handle first up')
    document.body.style.overflow = 'hidden'
    animation.resetSegments(true)

    setSecondName(fadeOutDown)
    for (let i = animation.currentFrame; i > 600; i--) {
      animation.goToAndStop(i, true)
      await sleep(10)
    }

    for (let i = 600; i > 500; i--) {
      animation.goToAndStop(i, true)
      await sleep(10)
      if (i === 550) setFirstName(fadeInUp)
    }

    document.body.style.overflow = ''
    window.scrollTo(0, 1500)
    animation.playSegments([0, 500], true)
    firstDownFlag = false
  }

  const handle = async () => {
    if (firstDownFlag) return false
    firstDownFlag = true
    console.log('Handle first down')
    document.body.style.overflow = 'hidden'
    setFirstName('animate__fadeOutDown')
    for (let i = animation.currentFrame; i < 500; i++) {
      animation.goToAndStop(i, true)
    }
    for (let i = 500; i < 600; i++) {
      animation.goToAndStop(i, true)
      await sleep(8)
      if (i === 550) setSecondName('animate__fadeInUp')
    }
    for (let i = 600; i < 700; i++) {
      animation.goToAndStop(i, true)
      await sleep(4)
    }
    document.body.style.overflow = ''
    window.scrollTo(0, 1500)
    animation.playSegments([700, 2000], true)
    firstUpFlag = false
    return true
  }

  const handleSecond = async () => {
    if (secondDownFlag) return false
    secondDownFlag = true
    console.log('Handle second down animation')
    document.body.style.overflow = 'hidden'
    setSecondName('animate__fadeOutDown')
    for (let i = 1300; i < 1450; i++) {
      animation.goToAndStop(i, true)
      await sleep(10)
    }
    setThirdName('animate__fadeInUp')
    for (let i = 1450; i < 1550; i++) {
      animation.goToAndStop(i, true)
      await sleep(2)
    }
    document.body.style.overflow = ''
    window.scrollTo(0, 3000)
    secondFinish = true
    secondUpFlag = false
    return true
  }

  const handleSecondUp = async () => {
    if (secondUpFlag) return
    secondUpFlag = true
    console.log('Handle second up animation')
    document.body.style.overflow = 'hidden'
    animation.resetSegments(true)
    for (let i = 2250; i > 2150; i--) {
      animation.goToAndStop(i, true)
      await sleep(2)
      if (i === 2200) setThirdName(fadeOutDown)
    }
    for (let i = 2150; i > 2000; i--) {
      animation.goToAndStop(i, true)
      await sleep(10)
    }
    setSecondName(fadeInUp)
    document.body.style.overflow = ''
    window.scrollTo(0, 3000)
    secondDownFlag = false
    animation.playSegments([700, 2000], true)
  }

  useEffect(() => {
    if (animation) {
      if (y > 0 && y < 1500) {
        if (!isUp) {
          animation.goToAndPlay(animation.currentFrame + 5, true)
        } else {
          animation.goToAndPlay(animation.currentFrame - 15, true)
        }
      }

      if (isUp) {
        if (y < 1500 && y > 500) {
          if (firstDownFlag) {
            handleFirstUp()
          }
        }
      }

      if (y > 1500) {
        if (!firstDownFlag) {
          const finish = handle()
          if (finish) return
        }
      }

      if (y > 1500 && y < 3000) {
        if (!isUp) {
          animation.goToAndPlay(animation.currentFrame + 10, true)
        } else {
          animation.goToAndPlay(animation.currentFrame - 15, true)
        }
      }

      if (y > 3000) {
        if (!secondDownFlag) {
          const finish = handleSecond()
          if (finish) return
        }
      }

      if (isUp) {
        if (y < 3000 && y > 1500) {
          if (secondDownFlag) {
            handleSecondUp()
          }
        }
      }

      const caseY = ref.current.offsetTop
      if (onScreen && secondFinish && false) {
        if (!caseDown && !isUp) {
          console.log('Handle case down')
          window.scrollTo({
            top: caseY,
            left: 0,
            behavior: 'smooth',
          })
          document.body.style.overflow = 'hidden'
          caseUp = false
          caseDown = true
          setThirdName(fadeOutDown)
          animation.goToAndStop(2000000)
          document.body.style.overflow = ''
          // window.scrollTo(0, caseY)
        }
      }

      console.log(y)
      if (y < caseY && y > caseY - height && secondFinish && false) {
        if (isUp && !caseUp) {
          console.log('Handle case up')
          document.body.style.overflow = 'hidden'
          window.scrollTo({
            top: caseY - height,
            left: 0,
            behavior: 'smooth',
          })
          caseUp = true
          caseDown = false
          setThirdName(fadeInUp)
          animation.goToAndStop(1500, true)
          document.body.style.overflow = ''
        }
      }
    }
  }, [y, animation])

  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: data,
      container: divRef.current,
    })

    setAnimation(animation)
    animation.goToAndStop(0, true)
    animation.playSegments([0, 500], true)
    animation.addEventListener('enterFrame', e => {
      // console.log(e)
    })
  }, [])

  return (
    <Layout>
      <SEO title='Home' />
      <Box
        // display='none'
        sx={{
          backgroundImage: `url(${IndexBG1})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '2000px 0',
          zIndex: -1,
        }}
      >
        <Container maxWidth='lg'>
          <div
            ref={bgRef}
            style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: 0, right: '0px'}}
          />
          <div
            ref={divRef}
            style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: -1, right: '0px'}}
          />
          <Box minHeight='5000px'>
            <Box position='fixed' style={{bottom: '50%', transform: 'translateY(50%)', zIndex: 1}}>
              <Box className={`animate__animated animate__faster ${firstName}`}>
                <Typography variant='h2'>
                  <ColorText>万链互连</ColorText>
                </Typography>
              </Box>
              <Box className={`animate__animated animate__faster ${firstName}`}>
                <Typography variant='h2' mb={6}>
                  共建生态
                </Typography>
              </Box>
              <Box className={`animate__animated animate__faster ${firstName}`}>
                <Typography variant='subtitle1' mb={6} maxWidth='72%'>
                  为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                </Typography>
              </Box>
              <Box className={`animate__animated animate__faster ${firstName}`}>
                <Link to='/quick'>
                  <Button variant='outlined' size='large'>
                    快速开始
                    <i className='icon icon-chevron-right' />
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              position='fixed'
              style={{top: '50%', zIndex: -1, transform: 'translateY(-50%)'}}
              sx={{
                '& .animate__animated': {
                  opacity: 0,
                },
              }}
            >
              <Container maxWidth='lg'>
                <Grid container>
                  <Grid item md={6}>
                    <Box>
                      <Typography variant='h3' mb={15} className={`animate__animated animate__faster ${thirdName}`}>
                        <ColorText>更安全、更高效</ColorText>
                      </Typography>
                      <Box
                        display='flex'
                        alignItems='center'
                        mb={8}
                        position='relative'
                        className={`animate__animated animate__faster ${thirdName}`}
                      >
                        <Box mr={3} position='relative'>
                          <StaticImage src='../images/ball.svg' alt='ball' />
                          <StaticImage
                            src='../images/5.svg'
                            alt='ball'
                            style={{position: 'absolute', left: '15px', top: '15px'}}
                          />
                        </Box>
                        <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                          <IndexDottedLine />
                        </Box>
                        <IndexBar title='异构适配' desc='异构区块链协议适配，同时支持同构和异构应用链的适配' />
                      </Box>
                      <Box
                        display='flex'
                        alignItems='center'
                        position='relative'
                        mb={8}
                        className={`animate__animated animate__faster ${thirdName}`}
                      >
                        <Box mr={3} position='relative'>
                          <StaticImage src='../images/ball.svg' alt='ball' />
                          <StaticImage
                            src='../images/6.svg'
                            alt='ball'
                            style={{position: 'absolute', left: '20px', top: '20px'}}
                          />
                        </Box>
                        <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                          <IndexDottedLine />
                        </Box>
                        <IndexBar title='异构适配' desc='异构区块链协议适配，同时支持同构和异构应用链的适配' />
                      </Box>
                      <Box
                        display='flex'
                        alignItems='center'
                        position='relative'
                        className={`animate__animated animate__faster ${thirdName}`}
                      >
                        <Box mr={3} position='relative'>
                          <StaticImage src='../images/ball.svg' alt='ball' />
                          <StaticImage
                            src='../images/7.svg'
                            alt='ball'
                            style={{position: 'absolute', left: '20px', top: '20px'}}
                          />
                        </Box>
                        <Box position='absolute' top='50%' left={-45} zIndex={-1} width={140}>
                          <IndexDottedLine />
                        </Box>
                        <IndexBar title='异构适配' desc='异构区块链协议适配，同时支持同构和异构应用链的适配' />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box>
                      <Typography
                        display='flex'
                        mb={8}
                        variant='h3'
                        className={`animate__animated animate__faster ${secondName}`}
                      >
                        <ColorText>万链如一</ColorText>
                        <Box mb={2}>一可链万</Box>
                      </Typography>
                      <Grid container spacing={4}>
                        <Grid item md={6}>
                          <IndexBar
                            className={`animate__animated animate__faster ${secondName}`}
                            title={
                              <>
                                <StaticImage src='../images/1.svg' height={30} alt='icon' />
                                <Box ml={3}>异构适配</Box>
                              </>
                            }
                            desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                          />
                        </Grid>
                        <Grid item md={6}>
                          <IndexBar
                            className={`animate__animated animate__faster ${secondName}`}
                            title={
                              <>
                                <StaticImage src='../images/2.svg' height={30} alt='icon' />
                                <Box ml={3}>异构适配</Box>
                              </>
                            }
                            desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                          />
                        </Grid>
                        <Grid item md={6}>
                          <IndexBar
                            className={`animate__animated animate__faster ${secondName}`}
                            title={
                              <>
                                <StaticImage src='../images/2.svg' height={30} alt='icon' />
                                <Box ml={3}>异构适配</Box>
                              </>
                            }
                            desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                          />
                        </Grid>
                        <Grid item md={6}>
                          <IndexBar
                            className={`animate__animated animate__faster ${secondName}`}
                            title={
                              <>
                                <StaticImage src='../images/2.svg' height={30} alt='icon' />
                                <Box ml={3}>异构适配</Box>
                              </>
                            }
                            desc='异构区块链协议适配，同时支持同构和异构应用链的适配'
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box position='fixed' style={{bottom: '50%', zIndex: -1, transform: 'translateY(50%)'}}></Box>
          </Box>
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
                    backgroundImage: `url(${CardBG1}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundSize: '200px 142px, 100% 380px',
                    backgroundPosition: '20px 20px, 0 0',
                    backgroundRepeat: 'no-repeat',
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
                }}
              >
                <Box zIndex={3}>
                  <Typography variant='h5' mb={5}>
                    资产互换
                  </Typography>
                  <Typography variant='body2' mb={7}>
                    为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                  </Typography>
                  <ReadMore to='/' onClick={() => setOpen(true)} />
                </Box>
              </Box>
              <SwipeableDrawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
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
                    backgroundImage: `url(${CardBG2}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundSize: '200px 142px, 100% 380px',
                    backgroundPosition: '20px 20px, 0 0',
                    backgroundRepeat: 'no-repeat',
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
                }}
              >
                <Box zIndex={3}>
                  <Typography variant='h5' mb={5}>
                    数据互通
                  </Typography>
                  <Typography variant='body2' mb={7}>
                    为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                  </Typography>
                  <ReadMore to='/' onClick={() => setOpen(true)} />
                </Box>
              </Box>
              <SwipeableDrawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
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
                    backgroundImage: `url(${CardBG3}), linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                    backgroundSize: '200px 142px, 100% 380px',
                    backgroundPosition: '20px 20px, 0 0',
                    backgroundRepeat: 'no-repeat',
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
                }}
              >
                <Box zIndex={3}>
                  <Typography variant='h5' mb={5}>
                    业务互补
                  </Typography>
                  <Typography variant='body2' mb={7}>
                    为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
                  </Typography>
                  <ReadMore to='/' onClick={() => setOpen(true)} />
                </Box>
              </Box>
              <SwipeableDrawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
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
                <Typography variant='subtitle2' className={`animate__animated animate__fadeInUp animate__faster title`}>
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
                <Typography variant='subtitle2' className={`title animate__animated animate__fadeInUp animate__faster`}>
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
export default IndexPage
