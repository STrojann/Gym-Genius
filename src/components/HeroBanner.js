import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import { fontSize } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#19cedd"
        fontWeight="600" fontSize="30px">
        Gym Genius
      </Typography>
      <Typography fontSize="56px" fontWeight={500}
        lineHeight={1.5} mb={2}>
        Mind over matter
      </Typography>
      <Button variant="contained"
        color='error' href='#exercises'
        sx={{ backgroundColor: '#19cedd', 
        padding: '10px' }}>
      Start Now!
    </Button>
    <Typography fontWeight={600}
      color="#19cedd"
      sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none' },
        fontSize: "200px",
        mt: { lg: '150px' }
      }}>
        e = mc2
      </Typography><img src={HeroBannerImage} alt="banner"
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner