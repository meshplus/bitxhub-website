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
import {Box, Container, CssBaseline, ThemeProvider, Typography} from '@material-ui/core'
import './style.css'

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
          margin: `200px 0 40px`
        }}
      >
        <Box textAlign='center'>
          <Typography variant='body2'>
            Copyright © 2016-2021 Hangzhou Qulian Technology Co., Ltd. All rights reserved. 浙ICP备16033604号-1
          </Typography>
        </Box>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.com'>Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
