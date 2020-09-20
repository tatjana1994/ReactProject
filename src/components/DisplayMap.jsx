import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import * as actionCreators from "../actions/actions";
import countries from "../data/geo.json";

const DisplayMap = (props) => {
  const mapRef = useRef();

  const countryStyle = {
    fillColor: "green",
    fillOpacity: 0.5,
    color: "black",
    weight: 1,
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.admin;
    layer.bindPopup(countryName);
  };

  const drawSelectedCountries = (countries) => {
    return function (feature) {
      switch (feature.properties.iso_a2) {
        case countries[0]:
        case countries[1]:
        case countries[2]:
          return countryStyle;
        default:
          return {
            fillOpacity: 0,
            color: "black",
            weight: 0,
          };
      }
    };
  };

  const onMoveUpdateCoords = (event) => {
    let center = event.target.getCenter();
    let centerCoords = [center.lat, center.lng];
    props.updateMapCoords(centerCoords);
  };

  useEffect(() => {
    let map = mapRef.current.leafletElement;

    map.panTo([-props.globeCoords[1], -props.globeCoords[0]]);
  }, [props]);

  return (
    <div>
      <Map
        className="rounded-full h-16 w-16 flex items-center justify-center -mt-8"
        ref={mapRef}
        id="map"
        position="flex"
        zoom={3}
        minZoom={2}
        maxZoom={4}
        style={{ height: 580, width: 580 }}
        ondrag={onMoveUpdateCoords}
        worldCopyJump="true"
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

        <GeoJSON
          style={drawSelectedCountries(props.countryIds)}
          onEachFeature={onEachCountry}
          data={countries.features}
        ></GeoJSON>
      </Map>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryIds: state.countryIds,
    countryPopularity: state.countryPopularity,
    globeCoords: state.globeCoords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMapCoords: (coords) =>
      dispatch(actionCreators.updateMapCoords(coords)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMap);
