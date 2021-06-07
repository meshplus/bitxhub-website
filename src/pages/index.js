import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, createStyles, Drawer, Grid, makeStyles, Typography} from '@material-ui/core'
import {Hero} from '../components/style'
import LeftBall from '../images/left_ball.svg'
import RightBall from '../images/right_ball.svg'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import lottie from 'lottie-web'
import data from './data.json'

const useStyles = makeStyles(theme =>
  createStyles({
    drawer: {
      background: '#000',
      borderRadius: '10px',
    },
    banner: {
      minHeight: '12500px',
      display: 'flex',
      alignItems: 'center',
    },
    maxHeight: {
      height: '100%',
    },
    title: {
      // background: '-webkit-linear-gradient(left, #2E7CFE, #01E1FF, #7DBCFC)',
      background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
      color: 'transparent',
      fontSize: '72px',
      fontWeight: 800,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    build: {
      background: `url(${LeftBall})`,
      backgroundPosition: 'left 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '68%',
    },
    cross: {
      background: `url(${RightBall})`,
      backgroundPosition: 'right 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70%',
    },
    card: {
      borderRadius: '16px',
      background: 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
    },
    carding: {
      position: 'relative',
      '& :before': {
        content: ' ',
        display: 'block',
        borderTop: '1px dashed #ffffff',
        width: '50px',
        top: '50%',
        position: 'absolute',
      },
    },
    line: {
      height: '1px',
      width: '120px',
      position: 'absolute',
      borderTop: '1px dashed #ffffff',
      zIndex: -1,
      left: '-20px',
    },
    carder: {
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
        content: ' ',
        position: 'absolute',
        top: '30px',
        width: '30px',
        height: '30px',
        color: '#fff',
      },
    },
  })
)

