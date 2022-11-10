import React, { useEffect, useRef } from 'react';
import { DrawChart } from './DrawChart';
import { Box } from '@mui/system';
import { Autocomplete, Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.js';
import CloverLogo from '../../../styles/Img/Clover_logo.png';

import './ChartPage.css'

function ChartPage() {
  const location = useLocation();
  const Code = location.state.code
  const Name = location.state.name
  const Ex_path = location.state.ex_path

  return (
    <Box>
      <Box sx={{ paddingTop: 5, paddingLeft: 10 }} className='TopBox'>
      </Box>
      <Grid container
        direction='row'
        sx={{ paddingTop: 5, paddingLeft: 10 }}
      >
        <Grid item xs={6}>
          <img src={CloverLogo} />
        </Grid>
        <Grid item xs={4}>
          <SearchBar />
        </Grid>
      </Grid>
      <Box sx={{ padding: 10, paddingTop: 0 }} className='Stock'>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={4}
          sx={{ margin: 0, padding: 2, width: 1 / 2 }} className='StockInfo'>
          <Grid item xs={8}>
            <Paper
              elevation={0}
              sx={{
                typography: {
                  fontWeight: 550,
                  fontSize: 30,
                  color: 'green',
                }
              }}
            >
              {Name}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={0}
              sx={{
                typography: {
                  fontSize: 20,
                  fontWeight: 450,
                  color: '#00000ff'
                }
              }}>
              {Code}
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ padding: 3, width: 1 / 2, height: '50vh' }}>
          <DrawChart data={Ex_path} />
        </Paper>
      </Box >
    </Box >
  )
}

export default ChartPage