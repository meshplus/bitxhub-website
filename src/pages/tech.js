import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, SwipeableDrawer, Typography, useMediaQuery} from '@material-ui/core'
import lottie from 'lottie-web'
import tech from './tech.json'
import BGT from '../images/tech_bg_tn.png'
import BG2T from '../images/tech_bg_2_tn.png'
import {ColorText, ReadMoreNoHrefWithoutStyle} from '../components/style'
import {useInterval, usePrevious, useWindowSize} from 'react-use'
import {Swiper, SwiperSlide} from 'swiper/react'
import {theme} from '../components/theme'
import {useProgressiveImage} from '../hooks'
import {getStaticUrl} from '../helpers'
import {Fade} from 'react-awesome-reveal'

const TechPage = ({data}) => {
  const ref = useRef()
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [step, setStep] = useState(0)
  const prevStep = usePrevious(step)
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(false)

  const [counter, setCounter] = useState(1)
  const {width} = useWindowSize()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [switcher, setSwitcher] = useState(false)

  const swiperEnabled = width < 600

  useInterval(() => {
    if (!switcher) {
      counter % 3 === 0 && setStep(0)
      counter % 3 === 1 && setStep(1)
      counter % 3 === 2 && setStep(2)
      setCounter(counter + 1)
    }
  }, 8000)

  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: tech,
      container: divRef.current,
      autoplay: false,
      loop: false,
    })
    //
    // animation.playSegments([200, 400], true)
    // animation.addEventListener('enterFrame', e => console.log(e))

    setAnimation(animation)
  }, [])

  useEffect(() => {
    // return
    if (animation) {
      if (step === 1) {
        prevStep === 0 && animation.playSegments([0, 100], true)
        prevStep === 2 && animation.playSegments([260, 100], true)
      } else if (step === 2) {
        prevStep === 1 && animation.playSegments([100, 260], true)
        prevStep === 0 && animation.playSegments([400, 260], true)
      } else {
        prevStep === 1 && animation.playSegments([100, 0], true)
        console.log(prevStep)
        prevStep === 2 && animation.playSegments([260, 400], true)
      }
    }
  }, [step, animation, prevStep])

  const bg = useProgressiveImage(BGT, getStaticUrl('tech_bg.png'))
  const bg2 = useProgressiveImage(BG2T, getStaticUrl('tech_bg_2.png'))

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg}), url(${isMobile ? '' : bg2})`,
        backgroundPosition: {md: 'center -50px, center 900px', xs: 'center 320px, center 900px'},
        backgroundRepeat: 'no-repeat',
        backgroundSize: {md: '2000px, 2000px', xs: '120%, 2000px'},
        '& .desc': {
          m: '0 auto',
          p: 2,
          background: 'rgba(0, 8, 18, 0.92)',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
        },
      }}
      pt={10}
    >
      <SEO title='??????' />
      <Layout>
        <Box my={20}>
          <Container maxWidth='lg'>
            <Grid item md={5}>
              <Box pt={{md: 40, xs: 0}}>
                <Fade direction='up' duration={500}>
                  <Typography variant='h3' mb={3} textAlign={{md: 'left', xs: 'center'}}>
                    ??????????????????
                  </Typography>
                </Fade>
                <Fade direction='up' duration={500}>
                  <Typography variant='body1' mb={8} textAlign={{md: 'left', xs: 'center'}} className='description'>
                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                </Fade>
              </Box>
            </Grid>
          </Container>
        </Box>

        {/* 2 */}
        <Box mt={{md: 80, xs: 60}} mb={15}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item md={5} display='flex' alignItems='center'>
                <Box>
                  <Fade direction='up' duration={500}>
                    <Typography variant='h3'>
                      <ColorText>????????????</ColorText>
                    </Typography>
                    <Typography variant='h3' mb={4}>
                      ???????????????
                    </Typography>
                  </Fade>
                  <Typography variant='body1' mb={{md: 14, xs: 2}}>
                    ???????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                  <Box display={{md: 'block', xs: 'none'}}>
                    <Grid container textAlign={{md: 'left', xs: 'center'}}>
                      <Grid item xs={4}>
                        <img src={getStaticUrl('relaychain.png')} alt='relaychain' width={44} />
                        <Typography variant='subtitle1'>?????????</Typography>
                      </Grid>
                      <Grid item xs={4} textAlign={{md: 'left', xs: 'center'}}>
                        <img src={getStaticUrl('pier.png')} alt='pier' width={44} />
                        <Typography variant='subtitle1'>????????????</Typography>
                      </Grid>
                      <Grid item xs={4} textAlign={{md: 'left', xs: 'center'}}>
                        <img src={getStaticUrl('hyperchain.png')} alt='hyperchain' height={44} />
                        <Typography variant='subtitle1'>?????????</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={7} textAlign='left'>
                <div ref={divRef} />
                <Box
                  display={{md: 'none', xs: 'block'}}
                  mt={0}
                  mb={8}
                  sx={{
                    '& img': {
                      width: {md: '44px', xs: '32px'},
                    },
                  }}
                >
                  <Grid container textAlign='center'>
                    <Grid item xs={4}>
                      <img src={getStaticUrl('relaychain.png')} alt='relaychain' />
                      <Typography variant='subtitle1'>?????????</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign='center'>
                      <img src={getStaticUrl('pier.png')} alt='pier' />
                      <Typography variant='subtitle1'>????????????</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign='center'>
                      <img src={getStaticUrl('hyperchain.png')} alt='hyperchain' />
                      <Typography variant='subtitle1'>?????????</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  display='flex'
                  fontSize='16px'
                  alignItems='center'
                  justifyContent='center'
                  sx={{
                    '& .item': {
                      background:
                        'linear-gradient(360deg, rgb(24, 24, 24) 0%, rgb(5, 7, 11) 0.01%, rgb(29, 39, 53) 100%)',
                      borderRadius: '56px',
                      fontWeight: 400,
                      cursor: 'pointer',
                      transition: 'all .3s ease',
                      padding: '10px 20px',
                      fontSize: '14px',
                      height: 'auto',
                      width: 'auto',
                      color: 'rgba(255,255,255,0.5)',
                      '&.active, &:hover': {
                        '& .font': {
                          // color: '#fff',
                          background: {md: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)', xs: ''},
                          color: {md: 'transparent', xs: '#4f96ff'},
                          WebkitBackgroundClip: {md: 'text !important', xs: ''},
                          WebkitTextFillColor: {md: 'transparent', xs: ''},
                        },
                      },
                    },
                  }}
                >
                  <Box
                    className={`${step === 0 && 'active'} item`}
                    onClick={() => {
                      setStep(0)
                      setSwitcher(true)
                    }}
                    mr={2}
                  >
                    <Box className='font'>???????????????</Box>
                  </Box>
                  <Box
                    className={`${step === 1 && 'active'} item`}
                    onClick={() => {
                      setStep(1)
                      setSwitcher(true)
                    }}
                    mr={2}
                  >
                    <Box className='font'>????????????</Box>
                  </Box>
                  <Box
                    className={`${step === 2 && 'active'} item`}
                    onClick={() => {
                      setStep(2)
                      setSwitcher(true)
                    }}
                  >
                    <Box className='font'>????????????</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box my={15} sx={{'& img': {display: 'block', width: '100%'}}}>
          <Container maxWidth='lg'>
            <Grid container flexDirection={{xs: 'row', md: 'row-reverse'}}>
              <Grid item md={5} display='flex' alignItems='center'>
                <Box>
                  <Fade direction='up' duration={500}>
                    <Typography variant='h3'>
                      <Box ref={ref} />
                      <ColorText>????????????</ColorText>
                    </Typography>
                    <Typography variant='h3' mb={4}>
                      ?????????????????????
                    </Typography>
                  </Fade>
                  <Typography variant='body1' mt={8}>
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={7}>
                <img src={getStaticUrl('ibtp.gif')} alt='img' width={720} />
                <Box
                  className='desc'
                  width={250}
                  sx={{transform: {md: 'translate(-20px, -60px)', xs: 'translate(0, -60px)'}}}
                >
                  <Box>
                    <Box
                      sx={{background: 'rgba(46, 124, 254, 0.1)', padding: 2, lineHeight: '22px'}}
                      fontSize={{md: '14px', xs: '12px'}}
                    >
                      ????????????BitXHub????????????????????????????????????IBTP??????
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box my={{md: 15, xs: 10}} sx={{'& img': {display: 'block', width: '100%'}}}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item md={5} display='flex' alignItems='center'>
                <Box>
                  <Fade direction='up' duration={500}>
                    <Typography variant='h3'>
                      <ColorText>????????????</ColorText>
                    </Typography>
                    <Typography variant='h3'>???????????????</Typography>
                  </Fade>
                  <Typography variant='body1' mt={8}>
                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={7} textAlign='center'>
                <img src={getStaticUrl('pier.gif')} alt='pier' width={720} />
                <Box className='desc' width={307} sx={{transform: 'translate(0, -60px)'}}>
                  <Box>
                    <Box
                      sx={{background: 'rgba(46, 124, 254, 0.1)', padding: 2, lineHeight: '22px'}}
                      fontSize={{md: '14px', xs: '12px'}}
                    >
                      ???????????????????????????????????????????????????????????????, ??????????????????????????????????????????
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box my={{md: 15, xs: 10}} sx={{'& img': {display: 'block', width: '100%'}}}>
          <Container maxWidth='lg'>
            <Grid container flexDirection={{xs: 'row', md: 'row-reverse'}}>
              <Grid item md={5} display='flex' alignItems='center'>
                <Box>
                  <Fade direction='up' duration={500}>
                    <Typography variant='h3'>
                      <ColorText>????????????</ColorText>
                    </Typography>
                    <Typography variant='h3'>?????????????????????</Typography>
                  </Fade>
                  <Typography variant='body1' mt={8}>
                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={7}>
                <img src={getStaticUrl('wasm.gif')} alt='pier' width={720} />
                <Box className='desc' width={227} sx={{transform: 'translate(0, -60px)'}}>
                  <Box>
                    <Box
                      sx={{background: 'rgba(46, 124, 254, 0.1)', padding: 2, lineHeight: '22px'}}
                      fontSize={{md: '14px', xs: '12px'}}
                    >
                      ??????????????????????????????????????????????????????????????????
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth='lg'>
          <Box
            my={20}
            sx={{
              width: '100%',
              height: '2.5px',
              background:
                'linear-gradient(90deg, rgba(24,126,244,0) 0%, rgba(24,126,244,1) 10%, rgba(82,174,241,1) 90%, rgba(82,174,241,0) 100%)',
            }}
          />
        </Container>
        <Typography variant='h2' textAlign='center'>
          <Fade direction='up' duration={500}>
            <ColorText>????????????</ColorText>
          </Fade>
        </Typography>
        <Container maxWidth='lg'>
          <Box
            container
            spacing={8}
            mt={6}
            sx={{
              '& h5': {
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
              },
              '& .swiper-slide': {
                display: 'flex',
                alignItems: 'center',
                height: {md: '420px', xs: '330px'},
                width: {md: '320px', xs: '270px'},
              },
              '& .mobile .swiper-slide-active .feat-item, & .feat-item:hover': {
                '& .read-more': {
                  background: {md: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)', xs: ''},
                  color: {md: 'transparent', xs: '#4f96ff'},
                  WebkitBackgroundClip: {md: 'text !important', xs: ''},
                  WebkitTextFillColor: {md: 'transparent', xs: ''},
                },
                '&:before': {
                  transform: 'scaleY(1.1)',
                },
              },
              '& .feat-item': {
                textAlign: 'left',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: {md: '50px', xs: '30px'},
                width: {md: '320px', xs: '270px'},
                height: {md: '380px', xs: '290px'},
                position: 'relative',
                cursor: 'pointer',
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
                  zIndex: 1,
                },
                '&:after': {
                  display: 'block',
                  content: '" "',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  backgroundSize: '240px',
                  backgroundPosition: 'right 0 top 0',
                  backgroundRepeat: 'no-repeat',
                  transition: 'all .7s ease',
                },
                '&:hover': {
                  '&:after': {
                    backgroundPosition: 'right 0 top 0px',
                  },
                },
              },
            }}
          >
            <Swiper
              className={isMobile ? 'mobile' : ''}
              slidesPerView='auto'
              initialSlide={0}
              spaceBetween={20}
              centeredSlides={true}
              enabled={swiperEnabled}
              breakpoints={{
                1280: {
                  initialSlide: 1,
                },
              }}
            >
              <SwiperSlide>
                <Box
                  className='feat-item'
                  sx={{'&:after': {backgroundImage: `url(${getStaticUrl('tech_card_bg_1.png')})`}}}
                  onClick={() => setStatus1(true)}
                >
                  <Box zIndex={8} position='relative'>
                    <img src={getStaticUrl('tx.svg')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      ????????????
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle className='read-more' />
                  </Box>
                </Box>
                <SwipeableDrawer
                  ModalProps={{keepMounted: true}}
                  anchor={'right'}
                  open={status1}
                  onOpen={() => setStatus1(true)}
                  onClose={() => setStatus1(false)}
                  sx={{
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                      width: {md: width / 2, xs: '100%'},
                    },
                    '& h5': {
                      fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                    },
                  }}
                >
                  <Box
                    p={{xs: 4, md: 10}}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    pt={{md: 0, xs: 16}}
                    justifyContent={{md: 'center', xs: 'flex-start'}}
                    position='relative'
                    style={{
                      borderRadius: '10px',
                      background: `linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)`,
                    }}
                  >
                    <Box
                      sx={{
                        '& i': {
                          fontSize: '30px',
                          position: 'absolute',
                          top: '30px',
                          right: '30px',
                          color: '#fff',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#4f96ff',
                          },
                        },
                      }}
                    >
                      <i className='icon icon-a-11' onClick={() => setStatus1(false)} />
                    </Box>
                    <img src={getStaticUrl('tx.svg')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      ????????????
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </Typography>
                    <img src={getStaticUrl('drawer_1.png')} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className='feat-item'
                  sx={{'&:after': {backgroundImage: `url(${getStaticUrl('tech_card_bg_2.png')})`}}}
                  onClick={() => setStatus2(true)}
                >
                  <Box zIndex={8} position='relative'>
                    <img src={getStaticUrl('mng.png')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      ????????????
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle className='read-more' />
                  </Box>
                </Box>
                <SwipeableDrawer
                  ModalProps={{keepMounted: true}}
                  anchor={'right'}
                  open={status2}
                  onOpen={() => setStatus2(true)}
                  onClose={() => setStatus2(false)}
                  sx={{
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                      width: {md: width / 2, xs: '100%'},
                      '& h5': {
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                      },
                    },
                  }}
                >
                  <Box
                    p={{xs: 4, md: 10}}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    pt={{md: 0, xs: 16}}
                    justifyContent={{md: 'center', xs: 'flex-start'}}
                    position='relative'
                    style={{
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <Box
                      sx={{
                        '& i': {
                          fontSize: '30px',
                          position: 'absolute',
                          top: '30px',
                          right: '30px',
                          color: '#fff',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#4f96ff',
                          },
                        },
                      }}
                    >
                      <i className='icon icon-a-11' onClick={() => setStatus2(false)} />
                    </Box>
                    <img src={getStaticUrl('mng.png')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      ????????????
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </Typography>
                    <img src={getStaticUrl('drawer_2.png')} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className='feat-item'
                  sx={{'&:after': {backgroundImage: `url(${getStaticUrl('tech_card_bg_3.png')})`}}}
                  onClick={() => setStatus3(true)}
                >
                  <Box zIndex={8} position='relative'>
                    <img src={getStaticUrl('did.svg')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      DID????????????
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle className='read-more' />
                  </Box>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={status3}
                  onOpen={() => setStatus3(true)}
                  onClose={() => setStatus3(false)}
                  sx={{
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                      width: {md: width / 2, xs: '100%'},
                      '& h5': {
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                      },
                    },
                  }}
                >
                  <Box
                    p={{xs: 4, md: 10}}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    pt={{md: 0, xs: 16}}
                    justifyContent={{md: 'center', xs: 'flex-start'}}
                    position='relative'
                    style={{
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <Box
                      sx={{
                        '& i': {
                          fontSize: '30px',
                          position: 'absolute',
                          top: '30px',
                          right: '30px',
                          color: '#fff',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#4f96ff',
                          },
                        },
                      }}
                    >
                      <i className='icon icon-a-11' onClick={() => setStatus3(false)} />
                    </Box>
                    <img src={getStaticUrl('did.svg')} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      DID????????????
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????(Chain
                      DID)??????????????????????????????????????????????????????????????????????????????????????????(Account
                      DID)?????????????????????????????????????????????????????????????????????????????????BitXHub????????????????????????????????????
                    </Typography>
                    <img src={getStaticUrl('drawer_3.png')} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Layout>
    </Box>
  )
}

export default TechPage
