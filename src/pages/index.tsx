import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import lottie from 'lottie-web'
import React, {useEffect, useRef, useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import data from './loading.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
const buttonStyle = {
  display: 'block',
  margin: '10px auto'
}
const IndexPage = () => {
  const [stop, setStop] = useState(false)
  const [pause, setPause] = useState(false)
  const [step, setStep] = useState(0)
  const divRef = useRef()
  const [animation, setAnimation] = useState()
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = e => {
      console.log(e.target.documentElement.scrollTop)
      setScrollTop(e.target.documentElement.scrollTop)
      // setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  useEffect(() => {
    if (animation) {
      animation.goToAndStop(scrollTop * 4)
    }
  }, [scrollTop])

  useEffect(() => {
    console.log(divRef.current)
    const animation = lottie.loadAnimation({
      animationData: data,
      container: divRef.current
    })

    setAnimation(animation)

    // animation.setSpeed(2)
    // animation.setDirection(-1)
    animation.goToAndStop(0, true)
  }, [])
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      {scrollTop}
      <div ref={divRef} />
      <button style={buttonStyle} onClick={() => {
        setStop(true)
      }}
      >stop
      </button>
      <button style={buttonStyle} onClick={() => {
        setStep(step + 10)
        console.log(step)
        animation.goToAndStop(step)
      }}
      >add
      </button>
      <button style={buttonStyle} onClick={() => {
        setStop(false)
      }}>play
      </button>
      <button style={buttonStyle} onClick={() => {
        setPause(!pause)
      }}>pause
      </button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src='../images/gatsby-astronaut.png'
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt='A Gatsby astronaut'
        style={{marginBottom: `1.45rem`}}
      />
      <p>
        <Link to='/page-2/'>Go to page 2</Link> <br />
        <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
