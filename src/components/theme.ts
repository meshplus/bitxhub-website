import {createTheme} from '@material-ui/core'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

export const theme = createTheme({
  spacing: 5,
  palette: {
    primary: {
      light: '#e1edff',
      main: '#7DBCFC',
    },
    secondary: {
      main: '#FD7C25',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '20px',
          paddingRight: '20px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f2f6',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {},
        paper: {
          background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%);',
          borderTopLeftRadius: '15px',
          borderBottomLeftRadius: '15px',
          [breakpoints.down('md')]: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          textTransform: 'capitalize',
          borderRadius: '2em',
          color: '#ffffff',
          transition: 'all .2s ease !important',
          '&.Mui-disabled': {
            border: '1px solid rgba(130, 130, 130, 0.5)',
            color: 'rgba(130, 130, 130, 0.5)',
            cursor: 'not-allowed',
            pointerEvents: 'all !important',
            '&:hover': {
              background: 'transparent',
              border: '1px solid rgba(130, 130, 130, 0.5)',
              color: 'rgba(130, 130, 130, 0.5)',
            },
          },
        },
        contained: {
          backgroundColor: '#f1f2f6',
          '&:hover': {
            backgroundColor: '#f1f2f2',
          },
        },
        sizeSmall: {
          minWidth: '56px',
          padding: '4px 5px',
        },
        sizeLarge: {
          minWidth: '150px',
          height: '50px',
        },
        containedSecondary: {
          backgroundColor: '#00D9A7',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#00D9A7 !important',
          },
          '&:active': {
            backgroundColor: '#00D9A7 !important',
          },
        },
        outlinedPrimary: {
          border: '1px solid #6c9ae6',
          padding: '7px 21px 7px 26px',
          fontWeight: 400,
          '&:hover': {
            '& a': {
              color: '#4f96ff',
            },
            border: '1px solid #6c9ae6',
            color: '#4f96ff',
            // background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
            // color: 'transparent',
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
          },
        },
        containedPrimary: {
          // backgroundColor: isBSC() ? '#EFB82D' : '#1164FB',
          backgroundColor: '#1164FB',
          color: '#fff',
          '&:hover': {
            // backgroundColor: isBSC() ? '#EFB23D' : '#3679f4',
            backgroundColor: '#3679f4',
          },
        },
        containedInherit: {
          background: '#313131CC',
          transition: 'all 1.3s',
          '&:hover': {
            background:
              'radial-gradient(95.45% 255.77% at 95.45% 50.51%, #01E1FF 0%, #2E7CFE 66.23%, rgba(125, 188, 252, 0.92) 100%)',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: '5px 0',
          boxShadow: '0px 1px 10px 0px rgba(186, 192, 204, 0.41)',
          marginTop: '10px',
        },
        list: {
          padding: '8px 0',
          maxHeight: '400px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px',
          fontSize: '14px !important',
          '& a': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          },
          '& img': {
            marginRight: '10px',
          },
          '&:hover': {
            background: '#f6f6f6',
          },
          '&$selected': {
            background: '#f6f6f6',
            '&:hover': {
              background: '#f6f6f6',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 43px 0px rgba(228, 232, 245, 0.92)',
          borderRadius: '16px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important',
        },
        h1: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
          [breakpoints.down('sm')]: {
            fontSize: '48px',
          },
        },
        h2: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
          [breakpoints.down('sm')]: {
            fontSize: '36px',
          },
        },
        h3: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
          [breakpoints.down('sm')]: {
            fontSize: '32px',
          },
        },
        h4: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
        },
        h5: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
          [breakpoints.down('sm')]: {
            fontSize: '20px',
          },
        },
        h6: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          fontWeight: 'bold',
        },
        caption: {
          color: '#7B89B7',
          lineHeight: '22px',
        },
        subtitle1: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
        body1: {
          color: 'rgba(255, 255, 255, 0.5)',
          lineHeight: '26px',
          [breakpoints.down('md')]: {
            fontSize: '12px',
          },
        },
        body2: {
          color: 'rgba(255, 255, 255, 0.5)',
          [breakpoints.down('md')]: {
            fontSize: '12px',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#050707',
          color: '#ffffff',
          minHeight: '100vh',
          lineHeight: 1.2,
        },
        button: {
          textTransform: 'capitalize !important',
        },
        a: {
          color: '#fff',
          textDecoration: 'none',
        },
        '.MuiListItem-root': {
          fontSize: '14px !important',
        },
        '.Toastify__toast-container': {
          maxWidth: '260px',
          fontSize: '13px',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.Toastify__toast': {
          borderRadius: '8px',
          top: '60px',
          padding: '8px 16px',
          color: '#000',

          '& svg': {
            marginRight: '5px',
          },
        },
        '.Toastify__toast--info': {
          background:
            'radial-gradient(circle, rgba(223,232,254,1) 0%, rgba(252,255,251,1) 45%, rgba(255,242,250,1) 80%);',
        },
        '.MuiStepLabel-root.Mui-disabled': {
          background: '#fff !important',
        },
        '.MuiFormControlLabel-root': {
          alignItems: 'flex-start !important',
          '& h6': {
            marginTop: '2px',
          },
        },
        '.MuiStepConnector-vertical': {
          background: '#fff !important',
        },
      },
    },
  },
})
