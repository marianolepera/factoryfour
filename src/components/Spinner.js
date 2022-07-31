import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Spinner() {
  return (
    <Box sx={{ textAlign:"center", marginTop:30}}>
        <Typography>LOADING DATA..</Typography>
        <CircularProgress color="inherit" size={100} />
    </Box>
  );
}