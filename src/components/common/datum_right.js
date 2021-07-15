import {Box, Typography, useMediaQuery} from '@material-ui/core'
import React, {useState} from 'react'
import {theme} from '../theme'
import {getStaticUrl} from '../../helpers'

const DatumRight = () => {
  const [active, setActive] = useState({1: '', 2: 'active', 3: ''})
  const init = {1: '', 2: '', 3: ''}
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleActive = i => setActive({...init, [i]: 'active'})

  return (
    <Box
      sx={{
        '& .datum_num': {
          display: 'flex',
          alignItems: 'flex-end',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          justifyContent: 'center',
          width: {xs: '70px', md: '138px'},
          '& h3': {
            lineHeight: 1,
          },
        },
        '& .MuiTypography-h5': {
          fontSize: {md: '24px', xs: '14px'},
        },
        '& .datum_meta': {
          display: 'block',
          marginLeft: '20px',
          '& h5': {
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '12px',
            position: 'relative',
            '&:before': {
              content: '" "',
              display: 'block',
              width: '8px',
              height: '8px',
              borderRadius: '2px',
              background: 'rgba(255, 255, 255, 0.5)',
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
            },
          },
        },
        '& .datum_meta_list': {
          pr: {md: 0, xs: '16px'},
          pl: {md: 0, xs: 0},
          display: 'none',
          '& h6': {
            lineHeight: {xs: '20px', md: '26px'},
            fontWeight: 400,
            fontSize: {md: '16px', xs: '12px'},
          },
        },
        '@keyframes A': {
          from: {backgroundSize: '0 215px'},
          to: {backgroundSize: '640px 215px'},
        },
        '@keyframes sA': {
          from: {backgroundSize: '0 109px'},
          to: {backgroundSize: '259px 109px'},
        },
        '@keyframes fA': {
          from: {backgroundSize: '0 215px'},
          to: {backgroundSize: '660px 215px'},
        },
        '@keyframes fsA': {
          from: {backgroundSize: '0 109px'},
          to: {backgroundSize: '289px 109px'},
        },
        '& .datum_item': {
          display: 'flex',
          alignItems: 'center',
          height: {xs: '118px', md: ''},
          padding: {xs: '25px 0', md: '35px 0'},
          transition: 'background 0.3s ease',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${getStaticUrl('data_card.png')})`,
          backgroundPosition: {xs: 'top 6px left 34px', md: 'top 1px left 70px'},
          backgroundSize: {xs: '0 109px', md: '0 215px'},
          '& .datum_ball_active': {
            height: {xs: '70px', md: '139px'},
            display: 'none',
          },
          '& .datum_ball': {
            height: {xs: '70px', md: '139px'},
          },
          '&.active': {
            animation: {md: 'A 0.4s ease-in-out forwards', xs: 'sA 0.4s ease-in-out forwards'},
            '& .datum_meta': {
              display: 'none',
            },
            '& .datum_ball_active': {
              display: 'block',
            },
            '& .datum_ball': {
              display: 'none',
            },
            '& .datum_meta_list': {
              display: 'block',
            },
          },
        },
      }}
    >
      <Box
        position='relative'
        ml={{xs: 8, md: 15}}
        mt={10}
        className={`datum_item ${active[1]}`}
        onMouseEnter={() => handleActive(1)}
      >
        <img src={getStaticUrl('datum_1.png')} alt='datum' className={'datum_ball'} />
        <img src={getStaticUrl('datum_2.png')} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className='datum_num'>
          <Typography variant='h3'>3</Typography>
          <Typography variant='body1'>项</Typography>
        </Box>
        <Box pl={{xs: 2, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>参与测评</Typography>
            <Typography variant='body2' display={{md: 'block', xs: 'none'}}>
              首批通过国家金融科技测评中心的跨链服务功能测试
            </Typography>
          </Box>
          <Box className='datum_meta_list'>
            {isMobile ? (
              <>
                <Typography variant='subtitle2'>
                  首批通过国家金融科技测评中心、中国信通院和浙江省电子信息产品检验研究院的跨链功能测试
                </Typography>
              </>
            ) : (
              <>
                <Typography variant='subtitle2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                <Typography variant='subtitle2'>首批通过中国信息通信研究院的可信区块链的跨链服务功能测评</Typography>
                <Typography variant='subtitle2'>通过浙江省电子信息产品检验研究院的跨链服务功能测试</Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        position='relative'
        ml={{xs: 2, md: 6}}
        className={`datum_item ${active[2]}`}
        onMouseEnter={() => handleActive(2)}
        sx={{
          '&.active': {
            animation: {md: 'fA 0.4s ease-in-out forwards !important', xs: 'fsA 0.4s ease-in-out forwards !important'},
          },
        }}
      >
        <img src={getStaticUrl('datum_1.png')} alt='datum' className={'datum_ball'} />
        <img src={getStaticUrl('datum_2.png')} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className={'datum_num'}>
          <Typography variant='h3'>4</Typography>
          <Typography variant='body1'>项</Typography>
        </Box>
        <Box pl={{xs: 2, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>标准制定</Typography>
            <Typography variant='body2' display={{md: 'block', xs: 'none'}}>
              参与多项国际和国内区块链互操作标准制定
            </Typography>
          </Box>
          <Box className='datum_meta_list'>
            {isMobile ? (
              <>
                <Typography variant='subtitle2'>
                  参与信通院《区块链互操作白皮书》编写工作，参与ITU-T、CCSA和IEEE C/BDL等区块链互操作标准制定
                </Typography>
              </>
            ) : (
              <>
                <Typography variant='subtitle2'>参与中国信通院——可信推进计划《区块链互操作白皮书》编写工作</Typography>
                <Typography variant='subtitle2'>参与国际电联电信标准化部门(ITU-T)2项DLT互操作框架标准制定</Typography>
                <Typography variant='subtitle2'>
                  参与中国通信标准化协会(CCSA)《区块链链间互操作》团体标准制定
                </Typography>
                <Typography variant='subtitle2'>
                  参与计算机协会区块链和分布式记账委员会区块链互操作3项标准制定
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        position='relative'
        ml={{xs: 8, md: 12}}
        className={`datum_item ${active[3]}`}
        onMouseEnter={() => handleActive(3)}
      >
        <img src={getStaticUrl('datum_1.png')} alt='datum' className={'datum_ball'} />
        <img src={getStaticUrl('datum_2.png')} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className={'datum_num'}>
          <Typography variant='h3'>23</Typography>
          <Typography variant='body1'>篇</Typography>
        </Box>
        <Box pl={{xs: 2, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>专利&论文</Typography>
            <Typography variant='body2' display={{md: 'block', xs: 'none'}}>
              在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
            </Typography>
          </Box>
          <Box className='datum_meta_list'>
            <Typography variant='subtitle2'>
              在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default DatumRight
