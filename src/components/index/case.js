import {Box, Container, SwipeableDrawer, Typography} from '@material-ui/core'
import {ColorText, ReadMoreNoHrefWithoutStyle} from '../style'
import {Swiper, SwiperSlide} from 'swiper/react'
import CardBG1 from '../../images/01.png'
import CardBG2 from '../../images/02.png'
import DataExchange from '../../images/data_exchange.png'
import CardBG3 from '../../images/03.png'
import React, {useState} from 'react'
import {useWindowSize} from 'react-use'

const Case = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const {width} = useWindowSize()

  return (
    <Box pt={24} pb={{md: 70, xs: 24}}>
      <Container maxWidth='lg'>
        <Typography variant='h3' mb={{md: 14, xs: 8}}>
          <ColorText mr={1}>BitXHub</ColorText>构建解决方案
        </Typography>
        <Box
          display='flex'
          justifyContent='flex-end'
          sx={{
            '& .swiper-slide': {
              display: 'flex',
              alignItems: 'center',
              height: {md: '420px', xs: '330px'},
              width: {md: '320px', xs: '270px'},
            },
            '& .case_item': {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              padding: {md: '60px', xs: '30px'},
              width: {md: '320px', xs: '270px'},
              height: {md: '380px', xs: '290px'},
              position: 'relative',
              cursor: 'pointer',
              '& h5': {
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
              },
              '& .MuiTypography-body1': {
                lineHeight: '26px',
              },
              '&:hover': {
                '& .read-more': {
                  background: '-webkit-linear-gradient(left, #7DBCFC, #2E7CFE, #01E1FF)',
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
                '&:before': {
                  transform: 'scaleY(1.1)',
                },
              },
              '&:before': {
                backgroundImage: `linear-gradient(360deg, #000000 0%, #040E22 0.01%, #1D2A45 100%)`,
                display: 'block',
                content: '" "',
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                borderRadius: '16px',
                height: '100%',
                color: '#fff',
                transition: 'transform .7s cubic-bezier(.19,1,.22,1)',
                zIndex: 2,
              },
              '&:after': {
                display: 'block',
                content: '" "',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: 3,
                backgroundSize: {xs: '160px', md: '200px'},
                backgroundPosition: '15px 20px',
                backgroundRepeat: 'no-repeat',
              },
              '& .close': {
                position: 'absolute',
                right: 0,
                top: 0,
                fontSize: '20px',
              },
            },
          }}
        >
          <Swiper slidesPerView='auto' spaceBetween={20}>
            <SwiperSlide>
              <Box className='case_item' sx={{'&:after': {backgroundImage: `url(${CardBG1})`}}}>
                <Box zIndex={4} mt={15}>
                  <Typography variant='h5' mb={{md: 5, xs: 3}}>
                    资产互换
                  </Typography>
                  <Typography variant='body1' mb={7}>
                    为用户提供不同链上资产转移服务，资产可以包括通证或凭证如：积分、证件、收藏品等。
                  </Typography>
                  <ReadMoreNoHrefWithoutStyle onClick={() => setOpen1(true)} className='read-more' />
                  <SwipeableDrawer
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    anchor={'right'}
                    open={open1}
                    onOpen={() => setOpen1(true)}
                    onClose={() => setOpen1(false)}
                    sx={{'& .MuiDrawer-paper': {boxSizing: 'border-box', width: {md: width / 2, xs: width}}}}
                  >
                    <Box
                      p={10}
                      minHeight='100%'
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      position='relative'
                      style={{
                        color: '#fff',
                        borderRadius: '10px',
                        background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                      }}
                    >
                      <Box sx={{'& i': {fontSize: '30px', position: 'absolute', top: '30px', right: '30px'}}}>
                        <i className='icon icon-a-11' onClick={() => setOpen1(false)} />
                      </Box>
                      <Typography variant='h5' mb={4}>
                        资产互换
                      </Typography>
                      <Typography variant='body1' mb={4}>
                        针对不同区块链的数字资产模型，中继链会采取不同的资产跨链方案，每种方案的侧重点不同，旨在为用户提供完备、安全、稳定、高效的跨链数字资产交换体验。中继跨链平台提供三种跨链数字资产交换的方式：中继节点多签方案、基于安全多方计算和门限签名方案和去中心化用户自主控制托管方案。
                      </Typography>
                      <img src='http://cdn.yourtheme.cn/asset_exchange.png' alt='exchange' width='100%' />
                    </Box>
                  </SwipeableDrawer>
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box className='case_item' sx={{'&:after': {backgroundImage: `url(${CardBG2})`}}}>
                <Box zIndex={4} mt={15}>
                  <Typography variant='h5' mb={{md: 5, xs: 3}}>
                    数据互通
                  </Typography>
                  <Typography variant='body1' mb={7}>
                    提供跨链数据更新和同步服务，打破异构区块链间的信息壁垒，有效地进行链上数据的安全共享
                  </Typography>
                  <ReadMoreNoHrefWithoutStyle onClick={() => setOpen2(true)} className='read-more' />
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={open2}
                  onOpen={() => setOpen2(true)}
                  onClose={() => setOpen2(false)}
                  sx={{'& .MuiDrawer-paper': {boxSizing: 'border-box', width: {md: width / 2, xs: width}}}}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    position='relative'
                    style={{
                      color: '#fff',
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <Box sx={{'& i': {fontSize: '30px', position: 'absolute', top: '30px', right: '30px'}}}>
                      <i className='icon icon-a-11' onClick={() => setOpen2(false)} />
                    </Box>
                    <Typography variant='h5' mb={4}>
                      数据互通
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      在异构多层级体系架构中，底层的省级和市级的数据治理网络和上层具体业务服务层，通过跨链服务实现各个省级和市级的治理链与骨干链网络的数据互通及治理审计。
                    </Typography>
                    <img src={DataExchange} alt='exchange' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box className='case_item' sx={{'&:after': {backgroundImage: `url(${CardBG3})`}}}>
                <Box zIndex={4} mt={15}>
                  <Typography variant='h5' mb={{md: 5, xs: 3}}>
                    业务互补
                  </Typography>
                  <Typography variant='body1' mb={7}>
                    实现业务耦合高、流程复杂的异构区块链间的横向打通服务，扩大业务规模，实现互利共赢。
                  </Typography>
                  <ReadMoreNoHrefWithoutStyle onClick={() => setOpen3(true)} className='read-more' />
                </Box>
                <SwipeableDrawer
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  anchor={'right'}
                  open={open3}
                  onOpen={() => setOpen3(true)}
                  onClose={() => setOpen3(false)}
                  sx={{'& .MuiDrawer-paper': {boxSizing: 'border-box', width: {md: width / 2, xs: width}}}}
                >
                  <Box
                    p={10}
                    minHeight='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    position='relative'
                    style={{
                      color: '#fff',
                      borderRadius: '10px',
                      background: 'linear-gradient(360deg, #181818 0%, #05070B 0.01%, #1D2735 100%)',
                    }}
                  >
                    <Box sx={{'& i': {fontSize: '30px', position: 'absolute', top: '30px', right: '30px'}}}>
                      <i className='icon icon-a-11' onClick={() => setOpen3(false)} />
                    </Box>
                    <Typography variant='h5' mb={4}>
                      业务互补
                    </Typography>
                    <Typography variant='body1' mb={4}>
                      通过跨链服务实现电子存证链与法院专网链业务数据互信，并统一在司法链上存证和在线核验，为智慧法院建设提供有力支撑，全面提升多部门异构链间的业务协同和审判质效。
                    </Typography>
                    <img src='http://cdn.yourtheme.cn/data_exchange.png' alt='exchange' width='100%' />
                  </Box>
                </SwipeableDrawer>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}

export default Case
