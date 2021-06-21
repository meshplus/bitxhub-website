import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import BG1 from '../images/tool_bg_1.png'
import BG2 from '../images/tool_bg_2.png'
import Tool1 from '../images/tool_1.png'
import Screen from '../images/screen.png'
import {Link} from 'gatsby'
import {TypingStep} from 'typing-effect-reactjs'
import Typewriter from 'typewriter-effect'

const sequence = [
  {
    content: 'bitxhub@meshplus:~$ ',
    config: {
      styleClass: 'correct',
    },
  },
  {
    content: 'goduck playground start\n',
    config: {
      styleClass: 'typing',
      typeSpeed: 0,
    },
  },
  {
    content: '===> Start the demo service... \n',
    config: {
      typeSpeed: 20,
    },
  },
  {
    content: 'foo@bar:~$ ',
    config: {
      typeSpeed: 0,
    },
  },
  {
    content: 'cd typing-effect/\n',
  },
  {
    content: 'foo@bar:~$ ',
    config: {
      typeSpeed: 0,
    },
  },
  {
    content: 'npm install\n',
  },
  {
    content: 'foo@bar:~$ ',
    config: {
      typeSpeed: 0,
    },
  },
  {
    content: 'npm start',
  },
]

const AboutPage = ({data}) => {
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
                    </Button>
                  </Box>
                </Grid>
                <Grid item md={7} textAlign='center'>
                  <img src={Tool1} alt='tool' height={330} />
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
                        <Link to='/quick'>立即使用</Link>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item md={7}>
                    <Box
                      pb={15}
                      pl={20}
                      pt={12}
                      height={400}
                      fontSize={11}
                      fontFamily='menlo'
                      sx={{
                        backgroundImage: `url(${Screen})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '120%',
                        backgroundPosition: '-50px top',
                        '& .color': {
                          color: '#5a8cde',
                          fontWeight: '800',
                        },
                      }}
                    >
                      <Typewriter
                        options={{
                          loop: true,
                          deleteSpeed: 0.5,
                        }}
                        onInit={typewriter => {
                          typewriter
                            .pasteString('<span class="color">bitxhub@meshplus:~$ </span>', null)
                            .changeDelay(50)
                            .typeString('goduck playgrounds')
                            .pauseFor(200)
                            .deleteChars(1)
                            .typeString(' start')
                            .pauseFor(1000)
                            .pasteString('<p>===== Start demo service...</p>')
                            .pasteString(
                              '<pre><span style="color: #20bf77">ethereum-1   |</span> INFO Starting Geth in ephemeral dev mode...</pre>'
                            )
                            .pasteString(
                              '<pre><span style="color: #ab3fc5">ethereum-2   |</span> INFO Starting Geth in ephemeral dev mode...</pre>'
                            )
                            .pasteString(
                              '<p><span style="color: #52cbd2">bitxhub-solo |</span> BitXHub version: 1.9.0</p>'
                            )
                            .pasteString('<p><span style="color: #52cbd2">bitxhub-solo |</span> Order is ready </p>')
                            .changeDelay(10)
                            .pasteString(
                              `<pre><p>=======================================================</p>` +
                                `<div>    ____     _    __    _  __    __  __            __</div>` +
                                `<div>   / __ )   (_)  / /_  | |/ /   / / / /  __  __   / /_</div>` +
                                '<div>  / __  |  / /  / __/  |   /   / /_/ /  / / / /  / __ \\</div>' +
                                '<div> / /_/ /  / /  / /_   /   |   / __  /  / /_/ /  / /_/ /</div>' +
                                '<div>/_____/  /_/   \\__/  /_/|_|  /_/ /_/   \\__,_/  /_.___/</div>' +
                                '<p>=======================================================</p></pre>'
                            )
                            .pauseFor(10000)
                            .start()
                        }}
                      />
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
