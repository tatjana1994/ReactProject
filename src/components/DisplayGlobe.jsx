import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import json from "../data/geo.json";
import * as actionCreators from "../actions/actions";

const DisplayGlobe = (props) => {
  useEffect(() => {
    const w = 500;
    const h = 450;
    const sensitivity = 75;
    const scl = Math.min(w, h) / 2.5;

    const projection = d3
      .geoOrthographic()
      .scale(scl)
      .translate([w / 2, h / 2])
      .rotate([-props.mapCoords[1], -props.mapCoords[0]]);

    const path = d3.geoPath().projection(projection);
    const svg = d3.select("#svgDiv").attr("width", w).attr("height", h);
    const map = d3.select(".gDiv");

    map
      .select(".ocean")
      .datum({ type: "Sphere" })
      .attr("d", path)
      .attr("fill", " #75a3a3");

    map
      .selectAll(".country")
      .data(json.features)
      .join("path")
      .attr("class", "country")
      .attr("fill", function (d) {
        switch (d.properties.iso_a2) {
          case props.countryIds[0]:
          case props.countryIds[1]:
          case props.countryIds[2]:
            return "black";
          default:
            return "#66ff33";
        }
      })
      .style("stroke", "black")
      .attr("d", path);

    const dragged = (event) => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      let lng = rotate[0] + event.dx * k;
      let lat = rotate[1] - event.dy * k;
      lat = lat > 89 ? 89 : lat < -89 ? -89 : lat;
      projection.rotate([lng, lat]);
      props.updateGlobeCoords([lng, lat]);
      map.selectAll("path").attr("d", path);
    };

    const drag = d3.drag().on("drag", dragged);
    svg.call(drag);
  });

  return (
    <div>
      <svg id="svgDiv">
        <g className="gDiv">
          <path className="ocean"></path>
        </g>
      </svg>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryIds: state.countryIds,
    countryPopularity: state.countryPopularity,
    mapCoords: state.mapCoords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGlobeCoords: (coords) =>
      dispatch(actionCreators.updateGlobeCoords(coords)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGlobe);
