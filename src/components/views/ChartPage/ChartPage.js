import React, { useEffect, useRef } from 'react';
import { DrawChart } from './DrawChart';

import './ChartPage.css'

function ChartPage() {
  return (
    <div>
      <DrawChart className='chart_container' />
    </div>
  )
}

export default ChartPage