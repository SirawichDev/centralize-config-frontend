import React from 'react';
import Plot from 'react-plotly.js';

export function SunburstChart(props) {
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
