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
    <Box
      className={clsx(className)}
      {...other}
      sx={{
        minHeight: '100vh',
      }}
    >
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
        '&:hover': {
          cursor: 'pointer',
          transition: 'all .6s',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <img
        src={img}
        alt='cover'
        style={{
          position: 'absolute',
          display: 'block',
          top: 0,
          width: '100%',
          objectFit: 'cover',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      />
      <Box
        p={6}
        sx={{
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%)',
        }}
      >
        <Typography mb={4} variant='h5' height={singleTitle ? '32px' : '64px'}>
          {title}
        </Typography>
        <Typography variant='subtitle1' maxHeight='60px' overflow='hidden'>
          {desc}
        </Typography>
        <Typography mt={4} variant='body1'>
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
