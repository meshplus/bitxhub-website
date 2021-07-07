import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import BG1 from '../images/tool_bg_1.png'
import BG2 from '../images/tool_bg_2.png'
import Screen from '../images/screen.png'
import {Link} from 'gatsby'
import Typewriter from 'typewriter-effect'
import {ChevronRight} from '@material-ui/icons'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import Browser1 from '../images/tool_1.webm'

const ToolPage = ({data}) => {
  const [y, setY] = useState(0)
  if (typeof window !== 'undefined') {
    return (
      <Box>
        <SEO title='工具' />
        <Layout>
          <Box
            pt={20}
            pb={10}
            sx={{
              backgroundImage: `url(${BG1}), url(${BG2})`,
              backgroundSize: '1991px 681px, 2000px 900px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top, center 500px',
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
                      <Typography variant='h3' mb={4} display='flex'>
                        <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                          <ColorText>跨链</ColorText>
                        </AnimationOnScroll>
                        , 尽在掌握之中
                      </Typography>
                      <Typography variant='subtitle1' pr={{md: 25, xs: 0}} mb={{md: 20, xs: 10}}>
                        通过可视化方式进行应用链管理和中继链自治管理, 实时查看跨链数据; 即将在2021年的更新中上线。
                      </Typography>
                      <Button variant='outlined' color='primary' size='large' disabled className='btn'>
                        敬请期待
                        <ChevronRight />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item md={7} textAlign='center' sx={{'& video': {display: 'block', width: '100%'}}}>
                    {/*<img src={Browser} alt='tool' />*/}
                    <video src={Browser1} autoPlay={true} />
                  </Grid>
                </Grid>
                <Button variant='outlined' color='primary' size='large' disabled className='mobile-btn'>
                  敬请期待
                  <ChevronRight />
                </Button>
              </Box>
              <Box pt={25} pb={10}>
                <Container maxWidth='lg'>
                  <Grid container>
                    <Grid item md={5} display='flex' alignItems='center'>
                      <Box>
                        <Typography variant='h3' mb={2} display='flex'>
                          <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
                            <ColorText>一键</ColorText>
                          </AnimationOnScroll>
                          启动跨链系统
                        </Typography>
                        <Typography variant='subtitle1' pr={{md: 20, xs: 0}} mb={{md: 20, xs: 5}}>
                          Goduck 跨链运维工具可以一键启动任一跨链组件; 一键生成组件配置; 一键启动整套跨链系统
                        </Typography>
                        <Button variant='outlined' color='primary' size='large' className='btn'>
                          <Link to='/quick'>
                            立即使用
                            <ColorText ml={2}>
                              <i className='icon icon-chevron-right' />
                            </ColorText>
                          </Link>
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item md={7} width='100%'>
                      <Box
                        mb={15}
                        pl={{md: 20, xs: 5}}
                        mt={{md: 12, xs: 5}}
                        height={{md: 480, xs: 260}}
                        fontSize={{md: 10, xs: 8}}
                        fontFamily='menlo'
                        sx={{
                          overflow: 'hidden',
                          color: '#c0c0c0',
                          backgroundImage: `url(${Screen})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: {md: '120%', xs: '137%'},
                          backgroundPosition: '-50px top',
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
                        <Box overflow='hidden' mt={{md: 12, xs: 5}}>
                          <Box
                            sx={{
                              mt: {md: 0, xs: 6},
                              transform: `translateY(-${y}px)`,
                            }}
                          >
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
                                    '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Executor started" hash=eb10b...90a8d height=1 port=40011 </pre>'
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
                                  .callFunction(() => setY(70))
                                  .pasteString(
                                    '<pre><span style="color: #52cbd2">bitxhub-solo |</span> msg="Order is ready" plugin=plugins/solo.so </pre>'
                                  )
                                  .callFunction(() => setY(100))
                                  .pasteString('<pre><span style="color: #52cbd2">bitxhub-solo |</span></pre>')
                                  .changeDelay(10)
                                  .pasteString(`<pre>=======================================================</pre>`)
                                  .callFunction(() => setY(110))
                                  .pasteString(`<pre>    ____     _    __    _  __    __  __            __<pre>`)
                                  .callFunction(() => setY(120))
                                  .pasteString(`<pre>   / __ )   (_)  / /_  | |/ /   / / / /  __  __   / /_<pre>`)
                                  .callFunction(() => setY(130))
                                  .pasteString(`<pre>  / __  |  / /  / __/  |   /   / /_/ /  / / / /  / __ \\<pre>`)
                                  .callFunction(() => setY(140))
                                  .pasteString(`<pre> / /_/ /  / /  / /_   /   |   / __  /  / /_/ /  / /_/ /<pre>`)
                                  .callFunction(() => setY(150))
                                  .pasteString(`<pre>/_____/  /_/   \\__/  /_/|_|  /_/ /_/   \\__,_/  /_.___/<pre>`)
                                  .callFunction(() => setY(160))
                                  .pasteString(`<pre>=======================================================<pre>`)
                                  .callFunction(() => setY(170))
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
                </Container>
              </Box>
            </Container>
          </Box>
        </Layout>
      </Box>
    )
  }
  return null
}
export default ToolPage
