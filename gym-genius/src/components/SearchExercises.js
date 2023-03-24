import React, { useEffect, useState} from 'react';
import { Box, Stack, Button, TextField, Typography} from '@mui/material'; 
import { exercisesOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData 
      ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

      fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);

    }
  }

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
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"       
        />
        <Button className="search-btn'
        variant="contained
       href='#exercises'
        sx={{ backgroundColor: '#00bfff',
        color: '#FF2625',
        textTransform: 'none',
        width: {lg: '175px', xs: '80px'},
        fontSize: {lg: '20px' , xs: '14px'},
        height: '56px',
        padding: '10px' }}
        onClick={handleSearch}
        >
      Search
    </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
     
      </Box>
    </Stack>
  )
}

export default SearchExercises
