import {Box, Container, createStyles, Grid, makeStyles} from '@material-ui/core'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'

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
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6),
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

  return (
    <Box className={classes.main}>
      <Container maxWidth='lg'>
        <Box display='flex' alignItems='center'>
          <Link to='/' className={classes.logo}>
            <StaticImage className={classes.logoImg} src='../images/logo.svg' alt='Logo' />
            <h1 style={{margin: 0}}>{siteTitle}</h1>
          </Link>
          <Box display='flex' ml='auto' className={classes.nav}>
            <Link to='/tech'>技术</Link>
            <Link to='/blog'>博客</Link>
            <Link to='/community'>社区</Link>
          </Box>
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
