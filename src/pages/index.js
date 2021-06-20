import {StaticImage} from 'gatsby-plugin-image'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Drawer, Grid, Typography} from '@material-ui/core'
import {ColorText, ReadMore} from '../components/style'
import CaseBG from '../images/index_case_bg.png'
import DataBG from '../images/index_data_bg.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import lottie from 'lottie-web'
import data from './data.json'
import RoadmapBall from '../images/roadmap_ball.svg'
import Datum1 from '../images/datum_1.svg'
import Datum2 from '../images/datum_2.svg'
import Datum3 from '../images/datum_3.svg'

import IndexBG1 from '../images/index_bg_1.png'
import CardBG1 from '../images/01.png'
import CardBG2 from '../images/02.png'
import CardBG3 from '../images/03.png'
import {usePrevious, useWindowScroll} from 'react-use'
import {Link} from 'gatsby'

let firstUpFlag = false
let firstDownFlag = false
let secondUpFlag = false
let secondDownFlag = false
let secondFinish = false
let scrolled = false

const fadeInUp = 'animate__fadeInUp'
const fadeOutDown = 'animate__fadeOutDown'

const IndexPage = () => {
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  // const [scrollTop, setScrollTop] = useState(0)

  const [firstName, setFirstName] = useState('animate__fadeInUp')
  const [secondName, setSecondName] = useState('')
  const [thirdName, setThirdName] = useState('')
  const [open, setOpen] = useState()

  const {y} = useWindowScroll()
  const prevY = usePrevious(y)
  const isUp = prevY > y

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

  // useEffect(() => {
  //   console.log('set')
  //   const onScroll = e => {
  //     console.log(e.target.documentElement.scrollTop)
  //     setScrollTop(e.target.documentElement.scrollTop)
  //   }
  //   window.addEventListener('scroll', onScroll)
  //
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [setScrollTop, window])

  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const handleFirstUp = async () => {
    if (firstUpFlag) return
    firstUpFlag = true
    console.log('Handle first up')
    document.body.style.overflow = 'hidden'
    animation.resetSegments(true)
    setSecondName(fadeOutDown)
    for (let i = animation.currentFrame; i > 600; i--) {
      animation.goToAndStop(i, true)
      await sleep(4 / 10)
    }

    for (let i = 600; i > 500; i--) {
      animation.goToAndStop(i, true)
      await sleep(8 / 10)
    }

    setFirstName(fadeInUp)
    document.body.style.overflow = ''
    window.scrollTo(0, 1500)
    animation.playSegments([0, 500], true)
    firstDownFlag = false
  }

  const handle = async () => {
    if (firstDownFlag) return
    firstDownFlag = true
    console.log('Handle first down')
    document.body.style.overflow = 'hidden'
    // console.log(animation.currentFrame)
    setFirstName('animate__fadeOutDown')
    for (let i = animation.currentFrame; i < 500; i++) {
      animation.goToAndStop(i, true)
    }
    for (let i = 500; i < 600; i++) {
      animation.goToAndStop(i, true)
      await sleep(4 / 10)
    }
    setSecondName('animate__fadeInUp')
    for (let i = 600; i < 700; i++) {
      animation.goToAndStop(i, true)
      await sleep(8 / 10)
    }
    document.body.style.overflow = ''
    window.scrollTo(0, 1500)
    animation.playSegments([700, 2000], true)
    firstUpFlag = false
  }

  const handleSecond = async () => {
    if (secondDownFlag) return
    secondDownFlag = true
    console.log('Handle second down animation')
    document.body.style.overflow = 'hidden'
    setSecondName('animate__fadeOutDown')
    for (let i = 1300; i < 1500; i++) {
      animation.goToAndStop(i, true)
      await sleep(1)
    }
    setThirdName('animate__fadeInUp')
    document.body.style.overflow = ''
    window.scrollTo(0, 3000)
    secondFinish = true
    secondUpFlag = false
  }

  const handleSecondUp = async () => {
    if (secondUpFlag) return
    secondUpFlag = true
    console.log('Handle second up animation')
    document.body.style.overflow = 'hidden'
    animation.resetSegments(true)
    setThirdName(fadeOutDown)
    for (let i = 2200; i > 2000; i--) {
      animation.goToAndStop(i, true)
      await sleep(2)
    }
    document.body.style.overflow = ''
    window.scrollTo(0, 3000)
    setSecondName(fadeInUp)
    secondDownFlag = false
    animation.playSegments([700, 2000], true)
  }

  useEffect(() => {
    // setFirstName(scrollTop > 1500 ? fadeOut : '')
    // setSecondName(scrollTop > 800 && scrollTop < 3600 ? fadeIn : secondName !== '' && '')
    // setThirdName(scrollTop > 3800 && scrollTop < 4600 ? fadeIn : scrollTop > 4600 ? 'animate__fadeOutUp' : '')
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

      if (y > 1500 && y < 3500) {
        handle()
      }

      if (y > 1500 && y < 3000) {
        if (!isUp) {
          animation.goToAndPlay(animation.currentFrame + 10, true)
        } else {
          animation.goToAndPlay(animation.currentFrame - 15, true)
        }
      }

      if (y > 3000 && y < 5500) {
        handleSecond()
      }

      if (isUp) {
        if (y < 3000 && y > 1500) {
          if (secondDownFlag) {
            handleSecondUp()
          }
        }
      }

      if (y > 3200 && y < 5500 && secondFinish) {
        if (scrolled) return
        scrolled = true
        console.log('Auto scroll')
        // window.scrollTo(0, 4200)
        window.scrollTo({
          top: 4000,
          left: 0,
          behavior: 'smooth',
        })
        setThirdName('animate__fadeOutUp')
        animation.goToAndStop(2000000)
      }
      if (y < 4000 && y > 3000 && secondFinish) {
        if (isUp) {
          window.scrollTo({
            top: 3200,
            left: 0,
            behavior: 'smooth',
          })
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

  const FirstContent = () => {
    return (
      <>
        <Typography variant='h2'>
          <ColorText>万链互连</ColorText>
        </Typography>
        <Typography variant='h2' mb={6}>
          共建生态
        </Typography>
        <Typography variant='subtitle1' mb={6} maxWidth='72%'>
          为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
        </Typography>
        <Link to='/quick'>
          <Button variant='outlined' size='large'>
            快速开始
            <ChevronRightIcon />
          </Button>
        </Link>
      </>
    )
  }

  return (
    <Layout>
      <SEO title='Home' />
      <Box
        sx={{
          backgroundImage: `url(${IndexBG1})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '2000px 0',
          zIndex: -2,
        }}
      >
        <Container maxWidth='lg'>
          <div
            ref={divRef}
            style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: -1, right: '0px'}}
          />
          <Box minHeight='4000px'>
            <Box position='fixed' style={{bottom: '50%', transform: 'translateY(50%)'}}>
              <Box className={`animate__animated animate__faster ${firstName}`}>
                <FirstContent />
              </Box>
            </Box>
            <Box
              position='fixed'
              style={{bottom: '50%', zIndex: -1, transform: 'translate(123%, 50%)', width: '560px'}}
            >
              <Box sx={{opacity: 0}} className={`animate__animated animate__faster ${secondName}`}>
                <Typography display='flex' mb={8} variant='h3'>
                  <ColorText>万链如一</ColorText>
                  <Box mb={2}>一可链万</Box>
                </Typography>
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <Box
                      p={5}
                      sx={{
                        borderRadius: '16px',
                        background:
                          'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                      }}
                    >
                      <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                        <StaticImage src='../images/1.svg' height={30} alt='icon' />
                        <Box ml={3}>异构适配</Box>
                      </Typography>
                      <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box
                      p={5}
                      sx={{
                        borderRadius: '16px',
                        background:
                          'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                      }}
                    >
                      <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                        <StaticImage src='../images/2.svg' height={30} alt='icon' />
                        <Box ml={3}>异构适配</Box>
                      </Typography>
                      <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box
                      p={5}
                      sx={{
                        borderRadius: '16px',
                        background:
                          'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                      }}
                    >
                      <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                        <StaticImage src='../images/3.svg' height={30} alt='icon' />
                        <Box ml={3}>异构适配</Box>
                      </Typography>
                      <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box
                      p={5}
                      sx={{
                        borderRadius: '16px',
                        background:
                          'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                      }}
                    >
                      <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                        <StaticImage src='../images/4.svg' height={30} alt='icon' />
                        <Box ml={3}>异构适配</Box>
                      </Typography>
                      <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box position='fixed' style={{bottom: '50%', zIndex: -1, transform: 'translateY(50%)'}}>
              <Box sx={{opacity: 0}} className={`animate__animated animate__faster ${thirdName}`}>
                <Box fontSize='48px' mb={15}>
                  <ColorText>更安全、更高效</ColorText>
                </Box>
                <Box display='flex' alignItems='center' mb={8} position='relative'>
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/5.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '15px', top: '15px'}}
                    />
                  </Box>
                  <Box
                    height={1}
                    width={120}
                    position='absolute'
                    left={-20}
                    borderTop='1px dashed #ffffff'
                    zIndex={-1}
                  />
                  <Box
                    p={4}
                    sx={{
                      borderRadius: '16px',
                      background:
                        'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                    }}
                  >
                    <Typography variant='subtitle1' mb={2} display='flex' alignItems='center'>
                      <Box> 异构适配 </Box>
                    </Typography>
                    <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                  </Box>
                </Box>
                <Box
                  display='flex'
                  alignItems='center'
                  mb={8}
                  sx={{
                    position: 'relative',
                    '& :before': {
                      content: '" "',
                      display: 'block',
                      borderTop: '1px dashed #ffffff',
                      width: '50px',
                      top: '50%',
                      position: 'absolute',
                    },
                  }}
                >
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/6.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '20px', top: '20px'}}
                    />
                  </Box>
                  <Box
                    height={1}
                    width={120}
                    position='absolute'
                    left={-20}
                    borderTop='1px dashed #ffffff'
                    zIndex={-1}
                  />
                  <Box
                    p={4}
                    sx={{
                      borderRadius: '16px',
                      background:
                        'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                    }}
                  >
                    <Typography variant='subtitle1' mb={2} display='flex' alignItems='center'>
                      <Box>跨链网关</Box>
                    </Typography>
                    <Typography variant='body1'>便捷地接入跨链系统及支持跨链网络多层级扩展关键</Typography>
                  </Box>
                </Box>
                <Box display='flex' alignItems='center' position='relative'>
                  <Box mr={3} position='relative'>
                    <StaticImage src='../images/ball.svg' alt='ball' />
                    <StaticImage
                      src='../images/7.svg'
                      alt='ball'
                      style={{position: 'absolute', left: '20px', top: '20px'}}
                    />
                  </Box>
                  <Box
                    height={1}
                    width={120}
                    position='absolute'
                    left={-20}
                    borderTop='1px dashed #ffffff'
                    zIndex={-1}
                  />
                  <Box
                    p={4}
                    sx={{
                      borderRadius: '16px',
                      background:
                        'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
                    }}
                  >
                    <Typography variant='subtitle1' mb={2} display='flex' alignItems='center'>
                      <Box>应用链</Box>
                    </Typography>
                    <Typography variant='body1'>承载具体应用业务逻辑，分为同构应用链与异构应用链。</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
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
              <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                <Box
                  style={{
                    borderRadius: '10px',
                    maxWidth: '400px',
                    width: '400px',
                    background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);',
                  }}
                >
                  2222222222
                </Box>
              </Drawer>
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
            </Box>
          </Container>
        </Box>
        <Box
          pb={20}
          sx={{
            zIndex: 99999999,
            position: 'relative',
            '& .roadmap_desc': {
              display: 'none',
              position: 'absolute',
              bottom: '-160px',
              width: '260px',
              zIndex: -1,
              textAlign: 'left',
              background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '16px',
              border: '4px solid',
              borderImageSource:
                'linear-gradient(162.14deg, #162B75 -3.32%, rgba(28, 67, 102, 0.83) 19.27%, rgba(100, 143, 255, 0) 77%)',
              left: '50%',
              transform: 'translateX(-50%)',
              '& ul': {
                color: 'rgba(255, 255, 255, 0.6)',
                paddingLeft: '20px',
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
                <Typography variant='subtitle2' className='title'>
                  DID组件开源
                </Typography>
                <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                <Typography variant='body2' className='date'>
                  2021.04
                </Typography>
                <Box className='roadmap_desc' px={6} pb={2} pt={8}>
                  <Typography variant='subtitle2' mb={2}>
                    2021.06
                  </Typography>
                  <Divider />
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
                <Box className='roadmap_desc' px={6} pb={2} pt={8}>
                  <Typography variant='subtitle2' mb={2}>
                    2021.06
                  </Typography>
                  <Divider />
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
                <Box className='roadmap_desc' px={6} pb={2} pt={8}>
                  <Typography variant='subtitle2' mb={2}>
                    2021.06
                  </Typography>
                  <Divider />
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
                <Typography variant='subtitle2' className='title'>
                  联盟链跨链治理
                </Typography>
                <img src={RoadmapBall} className='roadmap_ball' alt='ball' height={36} />
                <Typography variant='body2' className='date'>
                  2021.10
                </Typography>
                <Box className='roadmap_desc' px={6} pb={2} pt={8}>
                  <Typography variant='subtitle2' mb={2}>
                    2021.06
                  </Typography>
                  <Divider />
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
          py={50}
          sx={{
            background: `url(${DataBG})`,
            backgroundPosition: 'center -180px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '2000px',
          }}
        >
          <Container maxWidth='lg'>
            <Box
              sx={{
                // background: `url(${RightBall})`,
                backgroundPosition: '80% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '76%',
              }}
            >
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
                    <Box position='relative' mb={10} ml={12}>
                      <img src={Datum1} alt='datum' height={139} />
                      <Box position='absolute' top='44px' left='44px'>
                        <Typography variant='h3' display='inline-block'>
                          3
                        </Typography>
                        <Typography variant='body1' display='inline-block'>
                          项
                        </Typography>
                      </Box>
                    </Box>
                    <Box position='relative' ml={2}>
                      <img src={Datum2} alt='datum' height={139} />
                      <Box position='absolute' top='44px' left='44px'>
                        <Typography variant='h3' display='inline-block'>
                          4
                        </Typography>
                        <Typography variant='body1' display='inline-block'>
                          项
                        </Typography>
                      </Box>
                    </Box>
                    <Box position='relative' mt={10} ml={12}>
                      <img src={Datum3} alt='datum' height={139} />
                      <Box position='absolute' top='44px' left='44px'>
                        <Typography variant='h3' display='inline-block'>
                          23
                        </Typography>
                        <Typography variant='body1' display='inline-block'>
                          篇
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
                <ChevronRightIcon />
              </Button>
            </Grid>
            <Grid item md={4}>
              <Typography variant='body2' mb={4}>
                关于技术指导
              </Typography>
              <Button variant='outlined' color='primary' size='large'>
                查看文档
                <ChevronRightIcon />
              </Button>
            </Grid>
            <Grid item md={4} textAlign='left'>
              <Typography variant='body2' ml={7} mb={4}>
                快速体验跨链
              </Typography>
              <Button variant='outlined' color='primary' size='large'>
                快速开始
                <ChevronRightIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}
export default IndexPage
