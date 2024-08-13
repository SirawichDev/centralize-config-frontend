import React from 'react';
import type { TSunbursrtChart } from './type';
import Plot from 'react-plotly.js';

export function SunburstChart(props: TSunbursrtChart) {
  return (
    <div id='myDiv'>
      <Plot
        //@ts-ignore
        data={props?.data || []}
        layout={props?.layout}
        config={{ responsive: true }}
      />
    </div>
  );
}
