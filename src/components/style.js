import {Box, Typography} from '@material-ui/core'
import * as React from 'react'
import clsx from 'clsx'

export const ColorText = ({children, className, ...other}) => {
  return (
    <Box
      display='inline-block'
      className={clsx(className)}
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
      sx={{
        borderRadius: '12px',
        display: 'block',
        '&:hover': {
          cursor: 'pointer',
          transition: 'all .5s',
          transform: 'translateY(-6px)',
        },
      }}
    >
      <img
        src={img}
        alt=''
        style={{display: 'block', width: '100%'}}
        sx={{
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
        <Typography mt={8} variant='body1'>
          {date}
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
