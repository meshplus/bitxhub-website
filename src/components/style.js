import {Box, BoxProps, createStyles, makeStyles, Typography} from '@material-ui/core'
import * as React from 'react'
import clsx from 'clsx'

export const useCustomStyles = makeStyles(theme =>
  createStyles({
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#fff',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
)

export const useHelperStyles = makeStyles(theme =>
  createStyles({
    title: {
      background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  })
)

const useStyles = makeStyles(theme =>
  createStyles({
    main: {
      minHeight: '100vh',
    },
    card: {
      borderRadius: '12px',
      display: 'block',
      '&:hover': {
        cursor: 'pointer',
        transition: 'all .5s',
        transform: 'translateY(-6px)',
      },
    },
    cardCover: {
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
    },
    cardContent: {
      borderBottomLeftRadius: '12px',
      borderBottomRightRadius: '12px',
      background: 'linear-gradient(360deg, #000000 0%, #040E22 0.01%, #121B30 100%);',
    },
    cardTitle: {
      height: '64px',
    },
    hr: {
      height: '1px',
      background: 'rgba(71, 71, 71, 0.5)',
      border: 'none',
    },
  })
)

export const ColorText = ({children, className, ...other}) => {
  const classes = useHelperStyles()

  return (
    <Box display='inline-block' className={clsx(classes.title, className)} {...other}>
      {children}
    </Box>
  )
}

export const Hero = ({children, className, ...other}) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.main, className)} {...other}>
      {children}
    </Box>
  )
}

export const Card = ({children, className, title, singleTitle, img, desc, date, link, ...other}) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.card, className)} {...other} component='a' href={link} target='_blank'>
      {console.log(2, link)}
      <img src={img} alt='' style={{display: 'block', width: '100%'}} className={classes.cardCover} />
      <Box p={6} className={classes.cardContent}>
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
  const classes = useStyles()

  return <Box className={clsx(classes.hr, className)} {...other} />
}