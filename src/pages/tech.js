import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, makeStyles, SwipeableDrawer, Typography} from '@material-ui/core'
import {createStyles} from '@material-ui/styles'
import Relaychain from '../images/relaychain.svg'
import Pier from '../images/pier.svg'
import Hyperchain from '../images/hyperchain.svg'
import lottie from 'lottie-web'
import tech from './tech1.json'
import Banner from '../images/tech_banner.svg'
import {ColorText} from '../components/style'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import {usePrevious} from 'react-use'
import TX from '../images/tx.svg'
import TXDemo from '../images/tx_demo.svg'
import DID from '../images/did.svg'
import Mng from '../images/mng.svg'
import Protocol from '../images/protocol.jpg'
import PierImg from '../images/pier.jpg'

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
    },
    maxHeight: {
      height: '100%',
    },
    bg: {
      backgroundImage: `url(${Banner})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    },
    step: {
      background: 'linear-gradient(360deg, #181818 0%, #1D2735 0.01%, #1D2735 100%)',
      fontSize: 0,
      padding: '3px',
      borderRadius: '56px',
      fontWeight: 300,
      height: 16,
      width: 16,
      cursor: 'pointer',
    },
    step_active: {
      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
      padding: '10px 20px',
      fontSize: '14px',
      height: 'auto',
      width: 'auto',
    },
    carder: {
      textAlign: 'left',
      background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '16px',
      padding: '50px',
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

const TechPage = ({data}) => {
  const classes = useStyles()
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [step, setStep] = useState(0)
  const prevStep = usePrevious(step)
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(false)

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

  return (
    <Box className={classes.bg} mt={10}>
      <SEO title='技术' />
      <Layout>
        <Box my={20}>
          <Container maxWidth='lg'>
            <Grid item md={5}>
              <Box pt={50}>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.8}>
                  <Typography variant='h3' mb={3}>
                    BitXHub技术强大
                  </Typography>
                  <Typography variant='subtitle1' mb={8}>
                    BiTXHub1.6.0更新首次提出区块链原生支持的数字身份机制，更加方便地实现以身份为中心的数字资产在不同链间的可信流转。
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
              <Grid item md={5}>
                <AnimationOnScroll animateIn='animate__fadeInLeft' duration={0.6}>
                  <Typography variant='h3'>
                    <ColorText>链</ColorText>有定论
                  </Typography>
                  <Typography variant='h3' mb={4}>
                    <ColorText>跨</ColorText>无常形
                  </Typography>
                </AnimationOnScroll>
                <Typography variant='body2' mb={6}>
                  为了适用不同的业务应用场景，我们的跨链组件可以通过灵活组合形成不同的架构，我们称之为“积木架构”。
                </Typography>
                <Box>
                  <Grid container>
                    <Grid item xs={3}>
                      <img src={Relaychain} alt='relaychain' />
                      <Typography variant='subtitle1'>中继链</Typography>
                    </Grid>
                    <Grid item xs={3} textAlign='center'>
                      <img src={Pier} alt='pier' />
                      <Typography variant='subtitle1'>跨链网关</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign='center'>
                      <img src={Hyperchain} alt='hyperchain' height={48} />
                      <Typography variant='subtitle1'>应用链</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={7} textAlign='left'>
                <div ref={divRef} />
                <Box display='flex' fontSize='16px' alignItems='center' justifyContent='center'>
                  <Box className={`${classes.step} ${step === 0 && classes.step_active}`} onClick={() => setStep(0)} mr={2}>
                    中继链架构
                  </Box>
                  <Box className={`${classes.step} ${step === 1 && classes.step_active}`} onClick={() => setStep(1)} mr={2}>
                    直连架构
                  </Box>
                  <Box className={`${classes.step} ${step === 2 && classes.step_active}`} onClick={() => setStep(2)}>
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
                <AnimationOnScroll animateIn='animate__animated animate__fadeInLeft animate__faster'>
                  <img src={Protocol} alt='img' height={400} />
                </AnimationOnScroll>
              </Grid>
              <Grid item md={5}>
                <AnimationOnScroll animateIn='animate__fadeInRight' duration={0.4}>
                  <Typography variant='h3'>
                    <ColorText>万链如一</ColorText>
                  </Typography>
                </AnimationOnScroll>
                <Typography variant='h3' mb={4}>
                  的链间传输协议
                </Typography>
                <Typography variant='body2' mb={2}>
                  是所有跨链消息的格式化工厂，将异构链的跨链消息格式统一。 让中继链更方便地进行跨链消息的验证和路由以及跨链网关更一致地进行跨链消息处理
                </Typography>
                <Typography variant='body2'>所有异构链的跨链消息都可以封装成统一格式 (调用信息Payload+证明信息Proof)字段可以适配所有异构链</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box my={30}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item md={5}>
                <AnimationOnScroll animateIn='animate__fadeInLeft animate__faster' duration={0.6}>
                  <Typography variant='h3'>
                    <ColorText>左右逢源</ColorText>
                  </Typography>
                </AnimationOnScroll>
                <Typography variant='h3'>的跨链网关</Typography>
                <Typography variant='body2' mt={8}>
                  通过动态加载插件的形式适配应用链，并可随时进行热更新，对应用链的零侵入. 插件机制的设计将Pier中和应用链交互的模块与跨链网关自身核心功能模块进行解耦，从而方便更多的应用链加入跨链系统。
                </Typography>
              </Grid>
              <Grid item md={7}>
                <AnimationOnScroll animateIn='animate__animated animate__fadeInRight'>
                  <img src={PierImg} alt='pier' height={400} />
                </AnimationOnScroll>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box my={30}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item md={7}>
                <AnimationOnScroll animateIn='animate__fadeInLeft animate__faster' duration={0.6}>
                  <img src={PierImg} alt='pier' height={400} />
                </AnimationOnScroll>
              </Grid>
              <Grid item md={5}>
                <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.6}>
                  <Typography variant='h3'>
                    <ColorText>因链制宜</ColorText>的异构验证引擎
                  </Typography>
                </AnimationOnScroll>
                <Typography variant='body2' mt={8}>
                  通过交易解析，自动调用不同验证规则验证不同异构链的交易，进而到达高效验证
                </Typography>
                <Typography variant='body2'>自动调用不同验证规则验证不同异构链的交易，支持验证规则一键升级</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Typography variant='h2' textAlign='center'>
          <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.6}>
            <ColorText>更多特效</ColorText>
          </AnimationOnScroll>
          <Container maxWidth='md'>
            <Grid container spacing={8} mt={6}>
              <Grid item md={4}>
                <Box className={classes.carder} onClick={() => setStatus1(true)}>
                  <img src={TX} alt='tx' height={40} width={40} />
                  <Typography variant='h5' mb={5} mt={2}>
                    跨链事务
                  </Typography>
                  <Typography variant='body2'>BitXHub平台的中继链提供了完善有效的跨链治理机制。中继链自身节点的构成是联盟自治的基础，通过丰富的治理服务实现全方位的治理管控。</Typography>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={status1}
                  onOpen={() => setStatus1(true)}
                  onClose={() => setStatus1(false)}
                >
                  <Box style={{borderRadius: '10px', maxWidth: '100%', width: '400px', background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)'}}>
                    <img src={TX} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa'>
                      跨链事务
                    </Typography>
                    <Typography variant='body2' mb={4} color='#fafafa'>
                      BitXHub平台的中继链提供了完善有效的跨链治理机制。中继链自身节点的构成是联盟自治的基础，通过丰富的治理服务实现全方位的治理管控。
                    </Typography>
                    <img src={TXDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
              <Grid item md={4}>
                <Box className={classes.carder} onClick={() => setStatus2(true)}>
                  <img src={Mng} alt='tx' height={40} width={40} />
                  <Typography variant='h5' mb={5} mt={2}>
                    联盟治理
                  </Typography>
                  <Typography variant='body2'>BitXHub平台的中继链提供了完善有效的跨链治理机制。中继链自身节点的构成是联盟自治的基础，通过丰富的治理服务实现全方位的治理管控。</Typography>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={status2}
                  onOpen={() => setStatus2(true)}
                  onClose={() => setStatus2(false)}
                >
                  <Box style={{borderRadius: '10px', maxWidth: '100%', width: '400px', background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)'}}>
                    <img src={Mng} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa'>
                      联盟治理
                    </Typography>
                    <Typography variant='body2' color='#fafafa' mb={4}>
                      BitXHub平台的中继链提供了完善有效的跨链治理机制。中继链自身节点的构成是联盟自治的基础，通过丰富的治理服务实现全方位的治理管控。
                    </Typography>
                    <img src={TXDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
              <Grid item md={4}>
                <Box className={classes.carder} onClick={() => setStatus3(true)}>
                  <img src={DID} alt='tx' height={40} width={40} />
                  <Typography variant='h5' mb={5} mt={2}>
                    DID数字身份
                  </Typography>
                  <Typography variant='body2'>
                    BitXHub跨链平台首次提出的区块链原生支持的数字身份机制，能够实现身份在多条链间的互通互认，可以更加方便地实现以身份为中心的数字资产在不同链间的可信流转。
                  </Typography>
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={status3}
                  onOpen={() => setStatus3(true)}
                  onClose={() => setStatus3(false)}
                >
                  <Box style={{borderRadius: '10px', background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)'}}>
                    <img src={Mng} alt='tx' height={40} width={40} />
                    <Typography variant='h5' mb={5} mt={2} color='#fafafa'>
                      DID数字身份
                    </Typography>
                    <Typography variant='body2' color='#fafafa' mb={4}>
                      BitXHub跨链平台首次提出的区块链原生支持的数字身份机制，能够实现身份在多条链间的互通互认，可以更加方便地实现以身份为中心的数字资产在不同链间的可信流转。
                    </Typography>
                    <img src={TXDemo} alt='demo' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Grid>
            </Grid>
          </Container>
        </Typography>
      </Layout>
    </Box>
  )
}
export default TechPage
