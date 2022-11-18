import React from 'react'
import * as d3 from 'd3'

export default function ChangeFunction() {
    const changeStroke = () => {
        d3.select('.stroke').style('stroke-width', 10);
    }
  return (
    <div>
        <button onClick={changeStroke}>change stroke</button>
        <svg>
            <circle
            class='stroke'
            style={{fill: 'green'}}
            stroke="red"
            cx={50}
            cy={50}
            r={40}
            >
            </circle>
        </svg>
    </div>
  )
}
