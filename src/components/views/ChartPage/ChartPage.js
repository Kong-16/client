import React, { useEffect, useRef } from 'react';
import { DrawChart } from './DrawChart';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

import './ChartPage.css'

function ChartPage() {
  return (
    <Box>
      <Paper sx={{ width: 500 }}>
        <DrawChart className='chart_container' />
      </Paper>
    </Box>
  )
}

export default ChartPage