import {ColorText, Hero} from '../style'
import {Box, Button, Container, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import IndexWebp from '../../images/index.png'
import IndexT from '../../images/index-tn.png'
import {Link} from 'gatsby'
import React, {useEffect, useRef, useState} from 'react'
import lottie from 'lottie-web'
import data from '../../pages/data.json'
import {theme} from '../theme'
import {useInterval} from 'react-use'

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

  const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onerror = e => {
        console.log(e)
      }
      img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
  }

  const loaded = useProgressiveImage('https://cdn.yourtheme.cn/index.png')

  useInterval(() => {
    console.log(loaded)
  }, 1000)

  return (
    <Box
      position='relative'
      pt={{md: 80, xs: 23}}
      pb={{md: 80, xs: 0}}
      sx={{
        backgroundImage: {xs: `url(${IndexWebp})`, md: `url()`},
        backgroundSize: '250%',
        backgroundPosition: 'center 105px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {!isMobile && (
        <Box
          position='absolute'
          zIndex={-2}
          ref={ref1}
          style={{top: '50%', transform: 'translateY(-50%)', right: '0px'}}
        />
      )}
      <Container maxWidth='lg' style={{display: 'flex', alignItems: 'center'}}>
        <Grid item md={6} xs={12} textAlign={{xs: 'center', md: 'left'}}>
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
            <Typography variant='body1' mb={6} className='description'>
              {isMobile && (
                <>
                  <Box>打造新一代跨链服务基础设施</Box>
                  <Box>实现区块链互联网链间价值传递</Box>
                </>
              )}
              {!isMobile && <>打造新一代跨链服务基础设施，实现区块链互联网链间价值传递</>}
            </Typography>
          </AnimationOnScroll>
          {isMobile && <Box mx={-3} height={260} />}
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
    </Box>
  )
}

export default Banner
