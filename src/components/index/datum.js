import {Box, Container, Grid, Typography} from '@material-ui/core'
import {ColorText} from '../style'
import React from 'react'
import DatumRight from '../common/datum_right'

const Datum = () => {
  return (
    <Box pt={{md: 40, xs: 0}} pb={{md: 55, xs: 40}}>
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
