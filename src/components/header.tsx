import {Box, Container, createStyles, Grid, makeStyles} from '@material-ui/core'
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import * as React from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      minHeight: '80px',
      fontSize: '14px',
      position: 'fixed',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6)
      }
    },
    nav: {
      '& a': {
        color: '#fff'
      }
    }
  })
)

const Header = ({siteTitle}) => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Box className={classes.main} display='flex' alignItems='center'>
        <StaticImage src='../images/logo.svg' height={100} alt='A Gatsby astronaut' />
        <h1 style={{margin: 0}}>
          <Link to='/' style={{color: `white`, textDecoration: `none`}}>
            {siteTitle}
          </Link>
        </h1>
        <Box display='flex' ml='auto' className={classes.nav}>
          <Link to='/blog'>博客</Link>
          <Link to='/community'>社区</Link>
        </Box>
      </Box>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
