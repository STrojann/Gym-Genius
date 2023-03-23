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
            lg: '1170px', xs: '350px'},
          backgroundColor: '#FFF',
          borderRadius: '40px'
        }}
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder="Search Exercises"
        type="text"       
        />
        <Button className="search-btn'
        variant="contained
       href='#exercises'
        sx={{ backgroundColor: '#FF2625',
        color: '#fff',
        textTransform: 'none',
        width: {lg: '175px', xs: '80px'},
        fontSize: {lg: '20px' , xs: '14px'},
        height: '56px',
        padding: '10px' }}>
      Search
    </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises

