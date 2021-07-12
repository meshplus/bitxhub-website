import {Box, Typography} from '@material-ui/core'
import DataCard from '../../images/data_card.png'
import Datum1 from '../../images/datum_1.png'
import Datum2 from '../../images/datum_2.png'
import React, {useState} from 'react'

const DatumRight = () => {
  const [active, setActive] = useState({1: '', 2: 'active', 3: ''})
  const init = {1: '', 2: '', 3: ''}

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
          display: 'none',
          '& h6': {
            lineHeight: {xs: '20px', md: '26px'},
            fontWeight: 400,
          },
        },
        '@keyframes A': {
          from: {backgroundSize: '0 215px'},
          to: {backgroundSize: '590px 215px'},
        },
        '@keyframes sA': {
          from: {backgroundSize: '0 109px'},
          to: {backgroundSize: '320px 109px'},
        },
        '& .datum_item': {
          display: 'flex',
          alignItems: 'center',
          height: {xs: '118px', md: ''},
          padding: {xs: '25px 0', md: '35px 0'},
          transition: 'background 0.3s ease',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${DataCard})`,
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
        <img src={Datum1} alt='datum' className={'datum_ball'} />
        <img src={Datum2} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className='datum_num'>
          <Typography variant='h3'>3</Typography>
          <Typography variant='body1'>项</Typography>
        </Box>
        <Box pl={{xs: 1, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>参与测评</Typography>
            <Typography variant='body1'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
          </Box>
          <Box className='datum_meta_list'>
            <Typography variant='subtitle2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
            {/*<Typography variant='subtitle2'>*/}
            {/*  首批通过中国信息通信研究院的可信区块链的跨链服务功能测评*/}
            {/*</Typography>*/}
            {/*<Typography variant='subtitle2'>*/}
            {/*  通过浙江省电子信息产品检验研究院的跨链服务功能测试*/}
            {/*</Typography>*/}
          </Box>
        </Box>
      </Box>
      <Box
        position='relative'
        ml={{xs: 2, md: 6}}
        className={`datum_item ${active[2]}`}
        onMouseEnter={() => handleActive(2)}
      >
        <img src={Datum1} alt='datum' className={'datum_ball'} />
        <img src={Datum2} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className={'datum_num'}>
          <Typography variant='h3'>4</Typography>
          <Typography variant='body1'>项</Typography>
        </Box>
        <Box pl={{xs: 1, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>专利&论文</Typography>
            <Typography variant='body2'>在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇</Typography>
          </Box>
          <Box className='datum_meta_list'>
            <Typography variant='subtitle2'>参与中国信通院——可信推进计划《区块链互操作白皮书》编写工作</Typography>
            <Typography variant='subtitle2'>参与国际电联电信标准化部门（ITU-T）2项DLT互操作框架标准制定</Typography>
            {/*<Typography variant='subtitle2'>*/}
            {/*  参与中国通信标准化协会（CCSA）《区块链链间互操作》团体标准制定*/}
            {/*</Typography>*/}
            {/*<Typography variant='subtitle2'>*/}
            {/*  参与计算机协会区块链和分布式记账委员会（IEEE C/BDL)区块链互操作3项标准制定；*/}
            {/*</Typography>*/}
          </Box>
        </Box>
      </Box>
      <Box
        position='relative'
        ml={{xs: 8, md: 12}}
        className={`datum_item ${active[3]}`}
        onMouseEnter={() => handleActive(3)}
      >
        <img src={Datum1} alt='datum' className={'datum_ball'} />
        <img src={Datum2} alt='datum' className={'datum_ball_active'} />
        <Box position='absolute' className={'datum_num'}>
          <Typography variant='h3'>23</Typography>
          <Typography variant='body1'>篇</Typography>
        </Box>
        <Box pl={{xs: 1, md: 6}}>
          <Box className='datum_meta'>
            <Typography variant='h5'>专利&论文</Typography>
            <Typography variant='body2'>在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇</Typography>
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
