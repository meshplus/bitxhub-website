import React, {useState} from 'react'
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import {ColorText, ReadMore} from '../style'
import {getStaticUrl} from '../../helpers'
import {Fade} from 'react-awesome-reveal'

const Roadmap = () => {
  const ina = {1: 'inactive', 2: '', 3: 'inactive', 4: 'inactive'}
  const [active, setActive] = useState({1: '', 2: 'active', 3: '', 4: ''})
  const [inactive, setInactive] = useState(ina)
  const init = {1: '', 2: '', 3: '', 4: ''}

  const handleActive = i => {
    const iii = {1: 'inactive', 2: 'inactive', 3: 'inactive', 4: 'inactive'}
    setActive({...init, [i]: 'active'})
    setInactive({...iii, [i]: ''})
  }

  return (
    <Box
      pb={10}
      sx={{
        zIndex: 1,
        position: 'relative',
        '& .date2': {
          color: 'rgba(255,255,255,0.8)',
          fontSize: {md: '16px', xs: '12px'},
        },
        '& .date, & .date2': {
          fontFamily: '"Titillium Web","Roboto","Helvetica","Arial",sans-serif !important',
        },
        '& .title': {
          color: 'rgba(255, 255, 255, 0.6)',
          transform: 'translateY(-8px)',
        },
        '& .date': {
          transform: 'translateY(8px)',
        },
        '& .hover_title': {
          fontSize: {md: '20px', xs: '16px'},
          color: 'rgba(255, 255, 255, 0.8)',
          visibility: 'none',
          opacity: 0,
          position: 'absolute',
          top: {md: '110px', xs: '95px'},
          left: 0,
          width: '100%',
          textAlign: 'center',
          transition: 'all 0.5s ease',
        },
        '@keyframes scaleB': {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(6)'},
          '100%': {transform: 'scale(5.6)'},
        },
        '@keyframes scaleS': {
          from: {transform: 'scale(5.6)'},
          to: {transform: 'scale(1)'},
        },
        '@keyframes xs-scaleB': {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(4)'},
          '100%': {transform: 'scale(3.6)'},
        },
        '@keyframes xs-scaleS': {
          from: {transform: 'scale(3.6)'},
          to: {transform: 'scale(1)'},
        },
        '& .roadmap_item': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          width: {md: '300px', xs: '170px'},
          height: {md: '250px', xs: '214px'},
          backgroundImage: `url(${getStaticUrl('roadmap_shine.png')})`,
          backgroundSize: '0 0',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: {md: '140px 140px', xs: '100px 100px'},
          transition: 'background .5s ease',
          '&.active': {
            backgroundSize: {md: '220px 220px', xs: '170px 170px'},
            backgroundPosition: {md: '15px -10px', xs: '-11px 11px'},
            '& .title': {
              opacity: 0,
              display: 'none',
            },
            '& .hover_title': {
              visibility: 'visible',
              opacity: 1,
            },
            '& .roadmap_desc': {
              opacity: 1,
              transform: 'translateY(0)',
            },
            '& .date': {
              display: 'none',
            },
            '& .roadmap_ball': {
              animation: {md: 'scaleB 0.8s ease-in-out forwards', xs: 'xs-scaleB 0.8s ease-in-out forwards'},
            },
          },
          '&.inactive': {
            '& .roadmap_ball': {
              animation: {md: 'scaleS 0.8s ease forwards', xs: 'xs-scaleS 0.8s ease forwards'},
            },
          },
        },
        '& .roadmap_ball': {
          display: 'inline-block',
        },
        '& .roadmap_desc': {
          transition: 'opacity 500ms, transform 500ms',
          opacity: 0,
          transform: 'translateY(100px)',
          position: 'absolute',
          top: {md: '162px', xs: '133px'},
          width: {xs: '190px', md: '300px'},
          minHeight: '240px',
          textAlign: 'left',
          backgroundImage: `url(${getStaticUrl('roadmap_card.png')})`,
          backgroundSize: {md: '300px 241px', xs: '190px'},
          backgroundRepeat: 'no-repeat',
          // left: '50%',
          // transform: 'translateX(-50%)',
          // marginLeft: {md: '-150px', xs: '-95px'},
          px: {md: 10, xs: 4},
          pb: 2,
          pt: {md: 16, xs: 9},
          '& .roadmap_desc.active': {
            display: 'block',
          },
          '& ul': {
            color: 'rgba(255, 255, 255, 0.6)',
            paddingLeft: '20px',
            fontSize: {md: '16px', xs: '12px'},
            '& li': {
              marginBottom: '5px',
            },
          },
        },
      }}
    >
      <Container maxWidth='lg'>
        <Box mb={{md: 14, xs: 6}} display={{xs: '', md: 'flex'}} alignItems='flex-end'>
          <Fade direction='up' duration={500}>
            <Typography variant='h3' mr={5}>
              <ColorText mr={1}>BitXHub</ColorText>开源规划
            </Typography>
          </Fade>
          <ReadMore to='/about#roadmap' mb={1} />
        </Box>
        <Box sx={{overflowX: 'scroll', overflowY: 'hidden', pb: {md: 32, xs: 30}}}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='relative'
            height='250px'
            sx={{
              width: {md: '100%', xs: '800px'},
              '&:after': {
                content: '" "',
                display: 'block',
                position: 'absolute',
                top: '50%',
                width: '100%',
                height: '1px',
                zIndex: -1,
                background:
                  'linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(78,155,226,1) 17%, rgba(78,155,226,1) 75%, rgba(51,51,51,1) 100%)',
              },
            }}
          >
            <Box
              position='relative'
              textAlign='center'
              className={`roadmap_item ${active[1]} ${inactive[1]}`}
              onMouseEnter={() => handleActive(1)}
            >
              <Typography variant='body1' className={`title`}>
                DID组件开源
              </Typography>
              <img src={getStaticUrl('index_roadmap_ball.png')} className={`roadmap_ball`} alt='ball' height={36} />
              <Typography variant='subtitle2' className={`hover_title`}>
                DID组件开源
              </Typography>
              <Typography variant='body2' className='date'>
                2021.04
              </Typography>
              <Box className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}>
                <Typography variant='subtitle2' mb={{md: 2, xs: 1}} className='date2'>
                  2021.04
                </Typography>
                <Divider sx={{background: '#405584'}} />
                <ul>
                  <li>提供链原生的应用链、网关和用户的统一身份标识</li>
                </ul>
              </Box>
            </Box>

            <Box
              textAlign='center'
              position='relative'
              className={`roadmap_item ${active[2]} ${inactive[2]}`}
              onMouseEnter={() => handleActive(2)}
            >
              <Typography variant='body1' className='title'>
                跨链浏览器
              </Typography>
              <img src={getStaticUrl('index_roadmap_ball.png')} className={`roadmap_ball`} alt='ball' height={36} />
              <Typography variant='subtitle2' className={`hover_title`}>
                跨链浏览器
              </Typography>
              <Typography variant='body2' className='date'>
                2021.06
              </Typography>
              <Box className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}>
                <Typography variant='subtitle2' mb={2} className='date2'>
                  2021.06
                </Typography>
                <Divider sx={{background: '#405584'}} />
                <ul>
                  <li>区块和交易的实时展示</li>
                  <li>应用链和验证规则管理</li>
                  <li>DApp的聚合生态管理</li>
                </ul>
              </Box>
            </Box>

            <Box
              textAlign='center'
              position='relative'
              className={`roadmap_item ${active[3]} ${inactive[3]}`}
              onMouseEnter={() => handleActive(3)}
            >
              <Typography variant='body1' className='title'>
                开放测试网
              </Typography>
              <img
                src={getStaticUrl('index_roadmap_ball.png')}
                className={`roadmap_ball ${active[3]} ${inactive[3]}`}
                alt='ball'
                height={36}
              />
              <Typography variant='subtitle2' className={`hover_title`}>
                开放测试网
              </Typography>
              <Typography variant='body2' className='date'>
                2021.08
              </Typography>
              <Box className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}>
                <Typography variant='subtitle2' mb={2} className='date2'>
                  2021.08
                </Typography>
                <Divider sx={{background: '#405584'}} />
                <ul>
                  <li>提供资产/数据交换服务</li>
                  <li>DApp跨链服务体验</li>
                </ul>
              </Box>
            </Box>

            <Box
              textAlign='center'
              position='relative'
              className={`roadmap_item ${active[4]} ${inactive[4]}`}
              onMouseEnter={() => handleActive(4)}
            >
              <Typography variant='body1' className={`title`}>
                跨链治理框架
              </Typography>
              <img src={getStaticUrl('index_roadmap_ball.png')} className={`roadmap_ball`} alt='ball' height={36} />
              <Typography variant='subtitle2' className={`hover_title`}>
                跨链治理框架
              </Typography>
              <Typography variant='body2' className='date'>
                2021.10
              </Typography>
              <Box className={`animate__animated animate__fadeInUp animate__faster roadmap_desc`}>
                <Typography variant='subtitle2' mb={2} className='date2'>
                  2021.10
                </Typography>
                <Divider sx={{background: '#405584'}} />
                <ul>
                  <li>统一身份管理和权限控制</li>
                  <li>节点管理及数据审计服务</li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Roadmap
