import {ColorText, Hero} from '../style'
import {Box, Button, Container, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import IndexWebp from '../../images/index.png'
import {Link} from 'gatsby'
import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import data from '../../pages/data.json'
import {theme} from '../theme'

const Banner = () => {
  const ref1 = useRef()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    console.log(`Loading animation......`)
    lottie.setQuality('low')
    const animation = lottie.loadAnimation({animationData: data, container: ref1.current})
    // const animation2 = lottie.loadAnimation({animationData: Animate2, container: ref2.current})
    animation.goToAndPlay(0, true)
    // animation2.goToAndPlay(0, true)
  }, [])
  return (
    <Hero position='relative'>
      {!isMobile && (
        <Box
          position='absolute'
          zIndex={-2}
          ref={ref1}
          style={{top: '50%', transform: 'translateY(-50%)', right: '0px'}}
        />
      )}
      <Container maxWidth='lg' style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
        <Grid item md={6} textAlign={{xs: 'center', md: 'left'}}>
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
          {isMobile && (
            <Box mx={-3}>
              <img src={IndexWebp} alt='index' style={{display: 'block', width: '100%'}} />
            </Box>
          )}
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
  )
}

export default Banner
