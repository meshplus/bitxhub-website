import {Box, Container, SwipeableDrawer, Typography} from '@material-ui/core'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const Header = ({siteTitle}) => {
  const [open, setOpen] = useState(false)
  const toggleDrawer = s => () => setOpen(s)

  return (
    <Box
      bgcolor='rgba(0, 0, 0, .6)'
      left={0}
      right={0}
      fontSize='14px'
      py={{xs: 3, sm: 5}}
      zIndex={999}
      top={0}
      position='fixed'
    >
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
                <StaticImage src='../images/logo.svg' alt='Logo' />
              </Box>
              <Typography variant='h5' sx={{display: {xs: 'none', sm: 'block'}}}>
                {siteTitle}
              </Typography>
            </Box>
          </Link>
          <Box
            display='flex'
            ml='auto'
            sx={{
              display: {xs: 'none', md: 'block'},
              '& a': {
                ml: 4,
              },
            }}
          >
            <Link to='/tech'>技术</Link>
            <Link to='/blog'>博客</Link>
            <Link to='/community'>社区</Link>
            <Link to='/tool'>工具</Link>
            <Link to='/about'>关于</Link>
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
