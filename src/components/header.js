import {Box, Container, Grid, SwipeableDrawer} from '@material-ui/core'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useState} from 'react'
import Logo from '../images/logo.png'

const menu = [
  {
    href: '/tech',
    title: '技术',
    icon: 'icon icon-jishu',
  },
  {
    href: 'https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf',
    title: '白皮书',
    isExternal: true,
    icon: 'icon icon-baipishu',
  },
  {
    href: 'https://meshplus.github.io/bitxhub/bitxhub/quick_start.html',
    title: '文档',
    isExternal: true,
    icon: 'icon icon-wendang',
  },
  {
    href: '/community',
    title: '社区',
    icon: 'icon icon-shequ',
  },
  {
    href: '/blog',
    title: '博客',
    icon: 'icon icon-boke',
  },
  {
    href: '/tool',
    title: '工具',
    icon: 'icon icon-gongju',
  },
  {
    href: '/about',
    title: '关于我们',
    icon: 'icon icon-guanyuwomen',
  },
]

const Header = ({siteTitle}) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = s => () => setOpen(s)

  return (
    <Box
      bgcolor={open ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .8)'}
      left={0}
      right={0}
      py={{xs: 0, sm: 2}}
      zIndex={999}
      top={0}
      position='fixed'
    >
      <Container maxWidth='lg'>
        <SwipeableDrawer
          sx={{zIndex: 10}}
          anchor='top'
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableSwipeToOpen={false}
        >
          <Box
            p={10}
            pt={25}
            sx={{
              '& i': {
                marginRight: '10px',
                fontSize: '18px',
                color: 'rgba(255,255,255,0.8)',
              },
            }}
          >
            <Grid container>
              {menu.map(m => (
                <Grid item xs={6} key={m.title}>
                  <Box mb={6} color='rgba(255, 255, 255, 0.8)'>
                    <i className={m.icon} />
                    {m.isExternal && (
                      <a href={m.href} target='_blank' rel='noreferrer'>
                        {m.title}
                      </a>
                    )}
                    {!m.isExternal && (
                      <Link to={m.href} activeClassName='active' partiallyActive={true}>
                        {m.title}
                      </Link>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </SwipeableDrawer>
        <Box
          display='flex'
          alignItems='center'
          sx={{
            '& img': {
              height: {md: '60px', xs: '48px'},
            },
          }}
        >
          <Link to='/'>
            <Box display='flex'>
              <Box mr={2}>
                <img src={Logo} alt='Logo' />
              </Box>
            </Box>
          </Link>
          <Box ml='auto' display={{xs: 'block', md: 'none'}} sx={{'& i': {fontSize: '26px'}}}>
            {!open && <i className='icon icon-hanbaocaidan' onClick={() => setOpen(true)} />}
            {open && <i className='icon icon-a-11' onClick={() => setOpen(false)} />}
          </Box>
          {/*<MenuIcon sx={{marginLeft: 'auto', display: {sm: 'block', md: 'none'}}} onClick={() => setOpen(true)} />*/}
          <Box
            alignItems='center'
            ml='auto'
            sx={{
              display: {xs: 'none', md: 'flex'},
              '& i': {
                color: 'rgba(255,255,255,0.8)',
              },
              '& a': {
                color: 'rgba(255,255,255,0.8)',
                ml: 8,
                '&:hover, &.active': {
                  background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
              },
            }}
          >
            <Link to='/tech' activeClassName='active' partiallyActive={true}>
              技术
            </Link>
            <a
              href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'
              target='_blank'
              rel='noreferrer'
            >
              白皮书
            </a>
            <a href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html' target='_blank' rel='noreferrer'>
              文档
            </a>
            <Link to='/community' activeClassName='active' partiallyActive={true}>
              社区
            </Link>
            <Link to='/blog' activeClassName='active' partiallyActive={true}>
              博客
            </Link>
            <Link to='/tool' activeClassName='active' partiallyActive={true}>
              工具
            </Link>
            <Link to='/about' activeClassName='active' partiallyActive={true}>
              关于我们
            </Link>
            <a href='https://github.com/meshplus/bitxhub' target='_blank' rel='noreferrer'>
              <i className='icon icon-github' style={{fontSize: '24px'}} />
            </a>
          </Box>
          <Box />
        </Box>
      </Container>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
