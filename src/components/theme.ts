import {createMuiTheme} from '@material-ui/core'

export const theme = createMuiTheme({
  spacing: 5,
  palette: {
    primary: {
      light: '#e1edff',
      main: '#1164FB'
    },
    secondary: {
      main: '#FD7C25'
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f2f6'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          textTransform: 'capitalize',
          borderRadius: '2em',
          color: '#ffffff'
        },
        contained: {
          backgroundColor: '#f1f2f6',
          '&:hover': {
            backgroundColor: '#f1f2f2'
          }
        },
        sizeSmall: {
          minWidth: '56px',
          padding: '4px 5px'
        },
        sizeLarge: {
          width: '150px',
          height: '50px'
        },
        containedSecondary: {
          backgroundColor: '#00D9A7',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#00D9A7 !important'
          },
          '&:active': {
            backgroundColor: '#00D9A7 !important'
          }
        },
        outlinedPrimary: {
          border: '1px solid #2E7CFE'
        },
        containedPrimary: {
          // backgroundColor: isBSC() ? '#EFB82D' : '#1164FB',
          backgroundColor: '#1164FB',
          color: '#fff',
          '&:hover': {
            // backgroundColor: isBSC() ? '#EFB23D' : '#3679f4',
            backgroundColor: '#3679f4'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: '5px 0',
          boxShadow: '0px 1px 10px 0px rgba(186, 192, 204, 0.41)',
          marginTop: '10px'
        },
        list: {
          padding: '8px 0',
          maxHeight: '400px'
        }
      }
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
            width: '100%'
          },
          '& img': {
            marginRight: '10px'
          },
          '&:hover': {
            background: '#f6f6f6'
          },
          '&$selected': {
            background: '#f6f6f6',
            '&:hover': {
              background: '#f6f6f6'
            }
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#A1A8C7',
          minWidth: '60px !important',
          '&:hover': {
            color: '#444C65'
          },
          '&$selected': {
            color: '#444C65'
          },
          '&:focus': {
            color: '#444C65'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 43px 0px rgba(228, 232, 245, 0.92)',
          borderRadius: '16px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontFamily: 'Bahnschrift, "Roboto", "Helvetica", "Arial", sans-serif !important'
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h1: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h2: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h3: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h4: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h5: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        h6: {
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        caption: {
          color: '#7B89B7',
          lineHeight: '22px'
        },
        subtitle1: {
          color: 'rgba(255, 255, 255, 0.8)'
        },
        body1: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        body2: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto'
        },
        body: {
          overflow: 'inherit !important',
          backgroundColor: '#000000',
          color: '#ffffff',
          minHeight: '100vh',
          fontFamily: '"AlibabaPuHui", "Roboto", "Helvetica", "Arial", sans-serif !important',
          lineHeight: 1.2
        },
        button: {
          textTransform: 'capitalize !important'
        },
        a: {
          textDecoration: 'none'
        },
        '.MuiListItem-root': {
          fontSize: '14px !important'
        },
        '.Mui-disabled': {
          background: '#F1F2F6 !important'
        },
        '.Toastify__toast-container': {
          maxWidth: '260px',
          fontSize: '13px',
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.Toastify__toast': {
          borderRadius: '8px',
          top: '60px',
          padding: '8px 16px',
          color: '#000',

          '& svg': {
            marginRight: '5px'
          }
        },
        '.Toastify__toast--info': {
          background:
            'radial-gradient(circle, rgba(223,232,254,1) 0%, rgba(252,255,251,1) 45%, rgba(255,242,250,1) 80%);'
        },
        '.MuiStepLabel-root.Mui-disabled': {
          background: '#fff !important'
        },
        '.MuiFormControlLabel-root': {
          alignItems: 'flex-start !important',
          '& h6': {
            marginTop: '2px'
          }
        },
        '.MuiStepConnector-vertical': {
          background: '#fff !important'
        }
      }
    }
  }
})