import React, {useState} from 'react';

function BarChart({children, xLabel, max}) {
  return(
    <figure className="ln-bar-chart">
      <label className="ln-bar-chart__xlabel">{xLabel}</label>
      <section style={{gridTemplateRows: `repeat(${max}, 1fr)`}} className="ln-bar-chart__bar-container">
        {children}
      </section>
    </figure>
  );
}

export function Bar({label, value, color}) {
  return (
    <div style={{gridRow: `span ${value}`, backgroundColor: color || "blue"}} className="ln-bar-chart__bar">
      <label className="ln-bar-chart__bar-label">{label}</label>
    </div>
  );
}

export default BarChart;