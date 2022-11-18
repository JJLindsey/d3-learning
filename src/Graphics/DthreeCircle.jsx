import React, { useEffect } from "react";
import * as d3 from "d3";

export default function DthreeCircle() {
    useEffect(() => {
        d3.select(".target").style("stroke-width", 3);
    }, [])
  return (
    <div>
        <svg>
            <circle
                className="target"
                style={{fill: "orange"}}
                stroke="blue"
                cx={100}
                cy={100}
                r={40}
            >
            </circle>
        </svg>
    </div>
  )
}
