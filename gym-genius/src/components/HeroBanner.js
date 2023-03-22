import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg :'212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625"
      fontWeight="550" fontSize="25px">
        Fitness Club 
      </Typography>  
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', sm: '40px'} }}>
        No e=mc2 <br /> with these workouts 
      </Typography>
      <Typography fontSize="22px"
      lineHeight={3.5}>
        Check out these exercises that leave you feeling like a genius
      </Typography>
      <Button>

      </Button>
    </Box>
  )
}

export default HeroBanner