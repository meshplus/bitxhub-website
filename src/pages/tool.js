import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import BG1T from '../images/tool_bg_1_tn.png'
import BG2T from '../images/tool_bg_2_tn.png'
import Screen from '../images/screen.png'
import {Link} from 'gatsby'
import Typewriter from 'typewriter-effect'
import Browser1 from '../images/tool_1.png'
import {useProgressiveImage} from '../hooks'
import {getStaticUrl} from '../helpers'
import {Fade} from 'react-awesome-reveal'

const ToolPage = ({data}) => {
  const bg1 = useProgressiveImage(BG1T, getStaticUrl('tool_bg_1.png'))
  const bg2 = useProgressiveImage(BG2T, getStaticUrl('tool_bg_2.png'))

  const [y, setY] = useState(0)
  return (
    <Box>
      <SEO title='工具' />
      <Layout>
        <Box
          pt={20}
          pb={10}
          sx={{
            backgroundImage: `url(${bg1}), url(${bg2})`,
            backgroundSize: '1991px 681px, 2000px 900px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top, center 625px',
            '& i': {
              ml: 2,
            },
            '& .btn': {
              display: {md: 'block', xs: 'none'},
            },
            '& .mobile-btn': {
              display: {md: 'none', xs: 'block'},
              m: '20px auto',
            },
          }}
        >
          <Container maxWidth='lg'>
            <Box mt={{xs: 5, md: 10}}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <Fade direction='up' duration={500}>
                      <Typography variant='h3' mb={3} display='flex'>
                        <ColorText>跨链</ColorText>，尽在掌握之中
                      </Typography>
                    </Fade>
                    <Typography variant='body1' pr={{md: 25, xs: 0}} mb={{md: 20, xs: 10}}>
                      通过可视化方式进行中继链自治管理，实时查看跨链数据，即将上线，敬请期待。
                    </Typography>
                    <Button variant='outlined' color='primary' size='large' disabled className='btn'>
                      敬请期待
                      <i className='icon icon-chevron-right' />
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center' sx={{'& img': {display: 'block', width: '100%'}}}>
                  <img src={Browser1} alt='browser' />
                </Grid>
              </Grid>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                disabled
                disableElevation={true}
                disableFocusRipple={true}
                disableTouchRipple={true}
                disableRipple={true}
                className='mobile-btn'
              >
                敬请期待
                <i className='icon icon-chevron-right' />
              </Button>
            </Box>
            <Box pt={25} pb={10}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <Fade direction='up' duration={500}>
                      <Typography variant='h3' mb={3} display='flex'>
                        <ColorText>一键</ColorText>
                        启动跨链系统
                      </Typography>
                    </Fade>
                    <Typography variant='body1' pr={{md: 20, xs: 0}} mb={{md: 20, xs: 5}}>
                      Goduck跨链运维工具可以一键启动跨链组件、一键生成组件配置和一键启动跨链服务
                    </Typography>
                    <Button variant='outlined' color='primary' size='large' className='btn'>
                      <Link to='/quick'>
                        立即使用
                        <ColorText>
                          <i className='icon icon-chevron-right' />
                        </ColorText>
                      </Link>
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} xs={12} width='100%'>
                  <Box
                    mb={15}
                    pl={{md: 13, xs: 2}}
                    mt={{md: 10, xs: 5}}
                    height={{md: 480, xs: 260}}
                    fontSize={{md: 10, xs: 8}}
                    fontFamily='menlo'
                    sx={{
                      overflow: 'hidden',
                      color: '#c0c0c0',
                      backgroundImage: `url(${Screen})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: {md: '100%', xs: '115%'},
                      backgroundPosition: {md: '0 30px', xs: '-26px 30px'},
                      zIndex: 20,
                      '& .color': {
                        color: '#5a8cde',
                        fontWeight: '800',
                      },
                      '& pre': {
                        margin: '2px 0',
                      },
                    }}
                  >
                    <Box
                      overflow='hidden'
                      mt={{md: 11, xs: 9}}
                      sx={{
                        height: {xs: 172, md: 480},
                      }}
                    >
                      <Box sx={{transform: `translateY(-${y}px)`}}>
                        <Typewriter
                          options={{
                            loop: true,
                            deleteSpeed: 1,
                          }}
                          onInit={typewriter => {
                            typewriter
                              .callFunction(() => setY(0))
                              .pasteString('<span class="color">bitxhub@meshplus:~$ </span>', null)
                              .changeDelay(50)
                              .typeString('goduck playgrounds')
                              .pauseFor(200)
                              .deleteChars(1)
                              .typeString(' start')
                              .pauseFor(800)
                              .pasteString('<pre>=====> Start demo service...</pre>')
                              .changeDelay(1)
                              .pasteString(
                                '<pre><span style="color: #20bf77">ethereum-1   |</span> INFO Starting Geth in ephemeral dev mode...</pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #ab3fc5">ethereum-2   |</span> INFO Starting Geth in ephemeral dev mode...</pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> BitXHub version: 1.9.0</pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> Order is ready </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Start monitor" module=cmd port=40011 </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Initialize genesis" module=app </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Executor started" hash=eb10b...90a8d</pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #20bf77">ethereum-1   |</span> INFO Maximum peer count </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #ab3fc5">ethereum-2   |</span> INFO Maximum peer count </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Router started" module=router </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Gateway service started" port=9091 </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Router started" module=router </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Gateway service started" port=9091 </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Router started" module=router </pre>'
                              )
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Gateway service started" port=9091 </pre>'
                              )
                              .callFunction(() => setY(10))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                              )
                              .callFunction(() => setY(20))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Router started" module=router </pre>'
                              )
                              .callFunction(() => setY(30))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Gateway service started" port=9091 </pre>'
                              )
                              .callFunction(() => setY(40))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                              )
                              .callFunction(() => setY(50))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Router started" module=router </pre>'
                              )
                              .callFunction(() => setY(60))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Gateway service started" port=9091 </pre>'
                              )
                              .callFunction(() => setY(80))
                              .pasteString(
                                '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                              )
                              .callFunction(() => setY(110))
                              .pasteString('<pre><span style="color: #52cbd2">bitxhub-solo |</span></pre>')
                              .changeDelay(10)
                              .pasteString(`<pre>=======================================================</pre>`)
                              .callFunction(() => setY(135))
                              .pasteString(`<pre>    ____     _    __    _  __    __  __            __<pre>`)
                              .callFunction(() => setY(145))
                              .pasteString(`<pre>   / __ )   (_)  / /_  | |/ /   / / / /  __  __   / /_<pre>`)
                              .callFunction(() => setY(155))
                              .pasteString(`<pre>  / __  |  / /  / __/  |   /   / /_/ /  / / / /  / __ \\<pre>`)
                              .callFunction(() => setY(165))
                              .pasteString(`<pre> / /_/ /  / /  / /_   /   |   / __  /  / /_/ /  / /_/ /<pre>`)
                              .callFunction(() => setY(175))
                              .pasteString(`<pre>/_____/  /_/   \\__/  /_/|_|  /_/ /_/   \\__,_/  /_.___/<pre>`)
                              .callFunction(() => setY(185))
                              .pasteString(`<pre>=======================================================<pre>`)
                              .callFunction(() => setY(195))
                              .pauseFor(3000)
                              .deleteAll(1)
                              .start()
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Button variant='outlined' color='primary' size='large' className='mobile-btn'>
                <Link to='/quick'>
                  立即使用
                  <ColorText ml={2}>
                    <i className='icon icon-chevron-right' />
                  </ColorText>
                </Link>
              </Button>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default ToolPage
