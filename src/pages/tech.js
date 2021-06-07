import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Button, Container, createStyles, makeStyles, Typography} from '@material-ui/core'
import CommunityBanner from '../images/community_banner.svg'
import lottie from 'lottie-web'
import tech from './tech1.json'

const useStyles = makeStyles((theme) =>
  createStyles({
    banner: {
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center'
    },
    maxHeight: {
      height: '100%'
    },
    title: {
      background: '-webkit-linear-gradient(right, #01E1FF, #7DBCFC)',
      color: 'transparent',
      fontSize: '72px',
      fontWeight: 800,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    bg: {
      backgroundImage: `url(${CommunityBanner})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    },
    list: {
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '12px'
    },
    card: {
      background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)',
      borderRadius: '16px'
    },
    border: {
      borderRadius: '16px'
    }
  })
)

const TechPage = ({data}) => {
  const classes = useStyles()
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const animation = lottie.loadAnimation({
      animationData: tech,
      container: divRef.current,
      autoplay: false,
      loop: false,
    })

    setAnimation(animation)
  }, [])

  useEffect(() => {
    if (animation) {
      if (step % 3 === 1) {
        console.log(`1`)
        animation.playSegments([0, 4])
      } else if(step % 3 === 2) {
        console.log(`2`)
        animation.playSegments([4, 8])
      } else {
        console.log(`0`)
        animation.playSegments([0, 2])
      }
    }
  }, [step])
  return (
    <Box className={classes.bg}>
      <Layout>
        <Container maxWidth='lg'>
          <SEO title='Home' />
          <Box pt={50}>
            <Typography variant='h3' mb={3}>BitXHub技术强大</Typography>
            <Typography variant='subtitle1' mb={8}>BiTXHub1.6.0更新首次提出区块链原生支持的数字身份机制，更加方便地实现以身份为中心的数字资产在不同链间的可信流转。</Typography>
            <div ref={divRef} />
            <Button onClick={() => setStep(step + 1)}>jjj</Button>
          </Box>
        </Container>
      </Layout>
    </Box>
  )
}
export default TechPage


