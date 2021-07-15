import {ColorText} from '../style'
import {Box, Button, Container, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {Link} from 'gatsby'
import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import {theme} from '../theme'
import {getThemeUrl} from '../../helpers'
import {Fade} from 'react-awesome-reveal'

const Banner = () => {
  const ref1 = useRef()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    fetch('https://upload.hyperchain.cn/data.json')
      .then(async res => {
        const result = await res.json()
        const animation = lottie.loadAnimation({
          animationData: result,
          container: ref1.current,
          loop: true,
        })

        animation.play()
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <Box
      position='relative'
      pt={{md: 80, xs: 23}}
      pb={{md: 80, xs: 0}}
      sx={{
        backgroundImage: {xs: `url(${getThemeUrl('index-mobile-3.png')})`, md: `url()`},
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
          <Fade direction='up' duration={500}>
            <Typography variant='h2'>
              <ColorText>万链互联</ColorText>
            </Typography>
          </Fade>
          <Fade direction='up' duration={500}>
            <Typography variant='h2' mb={6}>
              共建生态
            </Typography>
          </Fade>
          <Fade direction='up' duration={500}>
            <Typography variant='body1' mb={6} className='description'>
              {isMobile && (
                <>
                  <Box>打造新一代跨链服务基础设施</Box>
                  <Box>实现区块链互联网链间价值传递</Box>
                </>
              )}
              {!isMobile && <>打造新一代跨链服务基础设施，实现区块链互联网链间价值传递</>}
            </Typography>
          </Fade>
          {isMobile && <Box mx={-3} height={260} />}
          <Fade direction='up' duration={500}>
            <Box>
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
            </Box>
          </Fade>
        </Grid>
      </Container>
    </Box>
  )
}

export default Banner
