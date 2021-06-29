import {Box, Container, SwipeableDrawer} from '@material-ui/core'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from '../images/logo.png'

const Header = ({siteTitle}) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = s => () => setOpen(s)

  return (
    <Box bgcolor='rgba(0, 0, 0, .6)' left={0} right={0} py={{xs: 2, sm: 2}} zIndex={999} top={0} position='fixed'>
      <Container maxWidth='lg'>
        <SwipeableDrawer
          anchor='left'
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableSwipeToOpen={false}
        >
          2222222222222222222222222
        </SwipeableDrawer>
        <Box display='flex' alignItems='center' justifyContent={{xs: 'space-between', md: ''}}>
          <MenuIcon sx={{display: {sm: 'block', md: 'none'}}} onClick={() => setOpen(true)} />
          <Link to='/'>
            <Box display='flex'>
              <Box mr={2}>
                <img src={Logo} alt='Logo' height={60} />
              </Box>
            </Box>
          </Link>
          <Box
            alignItems='center'
            ml='auto'
            sx={{
              display: {xs: 'none', md: 'flex'},
              '& a': {
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
