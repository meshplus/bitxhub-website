import {StaticImage} from 'gatsby-plugin-image'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Divider, Drawer, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import LeftBall from '../images/left_ball.svg'
import RightBall from '../images/right_ball.svg'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import lottie from 'lottie-web'
import data from './data.json'
import RoadmapBall from '../images/roadmap_ball.svg'
import Datum1 from '../images/datum_1.svg'
import Datum2 from '../images/datum_2.svg'
import Datum3 from '../images/datum_3.svg'

const IndexPage = () => {
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [scrollTop, setScrollTop] = useState(0)

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [thirdName, setThirdName] = useState('')
  const [open, setOpen] = useState()

  const [active, setActive] = useState({
    1: false,
    2: true,
    3: false,
    4: false,
  })

  const handleActive = p => {
    console.log(p)
    const init = {1: false, 2: false, 3: false, 4: false}
    console.log({...init, [p]: true})
    setActive({...init, [p]: true})
  }

  if (typeof window !== 'undefined') {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    const onScroll = e => {
      console.log(e.target.documentElement.scrollTop)
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  useEffect(() => {
    const fadeIn = 'animate__fadeInUpBig'
    const fadeOut = 'animate__fadeOutDown'
    setFirstName(scrollTop > 700 ? fadeOut : '')
    setSecondName(scrollTop > 800 && scrollTop < 3600 ? fadeIn : secondName !== '' && '')
    setThirdName(scrollTop > 3800 && scrollTop < 4600 ? fadeIn : scrollTop > 4600 ? 'animate__fadeOutUp' : '')
    if (animation) {
      if (scrollTop > 0 && scrollTop < 1000) {
        animation.goToAndStop(400 + scrollTop * 0.2, true)
      }

      if (scrollTop > 1000) {
        animation.goToAndStop(400 + scrollTop * 0.5, true)
      }

      if (scrollTop > 3400) {
        animation.goToAndStop(400 + 3400 * 0.3 + scrollTop * 0.2, true)
      }
    }
  }, [scrollTop, animation])

  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: data,
      container: divRef.current,
    })

    setAnimation(animation)
    animation.goToAndStop(0, true)
    animation.playSegments([0, 500], true)
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
        <Typography variant='body1' mb={6} maxWidth='72%'>
          为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
        </Typography>
        <Button variant='outlined' size='large'>
          快速开始
          <ChevronRightIcon />
        </Button>
      </>
    )
  }

  return (
    <Layout>
      <SEO title='Home' />
      <Container maxWidth='lg'>
        <div ref={divRef} style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: -1, right: '0px'}} />
        <Box minHeight='5200px'>
          <Box position='fixed' style={{bottom: '50%', transform: 'translateY(50%)'}}>
            <Box className={`animate__animated animate__fadeInUp animate__faster ${firstName}`}>
              <FirstContent />
            </Box>
          </Box>
          <Box position='fixed' style={{bottom: '50%', zIndex: -1, transform: 'translate(123%, 50%)', width: '560px'}}>
            <Box sx={{opacity: 0}} className={`animate__animated animate__faster ${secondName}`}>
              <Box display='flex' mb={8} fontSize='48px'>
                <ColorText>万链如一</ColorText>
                <Box mb={2}>一可链万</Box>
              </Box>
              <Grid container spacing={4}>
                <Grid item md={6}>
                  <Box
                    p={5}
                    sx={{
                      borderRadius: '16px',
                      background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                      background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                      background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                      background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                  <StaticImage src='../images/5.svg' alt='ball' style={{position: 'absolute', left: '15px', top: '15px'}} />
                </Box>
                <Box height={1} width={120} position='absolute' left={-20} borderTop='1px dashed #ffffff' zIndex={-1} />
                <Box
                  p={4}
                  sx={{
                    borderRadius: '16px',
                    background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                  <StaticImage src='../images/6.svg' alt='ball' style={{position: 'absolute', left: '20px', top: '20px'}} />
                </Box>
                <Box height={1} width={120} position='absolute' left={-20} borderTop='1px dashed #ffffff' zIndex={-1} />
                <Box
                  p={4}
                  sx={{
                    borderRadius: '16px',
                    background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
                  <StaticImage src='../images/7.svg' alt='ball' style={{position: 'absolute', left: '20px', top: '20px'}} />
                </Box>
                <Box height={1} width={120} position='absolute' left={-20} borderTop='1px dashed #ffffff' zIndex={-1} />
                <Box
                  p={4}
                  sx={{
                    borderRadius: '16px',
                    background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
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
      <Box
        pt={24}
        pb={70}
        sx={{
          background: `url(${LeftBall})`,
          backgroundPosition: 'left 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '68%',
        }}
      >
        <Container maxWidth='lg'>
          <Box display='flex' alignItems='center' fontSize='48px' mb={14}>
            <ColorText mr={1}>BitXHub</ColorText>构建解决方案
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <Box
              onClick={() => setOpen(true)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px',
                padding: '50px',
                width: '320px',
                height: '380px',
                marginLeft: '20px',
                position: 'relative',
                transition: 'all .3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scaleY(1.1)',
                },
                '&:before': {
                  display: 'block',
                  content: '" "',
                  position: 'absolute',
                  top: '30px',
                  width: '30px',
                  height: '30px',
                  color: '#fff',
                },
              }}
            >
              <Typography variant='h5' mb={5}>
                资产互换
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
            </Box>
            <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
              <Box style={{borderRadius: '10px', maxWidth: '400px', width: '400px', background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);'}}>2222222222</Box>
            </Drawer>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px',
                padding: '50px',
                width: '320px',
                height: '380px',
                marginLeft: '20px',
                position: 'relative',
                transition: 'all .3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scaleY(1.1)',
                },
                '&:before': {
                  display: 'block',
                  content: '" "',
                  position: 'absolute',
                  top: '30px',
                  width: '30px',
                  height: '30px',
                  color: '#fff',
                },
              }}
            >
              <Typography variant='h5' mb={5}>
                数据互通
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px',
                padding: '50px',
                width: '320px',
                height: '380px',
                marginLeft: '20px',
                position: 'relative',
                transition: 'all .3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scaleY(1.1)',
                },
                '&:before': {
                  display: 'block',
                  content: '" "',
                  position: 'absolute',
                  top: '30px',
                  width: '30px',
                  height: '30px',
                  color: '#fff',
                },
              }}
            >
              <Typography variant='h5' mb={5}>
                业务互补
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
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
            borderImageSource: 'linear-gradient(162.14deg, #162B75 -3.32%, rgba(28, 67, 102, 0.83) 19.27%, rgba(100, 143, 255, 0) 77%)',
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
              transition: 'all .2s',
              display: 'inline-block',
              height: '160px',
            },
          },
        }}
      >
        <Container maxWidth='lg'>
          <Box display='flex' alignItems='center' fontSize='48px' mb={14}>
            <ColorText>BitXHub</ColorText>开源规划
          </Box>
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
            <Box textAlign='center' sx={{width: '160px', cursor: 'pointer'}} className={`${active[1] ? 'active' : ''}`} mr={20} onClick={() => handleActive(1)}>
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
            <Box textAlign='center' sx={{width: '160px', cursor: 'pointer'}} className={`${active[2] ? 'active' : ''}`} mr={20} onClick={() => handleActive(2)}>
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
            <Box textAlign='center' sx={{width: '160px', cursor: 'pointer'}} className={`${active[3] ? 'active' : ''}`} mr={20} onClick={() => handleActive(3)}>
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
            <Box textAlign='center' sx={{width: '160px', cursor: 'pointer'}} className={`${active[4] ? 'active' : ''}`} mr={20} onClick={() => handleActive(4)}>
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
      <Container maxWidth='lg'>
        <Box
          py={30}
          sx={{
            background: `url(${RightBall})`,
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
                <Box position='relative' mb={10} ml={47}>
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
                <Box position='relative' ml={36}>
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
                <Box position='relative' mt={10} ml={48}>
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
      <Box textAlign='center'>
        <Box fontSize='48px' mb={8}>
          <ColorText>了解更多</ColorText>
        </Box>
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
    </Layout>
  )
}
export default IndexPage
