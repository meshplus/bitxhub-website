import {Box, Typography} from '@material-ui/core'
import * as React from 'react'
import clsx from 'clsx'
import Moment from 'react-moment'
import Link from 'gatsby-link'

export const ReadMore = ({to, ...other}) => {
  return (
    <Box {...other} sx={{cursor: 'pointer'}}>
      <Link to={to}>
        <HoverColorText display='inline-flex' alignItems='center'>
          <Box mr={2}>查看更多</Box>
          <i className='icon icon-right' style={{fontSize: '22px'}} />
        </HoverColorText>
      </Link>
    </Box>
  )
}

export const ReadMoreNoHref = ({...other}) => {
  return (
    <Box {...other} sx={{cursor: 'pointer'}}>
      <HoverColorText display='inline-flex' alignItems='center'>
        <Box mr={2}>查看更多</Box>
        <i className='icon icon-right' style={{fontSize: '22px'}} />
      </HoverColorText>
    </Box>
  )
}

export const ReadMoreNoHrefWithoutStyle = ({...other}) => {
  return (
    <Box {...other} sx={{cursor: 'pointer'}} display='inline-block'>
      <Box display='inline-flex' alignItems='center'>
        <Box mr={2}>查看更多</Box>
        <i className='icon icon-right' style={{fontSize: '22px'}} />
      </Box>
    </Box>
  )
}

export const ReadMoreWithoutStyle = ({to, ...other}) => {
  return (
    <Box {...other} sx={{cursor: 'pointer', display: 'inline-block'}}>
      <Link to={to}>
        <Box display='inline-flex' alignItems='center'>
          <Box mr={2}>查看更多</Box>
          <i className='icon icon-right' style={{fontSize: '22px'}} />
        </Box>
      </Link>
    </Box>
  )
}

export const ReadMoreWithoutStyleRedirect = ({to, ...other}) => {
  return (
    <Box {...other} sx={{cursor: 'pointer', display: 'inline-block'}}>
      <a href={to} target='_blank'>
        <Box display='inline-flex' alignItems='center'>
          <Box mr={2}>查看更多</Box>
          <i className='icon icon-right' style={{fontSize: '22px'}} />
        </Box>
      </a>
    </Box>
  )
}

export const ColorText = ({children, ...other}) => {
  return (
    <Box
      display='inline-block'
      {...other}
      sx={{
        background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </Box>
  )
}

export const HoverColorText = ({children, className, ...other}) => {
  return (
    <Box
      display='inline-block'
      className={clsx(className)}
      {...other}
      sx={{
        '&:hover': {
          background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
          color: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      {children}
    </Box>
  )
}

export const Hero = ({children, className, ...other}) => {
  return (
    <Box className={clsx(className)} {...other} minHeight='100vh'>
      {children}
    </Box>
  )
}

export const Card = ({children, className, title, singleTitle, img, desc, date, link, ...other}) => {
  return (
    <Box
      className={clsx(className)}
      {...other}
      component='a'
      href={link}
      target='_blank'
      position='relative'
      sx={{
        borderRadius: '12px',
        display: 'block',
        paddingTop: '50%',
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        transition: 'all .6s',
        transform: 'translateY(0)',
        '&:hover': {
          cursor: 'pointer',
          transform: 'translateY(-4px)',
          '& .title': {
            transition: 'all .6s ease',
            background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
        '& .date': {
          fontFamily: '"Titillium Web","Roboto","Helvetica","Arial",sans-serif !important',
          fontWeight: 'bold',
        },
      }}
    >
      <Box
        p={6}
        sx={{
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)',
        }}
      >
        <Typography mb={4} className='title' variant='h5' height={singleTitle ? '32px' : '64px'} display='inline-block'>
          {title}
        </Typography>
        <Typography variant='subtitle1' maxHeight='60px' overflow='hidden'>
          {desc}
        </Typography>
        <Typography mt={4} variant='body1' className='date'>
          <Moment date={date} format='YYYY.MM.DD' />
        </Typography>
      </Box>
    </Box>
  )
}

export const Divider = ({children, className, ...other}) => {
  return (
    <Box
      className={clsx(className)}
      {...other}
      sx={{
        height: '1px',
        background: 'rgba(71, 71, 71, 0.5)',
        border: 'none',
      }}
    />
  )
}

export const IndexBar = ({children, className, title, desc, titleMb, lighterBG, ...other}) => {
  return (
    <Box
      className={className}
      {...other}
      sx={{
        borderRadius: '16px',
        // background: lighterBG
        //   ? 'linear-gradient(270deg, #050707 0%, #121B30 100%)'
        //   : 'linear-gradient(89.86deg, rgba(11, 33, 77, 0.6) -5.78%, rgba(1, 3, 10, 0.6) 52.27%, rgba(0, 0, 0, 0.6) 52.28%)',
        background: lighterBG
          ? 'linear-gradient(270deg, #050707 0%, #121B30 100%)'
          : 'linear-gradient(130deg, rgba(11, 33, 77, 0.6) 4.35%, rgba(1, 3, 10, 0.6) 97.15%)',
      }}
    >
      <Typography variant='subtitle1' mb={titleMb ? titleMb : 2} display='flex' alignItems='center'>
        {title}
      </Typography>
      <Typography variant='body1'>{desc}</Typography>
    </Box>
  )
}

export const IndexDottedLine = () => {
  return (
    <hr
      style={{
        margin: '0',
        backgroundImage:
          'linear-gradient(90deg, transparent, transparent 50%, #000 50%, #000 100%), ' +
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 84%)',
        border: 'none',
        backgroundSize: '12px 1px, 100% 1px',
        height: '1px',
      }}
    />
  )
}
