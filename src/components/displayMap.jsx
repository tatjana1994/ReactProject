import Chart from "react-google-charts";
import React from "react";
import { connect } from "react-redux";

const displayMap = (props) => {
  return (
    <div className="map">
      <Chart
        width={"1100px"}
        height={"900px"}
        chartType="GeoChart"
        data={[
          ["Country", "Popularity"],
          [props.countryIds[0], props.countryPopularity[0]],
          [props.countryIds[1], props.countryPopularity[1]],
          [props.countryIds[2], props.countryPopularity[2]],
        ]}
        options={{
          colorAxis: { colors: ["#77a9b6", "#166b80"] },
          datalessRegionColor: "#0a313b",
        }}
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    countryIds: state.countryIds,
    countryPopularity: state.countryPopularity,
  };
};
export default connect(mapStateToProps)(displayMap);
