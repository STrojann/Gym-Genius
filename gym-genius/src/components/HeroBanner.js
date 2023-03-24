import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/Banner.png';
import { fontSize } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#FF2625"
        fontWeight="550" fontSize="25px">
        Fitness Club
      </Typography>
      <Typography fontSize="56px" fontWeight={500}
        lineHeight={1.5} mb={2}>
        mind over matter, always
      </Typography>
      <Button variant="contained"
        color='error' href='#exercises'
        sx={{ backgroundColor: '#FF2625', 
        padding: '10px' }}>
      Explore Exercises
    </Button>
    <Typography fontWeight={600}
      color="#00bfff"
      sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none' },
        fontSize: "200px",
        mt: { lg: '150px' }
      }}>
        Exercise
      </Typography><img src={HeroBannerImage} alt="banner"
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner