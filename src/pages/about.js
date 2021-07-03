import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../components/style'
import Group from '../images/group.png'
import GZH from '../images/gzh.png'
import BG from '../images/about_bg.png'
import GrowBG from '../images/about_grow_bg.png'
import ContactBG from '../images/about_contact_bg.png'
import Ball from '../images/roadmap_ball.png'
import BallActive from '../images/roadmap_ball_active.png'
import Star from '../images/about_star.png'
import DataCard from '../images/data_card.png'
import Datum1 from '../images/datum_1.png'
import Datum2 from '../images/datum_2.png'

const AboutPage = ({data}) => {
  const [datumActive, setDatumActive] = useState('active')

  if (typeof window === undefined) return null
  return (
    <Box>
      <SEO title='关于我们' />
      <Layout>
        <Box
          pt={50}
          sx={{
            backgroundImage: `url(${BG}), url(${GrowBG}), url(${ContactBG})`,
            backgroundSize: '1991px 681px, 2000px 1500px, 2000px 1630px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -60px, center 860px, center bottom -70px',
          }}
        >
          <Container maxWidth='lg'>
            <Typography variant='h3' mb={8} textAlign='center'>
              关于我们
            </Typography>
            <Typography variant='body2' textAlign='center' px={{xs: 3, md: 20}}>
              依托区块链技术和多行业业务积累，为用户提供完备的数据和资产跨链解决方案，致力于安全高可用和通用易扩展的异构跨链服务，拥抱开源，与广大开发者共建万链互联、价值互通的区块链"互联网"。
            </Typography>
            <Box mt={{xs: 10, md: 40}} mb={10}>
              <Grid container>
                <Grid item md={5} display='flex' alignItems='center'>
                  <Typography variant='h2'>
                    <ColorText>跨链</ColorText>
                    <Box>行业领导者</Box>
                  </Typography>
                </Grid>
                <Grid item md={7}>
                  <Box
                    sx={{
                      '& .datum_num': {
                        display: 'flex',
                        alignItems: 'flex-end',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        justifyContent: 'center',
                        width: '138px',
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
                      '& .datum_meta_list': {display: 'none', '& h6': {lineHeight: 1.8}},
                      '& .datum_item': {
                        display: 'flex',
                        alignItems: 'center',
                        padding: '35px 0',
                        transition: 'background 0.2s ease',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url(${DataCard})`,
                        backgroundPosition: 'top 1px left 70px',
                        backgroundSize: '0 215px',
                        '& .datum_ball_active': {
                          display: 'none',
                        },
                        '&:hover, &.active': {
                          backgroundSize: '632px 215px',
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
                      ml={15}
                      mt={10}
                      className={`datum_item`}
                      onMouseEnter={() => setDatumActive('')}
                      onMouseLeave={() => setDatumActive('active')}
                    >
                      <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                      <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                      <Box position='absolute' className='datum_num'>
                        <Typography variant='h3'>3</Typography>
                        <Typography variant='body1'>项</Typography>
                      </Box>
                      <Box pl={6}>
                        <Box className='datum_meta'>
                          <Typography variant='h5'>参与测评</Typography>
                          <Typography variant='body1'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                        </Box>
                        <Box className='datum_meta_list'>
                          <Typography variant='subtitle2'>首批通过国家金融科技测评中心的跨链服务功能测试</Typography>
                          <Typography variant='subtitle2'>
                            首批通过中国信息通信研究院的可信区块链的跨链服务功能测评
                          </Typography>
                          <Typography variant='subtitle2'>
                            通过浙江省电子信息产品检验研究院的跨链服务功能测试
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      position='relative'
                      ml={6}
                      className={`datum_item ${datumActive}`}
                      onMouseEnter={() => setDatumActive('')}
                      onMouseLeave={() => setDatumActive('active')}
                    >
                      <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                      <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                      <Box position='absolute' className={'datum_num'}>
                        <Typography variant='h3'>4</Typography>
                        <Typography variant='body1'>项</Typography>
                      </Box>
                      <Box pl={6}>
                        <Box className='datum_meta'>
                          <Typography variant='h5'>专利&论文</Typography>
                          <Typography variant='body1'>
                            在跨链事务一致性保障、数据有效性验证、跨链协议等相关领域具有23篇
                          </Typography>
                        </Box>
                        <Box className='datum_meta_list'>
                          <Typography variant='subtitle2'>
                            参与中国信通院——可信推进计划《区块链互操作白皮书》编写工作
                          </Typography>
                          <Typography variant='subtitle2'>
                            参与国际电联电信标准化部门（ITU-T）2项DLT互操作框架标准制定
                          </Typography>
                          <Typography variant='subtitle2'>
                            参与中国通信标准化协会（CCSA）《区块链链间互操作》团体标准制定
                          </Typography>
                          <Typography variant='subtitle2'>
                            参与计算机协会区块链和分布式记账委员会（IEEE C/BDL)区块链互操作3项标准制定；
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      position='relative'
                      ml={14}
                      className={'datum_item'}
                      onMouseEnter={() => setDatumActive('')}
                      onMouseLeave={() => setDatumActive('active')}
                    >
                      <img src={Datum1} alt='datum' height={139} className={'datum_ball'} />
                      <img src={Datum2} alt='datum' height={139} className={'datum_ball_active'} />
                      <Box position='absolute' className={'datum_num'}>
                        <Typography variant='h3'>23</Typography>
                        <Typography variant='body1'>篇</Typography>
                      </Box>
                      <Box pl={6}>
                        <Box className='datum_meta'>
                          <Typography variant='h5'>专利&论文</Typography>
                          <Typography variant='body1'>
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
                </Grid>
              </Grid>
            </Box>
            <Box pt={20} pb={50} id='roadmap'>
              <Container maxWidth='lg'>
                <Grid container>
                  <Grid item md={6}>
                    <Typography variant='h3'>我们的成长历程</Typography>
                  </Grid>
                </Grid>
                <Box
                  mt={30}
                  px={15}
                  position='relative'
                  sx={{
                    '& .MuiTypography-subtitle2': {
                      fontWeight: 'normal',
                    },
                    '& h5': {
                      fontWeight: 'normal',
                    },
                    '&:after': {
                      content: '" "',
                      display: 'block',
                      position: 'absolute',
                      width: '2px',
                      height: '120%',
                      // background: '#4266ad',
                      background:
                        'linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(78,155,226,1) 0%, rgba(78,155,226,1) 70%, rgba(51,51,51,1) 100%);',
                      left: '50%',
                      top: '0',
                    },
                    '& .item': {
                      position: 'relative',
                    },
                    '& .roadmap-item': {
                      padding: '20px 40px',
                    },
                    '& .ball': {
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-16px)',
                      zIndex: 6,
                    },
                    '& .star': {
                      position: 'absolute',
                      left: '50%',
                      transform: 'translate(-80px, -24px)',
                      zIndex: 0,
                    },
                  }}
                >
                  {/* 1 */}
                  <Box className='item'>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='h1' color='#66748D' textAlign='right' pr={5} mt={-8}>
                          2021
                        </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                        <Typography variant='subtitle2' pl={4} mt={-2}>
                          2021.12
                        </Typography>
                        <Box
                          mt={1}
                          borderRadius={3}
                          className='roadmap-item'
                          sx={{
                            opacity: 0.6,
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            联盟跨链自治
                          </Typography>
                          <Typography variant='body1'>
                            支持统一的身份管理，跨链权限控制，节点管理及数据审计等服务
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* 2 */}
                  <Box className='item' mt={4}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='subtitle2' pr={4} mt={-2} textAlign='right'>
                          2021.09
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            opacity: 0.6,
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            开放测试网络
                          </Typography>
                          <Typography variant='body1'>为用户提供资产/数据交换服务，DApp跨链服务体验</Typography>
                        </Box>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* 3 */}
                  <Box className='item' mt={4}>
                    <Grid container>
                      <Grid item md={6} />
                      <Grid item md={6}>
                        <img src={BallActive} alt='ball' width={32} className='ball' />
                        <img src={Star} alt='star' height={47} className='star' />
                        <Typography variant='subtitle2' pl={4} mt={-2}>
                          2021.06
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            marginLeft: '5px',
                            background: 'linear-gradient(360deg, #000000 0%, #0B1425 0.01%, #182B5C 100%)',
                            border: '3px solid #7d6ca9',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            跨链浏览器
                          </Typography>
                          <Typography variant='body1'>
                            区块和交易的实时展示、应用链和验证规则管理和DApp的聚合生态管理
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* 4 */}
                  <Box className='item' mt={4}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='subtitle2' pr={4} mt={-2} textAlign='right'>
                          2021.03
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            分布式数字身份
                          </Typography>
                          <Typography variant='body1'>
                            提供链原生的应用链、网关和用户的统一身份标识，打造基于数字身份的互通机制
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                      </Grid>
                    </Grid>
                  </Box>

                  {/* 2020-1 */}
                  <Box className='item' mt={30}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='h1' color='#66748D' textAlign='right' pr={5} mt={-8}>
                          2020
                        </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                        <Typography variant='subtitle2' pl={4} mt={-2}>
                          2020.09
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            多层级网络
                          </Typography>
                          <Typography variant='body1'>实现大规模中继跨链网络，支撑多层级跨链场景</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* 2020-2 */}
                  <Box className='item' mt={4}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='subtitle2' pr={4} mt={-2} textAlign='right'>
                          2020.06
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            跨链功能升级
                          </Typography>
                          <Typography variant='body1'>灵活积木架构，多场景跨链互联</Typography>
                        </Box>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* 2020-3 */}
                  <Box className='item' mt={4}>
                    <Grid container>
                      <Grid item md={6} />
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                        <Typography variant='subtitle2' pl={4} mt={-2}>
                          2020.03
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            开源核心代码
                          </Typography>
                          <Typography variant='body1'>开源跨链技术平台BitXHub的核心代码</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* 2019-1 */}
                  <Box className='item' mt={30}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant='h1' color='#66748D' textAlign='right' pr={5} mt={-8}>
                          2019
                        </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <img src={Ball} alt='ball' width={32} className='ball' />
                        <Typography variant='subtitle2' pl={4} mt={-2}>
                          2019.10
                        </Typography>
                        <Box
                          mt={1}
                          className='roadmap-item'
                          borderRadius={3}
                          sx={{
                            background: 'linear-gradient(360deg, #181818 0%, #0B1425 0.01%, #29395A 100%)',
                          }}
                        >
                          <Typography variant='h5' mb={3}>
                            产品发布
                          </Typography>
                          <Typography variant='body1'>
                            趣链秋季战略发布会上提出通用跨链传输协议IBTP，并公布了中英文版的白皮书
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              pt={20}
              pb={15}
              sx={{
                '& h5': {fontWeight: 'normal !important'},
              }}
            >
              <Grid container>
                <Grid item md={6} sx={{display: 'flex', alignItems: 'center'}}>
                  <Typography variant='h3'>
                    <Box>有任何问题</Box>
                    欢迎联系我们
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant='h5' mb={4}>
                    公司总部
                  </Typography>
                  <Typography variant='subtitle1' mb={2}>
                    杭州市滨江区丹枫路399号2号楼A楼2001室
                  </Typography>
                  <Typography variant='subtitle1'>电话：0571-89995238</Typography>
                  <Typography variant='h5' mt={12} mb={4}>
                    邮箱
                  </Typography>
                  <Typography variant='subtitle1'>杭州市滨江区丹枫路399号2号楼A楼2001室</Typography>
                  <Typography variant='h5' mt={12} mb={4}>
                    微信公众号
                  </Typography>
                  <Grid container>
                    <Grid item md={4}>
                      <Typography variant='subtitle1' mb={2}>
                        趣链科技公众号
                      </Typography>
                      <img src={Group} alt='group' width={145} />
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant='subtitle1' mb={2}>
                        进入开源技术交流群
                      </Typography>
                      <img src={GZH} alt='gzh' width={145} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Layout>
    </Box>
  )
}
export default AboutPage
