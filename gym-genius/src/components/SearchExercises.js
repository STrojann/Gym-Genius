import React, { useEffect, useState} from 'react';
import { Box, Stack, Button, TextField, Typography} from '@mui/material'; 
import { fontWeight } from '@mui/system';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
    fontSize: { lg: '44px', xs: '30px'}}}
    mb="50px" ml="50px" textAlign="centre" >
      Check out these Workouts
      </Typography>
      <Box position="center" mb="72px">
        <TextField 
        sx={{ 
          input: { 
          fontWeight: '700' },
          border: 'none',
          borderRadius: '4px',
          width: {
            lg: '1170px', xs: '350px'
          }
        }}
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder="Search Exercises"
        type="text"       
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises

