import React, { useEffect } from 'react'
import * as d3 from 'd3'

export default function ThreeCircles() {
    useEffect(() => {
        const svg = d3.select("#area");
        svg
            .append("circle")
            .attr("cx", 70)
            .attr("cy", 70)
            .attr("r", 40)
            .style("fill", "blue");
        svg
            .append("circle")
            .attr("cx", 140)
            .attr("cy", 70)
            .attr("r", 40)
            .style("fill", "red");
        svg
            .append("circle")
            .attr("cx", 200)
            .attr("cy", 70)
            .attr("r", 40)
            .style("fill", "yellow");
    }, []);

  return (
    <div>
        <svg id="area" height={200} width={550}></svg>
    </div>
  )
}
