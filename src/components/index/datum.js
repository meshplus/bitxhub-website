import {Box, Container, Grid, Typography} from '@material-ui/core'
import DataBG from '../../images/index_data_bg.png'
import {ColorText} from '../style'
import DataCard from '../../images/data_card.png'
import Datum1 from '../../images/datum_1.png'
import Datum2 from '../../images/datum_2.png'
import React, {useState} from 'react'
import DatumRight from '../common/datum_right'

const Datum = () => {
  const [datumActive, setDatumActive] = useState('active')

  return (
    <Box
      pt={{md: 40, xs: 0}}
      pb={55}
      sx={{
        background: `url(${DataBG})`,
        backgroundPosition: {xs: '-300px 38px', md: 'center -120px'},
        backgroundRepeat: 'no-repeat',
        backgroundSize: {xs: '800px', md: '2000px'},
      }}
    >
      <Container maxWidth='lg'>
        <Box>
          <Grid container alignItems='stretch'>
            <Grid item md={4} display='flex' alignItems='center'>
              <Box>
                <Typography variant='h2'>
                  <ColorText>跨链</ColorText>
                  <Box>行业领导者</Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={8}>
              <DatumRight />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Datum
