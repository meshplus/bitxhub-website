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
import {Box, Container, CssBaseline, ThemeProvider, Typography} from '@material-ui/core'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'

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
      <footer
        style={{
          margin: `200px 0 40px`,
        }}
      >
        <Container maxWidth='lg'>
          <Box
            my={10}
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
                background: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <Box display='inline-block' bgcolor='#050505' fontSize='30px' px={10}>
              <a href='https://github.com/meshplus/bitxhub' rel='noreferrer' target='_blank'>
                <i className='icon icon-github' style={{fontSize: '26px'}} />
              </a>
            </Box>
          </Box>
        </Container>
        <Box
          textAlign='center'
          mb={5}
          sx={{
            '& a': {
              color: '#fff',
              marginLeft: '30px',
              display: 'inline-block',
              marginBottom: '5px',
              '&:hover': {
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
          <a href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'>白皮书</a>
          <a href='https://meshplus.github.io/bitxhub/bitxhub/quick_start/'>文档</a>
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
        </Box>
        <Box textAlign='center'>
          <Typography variant='body2' mb={2}>
            Copyright © 2016-2021 Hangzhou Qulian Technology Co., Ltd. All rights reserved. 浙ICP备16033604号-1
          </Typography>
          <Box component='a' href={'/'} display='flex' alignItems='center' justifyContent='center' target={'_blank'}>
            <StaticImage src='../images/g.png' height={20} alt='icon' />
            <Typography variant='body2' ml={1}>
              浙公网安备 33010802010173号
            </Typography>
          </Box>
        </Box>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
