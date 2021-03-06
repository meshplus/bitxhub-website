/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {graphql, Link, useStaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import Header from './header'
import {theme} from './theme'
import {Box, Container, CssBaseline, Grid, ThemeProvider, Typography} from '@material-ui/core'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'
import 'swiper/swiper-bundle.css'
import 'sal.js/dist/sal.css'

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Box mt={{md: 40, xs: 20}} mb={8}>
        <Container maxWidth='lg'>
          <Box
            mt={10}
            mb={6}
            position='relative'
            textAlign='center'
            sx={{
              '&:after': {
                content: '" "',
                position: 'absolute',
                zIndex: '-1',
                top: '50%',
                display: 'block',
                width: '100%',
                height: '1px',
                background:
                  'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,.4) 30%, rgba(255,255,255,.4) 70%, rgba(0,0,0,1) 100%)',
              },
            }}
          >
            <Box display='inline-block' bgcolor='#050505' fontSize='30px' px={{md: 10, xs: 3}}>
              <a href='https://github.com/meshplus/bitxhub' rel='noreferrer' target='_blank'>
                <i className='icon icon-github' style={{fontSize: '26px'}} />
              </a>
            </Box>
          </Box>
        </Container>
        <Box
          mb={5}
          sx={{
            '& a': {
              '& i': {
                fontSize: '20px',
                mr: 2,
                display: {md: 'none'},
                color: 'rgba(255,255,255,0.8)',
              },
              color: 'rgba(255, 255, 255, 0.8)',
              marginLeft: '30px',
              display: 'inline-block',
              marginBottom: {md: '5px', xs: '30px'},
              '&:hover': {
                background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
                color: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            },
          }}
        >
          <Grid container display='flex' justifyContent='center'>
            <Grid item xs={6} md='auto'>
              <Link to='/tech' activeClassName='active' partiallyActive={true}>
                <i className='icon icon-jishu' />
                ??????
              </Link>
            </Grid>
            <Grid item xs={6} md='auto'>
              <a href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'>
                <i className='icon icon-baipishu' />
                ?????????
              </a>
            </Grid>
            <Grid item xs={6} md='auto'>
              <a href='https://meshplus.github.io/bitxhub/bitxhub/quick_start.html'>
                <i className='icon icon-wendang' />
                ??????
              </a>
            </Grid>
            <Grid item xs={6} md='auto'>
              <Link to='/community' activeClassName='active' partiallyActive={true}>
                <i className='icon icon-shequ' />
                ??????
              </Link>
            </Grid>
            <Grid item xs={6} md='auto'>
              <Link to='/blog' activeClassName='active' partiallyActive={true}>
                <i className='icon icon-boke' />
                ??????
              </Link>
            </Grid>
            <Grid item xs={6} md='auto'>
              <Link to='/tool' activeClassName='active' partiallyActive={true}>
                <i className='icon icon-gongju' />
                ??????
              </Link>
            </Grid>
            <Grid item xs={6} md='auto'>
              <Link to='/about' activeClassName='active' partiallyActive={true}>
                <i className='icon icon-guanyuwomen' />
                ????????????
              </Link>
            </Grid>
            <Grid item xs={6} md='auto' />
          </Grid>
        </Box>
        <Box textAlign='center'>
          <Typography variant='body2' mb={2}>
            Copyright ?? 2016-2021 Hangzhou Qulian Technology Co., Ltd. All rights reserved. ???ICP???16033604???-1
          </Typography>
          <Box component='a' href={'/'} display='flex' alignItems='center' justifyContent='center' target={'_blank'}>
            <StaticImage src='../images/g.png' height={20} alt='icon' />
            <Typography variant='body2' ml={1}>
              ??????????????? 33010802010173???
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
