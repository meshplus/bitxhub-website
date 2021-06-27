import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import BG1 from '../images/tool_bg_1.png'
import BG2 from '../images/tool_bg_2.png'
import Tool1 from '../images/tool_1.png'
import Screen from '../images/screen.png'
import {Link} from 'gatsby'
import Typewriter from 'typewriter-effect'
import {ChevronRight} from '@material-ui/icons'

const AboutPage = ({data}) => {
  const [y, setY] = useState(0)
  return (
    <Box>
      <SEO title='工具' />
      <Layout>
        <Box
          pt={20}
          pb={30}
          sx={{
            backgroundImage: `url(${BG1}), url(${BG2})`,
            backgroundSize: '1991px 681px, 2000px 900px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top, center 500px',
          }}
        >
          <Container maxWidth='lg'>
            <Box mt={{xs: 5, md: 10}}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Box>
                    <Typography variant='h3' mb={4}>
                      <ColorText>跨链</ColorText>, 尽在掌握之中
                    </Typography>
                    <Typography variant='subtitle1' pr={25} mb={8}>
                      通过可视化方式进行应用链管理和中继链自治管理, 实时查看跨链数据; 即将在2021年的更新中上线.
                    </Typography>
                    <Button variant='outlined' color='primary' size='large' disabled>
                      敬请期待
                      <ChevronRight />
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center'>
                  <img src={Tool1} alt='tool' height={384} />
                </Grid>
              </Grid>
            </Box>
            <Box pt={50} pb={10}>
              <Container maxWidth='lg'>
                <Grid container>
                  <Grid item md={5} display='flex' alignItems='center'>
                    <Box>
                      <Typography variant='h3' mb={2}>
                        <ColorText>一键</ColorText>启动跨链系统
                      </Typography>
                      <Typography variant='subtitle1' pr={20} mb={15}>
                        Goduck 跨链运维工具可以一键启动任一跨链组件; 一键生成组件配置; 一键启动整套跨链系统
                      </Typography>
                      <Button variant='outlined' color='primary' size='large'>
                        <Link to='/quick'>
                          立即使用
                          <i className='icon icon-chevron-right' />
                        </Link>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item md={7}>
                    <Box
                      mb={15}
                      pl={20}
                      mt={12}
                      height={480}
                      fontSize={10}
                      fontFamily='menlo'
                      sx={{
                        overflow: 'hidden',
                        color: '#c0c0c0',
                        backgroundImage: `url(${Screen})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '120%',
                        backgroundPosition: '-50px top',
                        '& .color': {
                          color: '#5a8cde',
                          fontWeight: '800',
                        },
                        '& pre': {
                          margin: '2px 0',
                        },
                      }}
                    >
                      <Box overflow='hidden' mt={12}>
                        <Box
                          sx={{
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
                                .pasteString(
                                  `<pre>=======================================================` +
                                    `<div>    ____     _    __    _  __    __  __            __</div>` +
                                    `<div>   / __ )   (_)  / /_  | |/ /   / / / /  __  __   / /_</div>` +
                                    '<div>  / __  |  / /  / __/  |   /   / /_/ /  / / / /  / __ \\</div>' +
                                    '<div> / /_/ /  / /  / /_   /   |   / __  /  / /_/ /  / /_/ /</div>' +
                                    '<div>/_____/  /_/   \\__/  /_/|_|  /_/ /_/   \\__,_/  /_.___/</div>' +
                                    '<p>=======================================================</p></pre>'
                                )
                                .callFunction(() => setY(160))
                                .pauseFor(3000)
                                .start()
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default AboutPage
