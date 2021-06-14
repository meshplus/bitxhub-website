import {Box, Container, makeStyles, SwipeableDrawer, Typography} from '@material-ui/core'
import {createStyles} from '@material-ui/styles'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      background: '#000',
      left: 0,
      right: 0,
      fontSize: '14px',
      position: 'fixed',
      padding: '25px 0',
      zIndex: 9,
      top: 0,
      [theme.breakpoints.down('sm')]: {
        padding: '15px 0 !important',
      },
    },
    logo: {
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
    },
    logoImg: {
      marginRight: '10px',
    },
    bar: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
      },
    },
    nav: {
      '& a': {
        color: '#fff',
        marginLeft: '30px',
      },
    },
  })
)

const Header = ({siteTitle}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleDrawer = s => () => setOpen(s)

  return (
    <Box className={classes.main}>
      <Container maxWidth='lg'>
        <SwipeableDrawer anchor='left' open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} disableSwipeToOpen={false}>
          2222222222222222222222222
        </SwipeableDrawer>
        <Box display='flex' alignItems='center' className={classes.bar}>
          <MenuIcon sx={{display: {sm: 'block', md: 'none'}}} onClick={() => setOpen(true)} />
          <Link to='/' className={classes.logo}>
            <StaticImage className={classes.logoImg} src='../images/logo.svg' alt='Logo' />
            <Typography variant='h5' sx={{display: {xs: 'none', sm: 'block'}}}>
              {siteTitle}
            </Typography>
          </Link>
          <Box display='flex' ml='auto' className={classes.nav} sx={{display: {xs: 'none', md: 'block'}}}>
            <Link to='/tech'>技术</Link>
            <Link to='/blog'>博客</Link>
            <Link to='/community'>社区</Link>
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
