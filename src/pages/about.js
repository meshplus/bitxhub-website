import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, createStyles, Grid, makeStyles, SwipeableDrawer, Typography} from '@material-ui/core'
import Relaychain from '../images/relaychain.svg'
import Pier from '../images/pier.svg'
import Hyperchain from '../images/hyperchain.svg'
import lottie from 'lottie-web'
import tech from './tech1.json'
import Banner from '../images/tech_banner.svg'
import {ColorText} from '../components/style'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import {usePrevious} from 'react-use'
import TX from '../images/tx.svg'
import DID from '../images/did.svg'
import Mng from '../images/mng.svg'
import Protocol from '../images/protocol.jpg'
import PierImg from '../images/pier.jpg'

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
    },
    maxHeight: {
      height: '100%',
    },
    title: {
      background: '-webkit-linear-gradient(right, #01E1FF, #7DBCFC)',
      color: 'transparent',
      fontSize: '72px',
      fontWeight: 800,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    bg: {
      backgroundImage: `url(${Banner})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    },
    list: {
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '12px',
    },
    card: {
      background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)',
      borderRadius: '16px',
    },
    border: {
      borderRadius: '16px',
    },
    step: {
      background: 'linear-gradient(360deg, #181818 0%, #1D2735 0.01%, #1D2735 100%)',
      fontSize: 0,
      padding: '3px',
      borderRadius: '56px',
      fontWeight: 300,
      height: 16,
      width: 16,
      cursor: 'pointer',
    },
    step_active: {
      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
      padding: '10px 20px',
      fontSize: '14px',
      height: 'auto',
      width: 'auto',
    },
    carder: {
      textAlign: 'left',
      background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '16px',
      padding: '50px',
      height: '380px',
      marginLeft: '20px',
      position: 'relative',
      transition: 'all .3s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scaleY(1.1)',
      },
      '&:before': {
        display: 'block',
        content: ' ',
        position: 'absolute',
        top: '30px',
        width: '30px',
        height: '30px',
        color: '#fff',
      },
    },
  })
)

const AboutPage = ({data}) => {
  const classes = useStyles()

  return (
    <Box className={classes.bg} mt={10}>
      <SEO title='Home' />
      <Layout>2</Layout>
    </Box>
  )
}
export default AboutPage