const IndexPage = () => {
  const classes = useStyles()
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [scrollTop, setScrollTop] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [opacity2, setOpacity2] = useState(0)
  const [opacity3, setOpacity3] = useState(0)

  const [open, setOpen] = useState()

  useEffect(() => {
    const onScroll = e => {
      console.log(e.target.documentElement.scrollTop)
      setScrollTop(e.target.documentElement.scrollTop)
      // setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  useEffect(() => {
    if (scrollTop > 200) {
      setOpacity(1 - scrollTop / 1000)
    } else {
      setOpacity(1)
    }
    if (scrollTop > 1000) {
      setOpacity2((scrollTop - 300) / 1000 / 2)
    } else {
      setOpacity2(0)
    }

    if (scrollTop > 7600) {
      setOpacity2(1 - (scrollTop - 5900) / 600)
    }

    if (scrollTop > 8400) {
      setOpacity3((scrollTop - 8400) / 1000 / 1)
    } else {
      setOpacity3(0)
    }

    if (animation) {
      animation.goToAndStop(scrollTop)
    }
  }, [scrollTop])

  useEffect(() => {
    console.log(divRef.current)
    const animation = lottie.loadAnimation({
      animationData: data,
      container: divRef.current,
    })

    setAnimation(animation)

    // animation.setSpeed(2)
    // animation.setDirection(-1)
    animation.goToAndStop(0, true)
  }, [])

  return (
    <Layout>
      <SEO title='Home' />
      <Container maxWidth='lg'>
        <div ref={divRef} style={{position: 'fixed', top: '50%', transform: 'translateY(-50%)', zIndex: -1, right: '0px'}} />
        <Box className={classes.banner}>
          <Box position='fixed' style={{bottom: '50%', transform: 'translateY(50%)', opacity: opacity}}>
            <Box className={classes.title}>万链互连</Box>
            <Box mb={6} fontSize='72px'>
              共建生态
            </Box>
            <Typography variant='body1' mb={6} maxWidth='72%'>
              为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展
            </Typography>
            <Button variant='outlined' size='large'>
              快速开始
              <ChevronRightIcon />
            </Button>
          </Box>
          <Box position='fixed' style={{bottom: '50%', transform: 'translate(123%, 50%)', width: '560px', opacity: opacity2}}>
            <Box display='flex' mb={8}>
              <Box fontSize='48px' mr={2} className={classes.title}>
                万链如一
              </Box>
              <Box mb={2} fontSize='48px'>
                一可链万
              </Box>
            </Box>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <Box className={classes.card} p={5}>
                  <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                    <StaticImage src='../images/1.svg' height={30} alt='icon' />
                    <Box ml={3}>异构适配</Box>
                  </Typography>
                  <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.card} p={5}>
                  <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                    <StaticImage src='../images/2.svg' height={30} alt='icon' />
                    <Box ml={3}>异构适配</Box>
                  </Typography>
                  <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.card} p={5}>
                  <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                    <StaticImage src='../images/3.svg' height={30} alt='icon' />
                    <Box ml={3}>异构适配</Box>
                  </Typography>
                  <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.card} p={5}>
                  <Typography variant='subtitle1' mb={4} display='flex' alignItems='center'>
                    <StaticImage src='../images/4.svg' height={30} alt='icon' />
                    <Box ml={3}>异构适配</Box>
                  </Typography>
                  <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box position='fixed' style={{bottom: '50%', transform: 'translateY(50%)', opacity: opacity3}}>
            <Box fontSize='48px' className={classes.title} mb={15}>
              更安全、更高效
            </Box>
            <Box display='flex' alignItems='center' mb={8} position='relative'>
              <Box mr={3} position='relative'>
                <StaticImage src='../images/ball.svg' alt='ball' />
                <StaticImage src='../images/5.svg' alt='ball' style={{position: 'absolute', left: '15px', top: '15px'}} />
              </Box>
              <Box className={classes.line} />
              <Box className={classes.card} p={4}>
                <Typography variant='subtitle1' mb={2} display='flex' alignItems='center'>
                  <Box> 异构适配 </Box>
                </Typography>
                <Typography variant='body1'>异构区块链协议适配，同时支持同构和异构应用链的适配</Typography>
              </Box>
            </Box>
            <Box display='flex' alignItems='center' mb={8} className={classes.carding}>
              <Box mr={3} position='relative'>
                <StaticImage src='../images/ball.svg' alt='ball' />
                <StaticImage src='../images/6.svg' alt='ball' style={{position: 'absolute', left: '20px', top: '20px'}} />
              </Box>
              <Box className={classes.line} />
              <Box className={classes.card} p={4}>
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
              <Box className={classes.line} />
              <Box className={classes.card} p={4}>
                <Typography variant='subtitle1' mb={2} display='flex' alignItems='center'>
                  <Box>应用链</Box>
                </Typography>
                <Typography variant='body1'>承载具体应用业务逻辑，分为同构应用链与异构应用链。</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className={classes.build} pt={24} pb={70}>
        <Container maxWidth='lg'>
          <Box display='flex' alignItems='center' fontSize='48px' mb={14}>
            <Box className={classes.title} mr={2}>
              BitXHub
            </Box>
            构建解决方案
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <Box className={classes.carder} onClick={() => setOpen(true)}>
              <Typography variant='h5' mb={5}>
                资产互换
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
            </Box>
            <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
              <Box style={{borderRadius: '10px', maxWidth: '400px', width: '400px', background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);'}}>2222222222</Box>
            </Drawer>
            <Box className={classes.carder}>
              <Typography variant='h5' mb={5}>
                数据互通
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
            </Box>
            <Box className={classes.carder}>
              <Typography variant='h5' mb={5}>
                业务互补
              </Typography>
              <Typography variant='body2'>为链上的资产、数据、服务开拓价值互通的渠道，助力区块链技术从“链孤岛”到形成“链网络”的发展</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box pb={75}>
        <Container maxWidth='lg'>
          <Box display='flex' alignItems='center' fontSize='48px' mb={14}>
            <Box className={classes.title} mr={2}>
              BitXHub
            </Box>
            开源规划
          </Box>
        </Container>
      </Box>
      <Hero className={classes.cross}>
        <Container maxWidth='lg' style={{height: '100vh'}}>
          <Grid item md={4} height='100%' display='flex' alignItems='center'>
            <Box>
              <Box className={classes.title} fontSize='72px'>
                跨链
              </Box>
              <Box fontSize='72px'>行业领导者</Box>
            </Box>
          </Grid>
        </Container>
      </Hero>
      <Box textAlign='center'>
        <Box className={classes.title} fontSize='48px' mr={2}>
          了解更多
        </Box>
      </Box>
      {/*<StaticImage*/}
      {/*  src='../images/gatsby-astronaut.png'*/}
      {/*  width={300}*/}
      {/*  quality={95}*/}
      {/*  formats={['AUTO', 'WEBP', 'AVIF']}*/}
      {/*  alt='A Gatsby astronaut'*/}
      {/*  style={{marginBottom: `1.45rem`}}*/}
      {/*/>*/}
      {/*<p>*/}
      {/*  <Link to='/page-2/'>Go to page 2</Link> <br />*/}
      {/*  <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>*/}
      {/*</p>*/}
    </Layout>
  )
}
export default IndexPage
