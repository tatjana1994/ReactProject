import React from "react";
import { connect } from "react-redux";
import { GiMale, GiFemale, GiWireframeGlobe } from "react-icons/gi";
import Flag from "react-world-flags";

const DisplayContent = (props) => {
  const drawAllResults = (props) => {
    if (props.countryIds[0]) {
      return (
        <div>
          <div className="flex items-stretch h-8 mt-8 bg-white font-mono border-dashed flex-1 border-t-2 border-b-2 border-gray-800 text-gray-900 font-bold text-2xl text-center justify-center">
            <div className="self-center w-1/3 border-r-2 border-dashed border-gray-800 ">
              {props.name}
            </div>
            {renderGenderIcon(props.gender)}
            <div className="self-center w-1/3 text-center">
              Average age: {props.age}
            </div>
          </div>
          <div className="flex flex-wrap font-mono justify-center mt-2 mb-4">
            <div className=" flex text-white text-center border-dashed border-gray-400 border-b-2 pl-48 pr-48 justify-center text-2xl">
              <div className="mr-2 mt-2 pb-2">
                <GiWireframeGlobe />
              </div>
              Countries:
            </div>
          </div>
          <div className="flex items-stretch h-12 font-mono mt-8">
            <div className="self-center flex-1 text-white text-center text-xl bg-gray-1000">
              <div className="flex items-center justify-center">
                <Flag height="50" width="50" code={props.countryIds[0]} />
              </div>
              {props.countries[0]}
              <p className="text-xl">
                Name popularity: {props.namePopularity[0]}%
              </p>
            </div>
            <div className="self-center flex-1 text-white text-center px-2 py-2 m-2 text-xl bg-gray-1000">
              <div className="flex items-center justify-center ">
                <Flag height="50" width="50" code={props.countryIds[1]} />
              </div>
              {props.countries[1]}
              <p>Name popularity: {props.namePopularity[1]}%</p>
            </div>
            <div className="self-center flex-1 text-white text-center px-2 py-2 m-2 text-xl bg-gray-1000">
              <div className="flex items-center justify-center">
                <Flag height="50" width="50" code={props.countryIds[2]} />
              </div>
              {props.countries[2]}
              <p>Name popularity: {props.namePopularity[2]}%</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex items-stretch h-8 mt-8 bg-white font-mono border-dashed flex-1 border-t-2 border-b-2 border-gray-800 text-gray-900 font-bold text-2xl text-center justify-center">
            <div className="self-center w-full border-r-2 border-dashed border-gray-800 ">
              {props.name}
            </div>
          </div>
          <p className="flex justify-center text-white text-4xl mt-8">
            No results found!
          </p>
        </div>
      );
    }
  };
  const renderGenderIcon = (gender) => {
    if (gender === "male") {
      return (
        <div className="flex justify-center items-center w-1/3 border-r-2 border-dashed border-gray-800">
          <GiMale />
        </div>
      );
    } else if (gender === "female") {
      return (
        <div className="flex justify-center items-center w-1/3 border-r-2 border-dashed border-gray-800">
          <GiFemale />
        </div>
      );
    }
  };

  if (!props.name) {
    return null;
  } else {
    return drawAllResults(props);
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    countries: state.countries,
    age: state.age,
    gender: state.gender,
    namePopularity: state.namePopularity,
    countryIds: state.countryIds,
  };
};

export default connect(mapStateToProps)(DisplayContent);
