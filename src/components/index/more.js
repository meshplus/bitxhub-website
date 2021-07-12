import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import {theme} from '../theme'
import {ColorText} from '../style'
import {Link} from 'gatsby'
import React from 'react'
import {AnimationOnScroll} from 'react-animation-on-scroll'

const More = () => {
  return (
    <Box
      textAlign='center'
      sx={{
        '& .title': {
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        },
        '& .btn': {
          width: {xs: '100%', md: ''},
          justifyContent: {xs: 'space-between', md: 'center'},
        },
        '& .btn-title': {
          fontSize: '16px',
          display: 'none',
          [theme.breakpoints.down('md')]: {
            display: 'block',
          },
        },
      }}
    >
      <AnimationOnScroll animateIn='animate__fadeInUp' duration={0.5}>
        <Typography variant='h3' mb={8}>
          <ColorText>了解更多</ColorText>
        </Typography>
      </AnimationOnScroll>
      <Container maxWidth='md'>
        <Grid container>
          <Grid item md={4} mb={4} xs={12}>
            <Typography variant='body2' mb={4} className='title'>
              关于技术实现
            </Typography>
            <Button
              className='btn'
              variant='outlined'
              color='primary'
              size='large'
              component='a'
              target='_target'
              href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'
            >
              <Typography variant='body1' className='btn-title'>
                关于技术实现
              </Typography>
              <Box>
                白皮书
                <ColorText ml={2}>
                  <i className='icon icon-chevron-right' />
                </ColorText>
              </Box>
            </Button>
          </Grid>
          <Grid item md={4} mb={4} xs={12}>
            <Typography variant='body2' mb={4} className='title'>
              关于技术指导
            </Typography>
            <Button
              className='btn'
              variant='outlined'
              color='primary'
              size='large'
              component='a'
              href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html'
              target='_blank'
            >
              <Typography variant='body1' className='btn-title'>
                关于技术指导
              </Typography>
              <Box>
                查看文档
                <ColorText ml={2}>
                  <i className='icon icon-chevron-right' />
                </ColorText>
              </Box>
            </Button>
          </Grid>
          <Grid item md={4} mb={4} xs={12}>
            <Typography variant='body2' mb={4} className='title'>
              快速体验跨链
            </Typography>
            <Link to='/quick'>
              <Button className='btn' variant='outlined' color='primary' size='large'>
                <Typography variant='body1' className='btn-title'>
                  快速体验跨链
                </Typography>
                <Box>
                  快速开始
                  <ColorText ml={2}>
                    <i className='icon icon-chevron-right' />
                  </ColorText>
                </Box>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default More
