/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {graphql, useStaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import Header from './header'
import {theme} from './theme'
import {Box, createStyles, CssBaseline, makeStyles, ThemeProvider, Typography} from '@material-ui/core'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'

const useStyles = makeStyles(theme =>
  createStyles({
    nav: {
      '& a': {
        color: '#fff',
        marginLeft: '30px',
        display: 'inline-block',
        marginBottom: '5px',
      },
    },
    beian: {},
  })
)

const Layout = ({children}) => {
  const classes = useStyles()

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
        <Box textAlign='center' mb={5} className={classes.nav}>
          <a href='/tech'>技术</a>
          <a href='https://upload.hyperchain.cn/BitXHub%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf'>白皮书</a>
          <a href='https://meshplus.github.io/bitxhub/bitxhub/quick_start/'>文档</a>
          <a href='/community'>社区</a>
          <a href='/blog'>博客</a>
          <a href='/tool'>工具</a>
          <a href='/about'>关于我们</a>
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
