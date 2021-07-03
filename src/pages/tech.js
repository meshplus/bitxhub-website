import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, SwipeableDrawer, Typography} from '@material-ui/core'
import Relaychain from '../images/relaychain.png'
import Hyperchain from '../images/hyperchain.png'
import lottie from 'lottie-web'
import tech from './tech.json'
import BG from '../images/tech_bg.png'
import BG2 from '../images/tech_bg_2.png'
import {ColorText, ReadMoreNoHrefWithoutStyle} from '../components/style'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import {useInterval, usePrevious, useWindowSize} from 'react-use'
import TX from '../images/tx.svg'
import TXDemo from '../images/drawer_1.png'
import GovDemo from '../images/drawer_2.png'
import DIDDemo from '../images/drawer_3.png'
import DID from '../images/did.svg'
import Mng from '../images/mng.png'
import PierGif from '../images/pier.gif'
import Pier from '../images/pier.png'
import Wasm from '../images/wasm.gif'
import CardBG1 from '../images/tech_card_bg_1.png'
import CardBG2 from '../images/tech_card_bg_2.png'
import CardBG3 from '../images/tech_card_bg_3.png'
import IBTP from '../images/ibtp.gif'

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

  useInterval(() => {
    counter % 3 === 0 && setStep(0)
    counter % 3 === 1 && setStep(1)
    counter % 3 === 2 && setStep(2)
    setCounter(counter + 1)
  }, 6000)

  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: tech,
      container: divRef.current,
      autoplay: false,
      loop: false,
    })

    setAnimation(animation)
  }, [])

  useEffect(() => {
    if (animation) {
      if (step === 1) {
        prevStep === 0 && animation.playSegments([0, 100], true)
        prevStep === 2 && animation.playSegments([200, 100], true)
      } else if (step === 2) {
        console.log(prevStep)
        prevStep === 1 && animation.playSegments([100, 200], true)
        prevStep === 0 && animation.playSegments([0, 200], true)
      } else {
        prevStep === 1 && animation.playSegments([100, 0], true)
        prevStep === 2 && animation.playSegments([200, 0], true)
      }
    }
  }, [step, animation, prevStep])

  if (typeof window !== 'undefined') {
    return (
      <Box
        sx={{
          backgroundImage: `url(${BG}), url(${BG2})`,
          backgroundPosition: 'center -50px, center 900px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '2000px, 2000px',
        }}
        pt={10}
      >
        <SEO title='技术' />
        <Layout>
          <Box my={20}>
            <Container maxWidth='lg'>
              <Grid item md={5}>
                <Box pt={40}>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.8}>
                    <Typography variant='h3' mb={3}>
                      核心功能特性
                    </Typography>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.8}>
                    <Typography variant='body1' mb={8}>
                      致力于构建一个高可扩展、强鲁棒性、易升级的区块链跨链服务平台，为去中心化应用提供通信枢纽，支撑链上可信数据/资产高效流动，服务区块链业务安全治理，为区块链互联网的形成提供可靠的底层技术支撑。
                    </Typography>
                  </AnimationOnScroll>
                </Box>
              </Grid>
            </Container>
          </Box>

          {/* 2 */}
          <Box mt={80} mb={30}>
            <Container maxWidth='lg'>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.6}>
                      <Typography variant='h3'>
                        <ColorText>灵活适配</ColorText>
                      </Typography>
                    </AnimationOnScroll>
                    <Typography variant='h3' mb={4}>
                      的积木架构
                    </Typography>
                    <Typography variant='body1' mb={6}>
                      通过灵活组合跨链组件形成不同架构，实现多业务场景的高效适配
                    </Typography>
                    <Box>
                      <Grid container>
                        <Grid item xs={3}>
                          <img src={Relaychain} alt='relaychain' width={44} />
                          <Typography variant='subtitle1'>中继链</Typography>
                        </Grid>
                        <Grid item xs={3} textAlign='center'>
                          <img src={Pier} alt='pier' width={44} />
                          <Typography variant='subtitle1'>跨链网关</Typography>
                        </Grid>
                        <Grid item xs={4} textAlign='center'>
                          <img src={Hyperchain} alt='hyperchain' height={44} />
                          <Typography variant='subtitle1'>应用链</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='left'>
                  <div ref={divRef} />
                  <Box display='flex' fontSize='16px' alignItems='center' justifyContent='center'>
                    <Box
                      className={`${step === 0 && 'active'}`}
                      sx={{
                        background: 'linear-gradient(360deg, #181818 0%, #1D2735 0.01%, #1D2735 100%)',
                        fontSize: 0,
                        padding: '3px',
                        borderRadius: '56px',
                        fontWeight: 300,
                        height: 16,
                        width: 16,
                        cursor: 'pointer',
                        '&.active': {
                          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                          padding: '10px 20px',
                          fontSize: '14px',
                          height: 'auto',
                          width: 'auto',
                        },
                      }}
                      onClick={() => setStep(0)}
                      mr={2}
                    >
                      中继链架构
                    </Box>
                    <Box
                      className={`${step === 1 && 'active'}`}
                      sx={{
                        background: 'linear-gradient(360deg, #181818 0%, #1D2735 0.01%, #1D2735 100%)',
                        fontSize: 0,
                        padding: '3px',
                        borderRadius: '56px',
                        fontWeight: 300,
                        height: 16,
                        width: 16,
                        cursor: 'pointer',
                        '&.active': {
                          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                          padding: '10px 20px',
                          fontSize: '14px',
                          height: 'auto',
                          width: 'auto',
                        },
                      }}
                      onClick={() => setStep(1)}
                      mr={2}
                    >
                      直连架构
                    </Box>
                    <Box
                      className={`${step === 2 && 'active'}`}
                      sx={{
                        background: 'linear-gradient(360deg, #181818 0%, #1D2735 0.01%, #1D2735 100%)',
                        fontSize: 0,
                        padding: '3px',
                        borderRadius: '56px',
                        fontWeight: 300,
                        height: 16,
                        width: 16,
                        cursor: 'pointer',
                        '&.active': {
                          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                          padding: '10px 20px',
                          fontSize: '14px',
                          height: 'auto',
                          width: 'auto',
                        },
                      }}
                      onClick={() => setStep(2)}
                    >
                      主从架构
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box my={20}>
            <Container maxWidth='lg'>
              <Grid container>
                <Grid item md={7}>
                  <img src={IBTP} alt='img' width={720} />
                </Grid>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.4}>
                      <Typography variant='h3'>
                        <Box ref={ref} />
                        <ColorText>万链如一</ColorText>
                      </Typography>
                    </AnimationOnScroll>
                    <Typography variant='h3' mb={4}>
                      的链间传输协议
                    </Typography>
                    <Typography variant='body1' mt={8}>
                      将异构链的跨链消息格式统一，实现跨链网关更一致地进行跨链消息处理以及中继链更方便地跨链消息验证和路由。
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box my={30}>
            <Container maxWidth='lg'>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <AnimationOnScroll animateIn='animate__fadeInUp animate__faster' duration={0.6}>
                      <Typography variant='h3'>
                        <ColorText>易于接入</ColorText>
                      </Typography>
                    </AnimationOnScroll>
                    <Typography variant='h3'>的跨链网关</Typography>
                    <Typography variant='body1' mt={8}>
                      通过插件机制实现网关核心功能模块与应用链交互模块的解耦，实现应用链高效和"零侵入"的适配机制。
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center'>
                  <img src={PierGif} alt='pier' width={720} />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box my={30}>
            <Container maxWidth='lg'>
              <Grid container>
                <Grid item md={7}>
                  <img src={Wasm} alt='pier' width={720} />
                </Grid>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.6}>
                      <Typography variant='h3'>
                        <ColorText>因链制宜</ColorText>
                      </Typography>
                    </AnimationOnScroll>
                    <Typography variant='h3'>的异构验证引擎</Typography>
                    <Typography variant='body1' mt={8}>
                      采用高效可插拔的验证引擎，通过智能合约的方式管理多种验证规则，对不同区块链的交易进行合法性检验，并支持验证规则的在线升级和改造。
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Typography variant='h2' textAlign='center'>
            <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.6}>
              <ColorText>更多特性</ColorText>
            </AnimationOnScroll>
          </Typography>
          <Container maxWidth='md'>
            <Grid
              container
              spacing={8}
              mt={6}
              sx={{
                '& h5': {
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                },
                '& .feat-item': {
                  textAlign: 'left',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  padding: '50px',
                  height: '380px',
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
                  },
                  '&:hover': {
                    '&:before': {
                      transform: 'scaleY(1.1)',
                    },
                    '& .read-more': {
                      background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    },
                  },
                },
              }}
            >
              <Grid item md={4}>
                <Box className='feat-item' sx={{'&:after': {backgroundImage: `url(${CardBG1})`}}}>
                  <Box zIndex={8} position='relative'>
                    <img src={TX} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      跨链事务
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      跨链需要保证交易的原子性和一致性，中继链提供事务管理机制，通过内置的事务管理合约，来保证不同业务场景下跨链交易的事务性。
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setStatus1(true)} className='read-more' />
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
                      width: width / 2,
                    },
                    '& h5': {
                      fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                    },
                  }}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    style={{
                      borderRadius: '10px',
                      background: `linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)`,
                    }}
                  >
                    <img src={TX} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      跨链事务
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      针对非资产交换类业务场景，中继链提供了基于多链消息表事务管理方案；针对资产交换类业务的事务管理采用中继多签方案。
                    </Typography>
                    <img src={TXDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
              <Grid item md={4}>
                <Box className='feat-item' sx={{'&:after': {backgroundImage: `url(${CardBG2})`}}}>
                  <Box zIndex={8} position='relative'>
                    <img src={Mng} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      联盟治理
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      基于中继链提供完善的跨链治理框架，中继链节点构成联盟自治的基础，通过丰富的治理服务实现全方位的治理管控。
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setStatus2(true)} className='read-more' />
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
                      width: width / 2,
                      '& h5': {
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                      },
                    },
                  }}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    style={{
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <img src={Mng} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      联盟治理
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      中继链节点构成联盟自治的基础，通过丰富的治理服务实现全方位的治理管控，此外，中
                      继链还提供规范的提案模型、灵活的投票策略和科学的评价体系，充分保证成员
                      规范工作、系统健康升级、联盟稳态发展。
                    </Typography>
                    <img src={GovDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
              <Grid item md={4}>
                <Box className='feat-item' sx={{'&:after': {backgroundImage: `url(${CardBG3})`}}}>
                  <Box zIndex={8} position='relative'>
                    <img src={DID} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} className='font-normal'>
                      DID数字身份
                    </Typography>
                    <Typography variant='body2' mb={4}>
                      首次提出链原生数字身份机制，能够实现身份在多条链间的互通互认，可以更方便地实现以身份为中心的数字资产跨链可信流转。
                    </Typography>
                    <ReadMoreNoHrefWithoutStyle onClick={() => setStatus3(true)} className='read-more' />
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
                      width: width / 2,
                      '& h5': {
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                      },
                    },
                  }}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    style={{
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <img src={Mng} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa' className='font-normal'>
                      DID数字身份
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      数字身份系统的网络拓扑示意图如下所示。其中， 所有中继链都会实现链数字身份(Chain
                      DID)管理功能及账户数字身份管理功能，而应用链将会实现账户数字身份(Account
                      DID)管理功能。除此之外，考虑到整个网络面临的账户扩展需求，BitXHub提供了文档链下存储功能。
                    </Typography>
                    <img src={DIDDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
            </Grid>
          </Container>
        </Layout>
      </Box>
    )
  }
  return null
}

export default TechPage
