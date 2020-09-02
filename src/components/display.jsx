import React from "react";
import { connect } from "react-redux";
import "../custom.css";

const Display = (props) => {
  if (!props.name) {
    return null;
  } else {
    return (
      <div>
        <div className="box">
          <div className="name">{props.name}</div>
        </div>
        <div className="box1">
          <div className="age">Age: {props.age}</div>
        </div>
        <div className="box2">
          <div className="countries">Country: {props.countries}</div>
        </div>
        <div className="box3">
          <div className="gender">Gender: {props.gender}</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    countries: state.countries,
    age: state.age,
    gender: state.gender,
  };
};
export default connect(mapStateToProps)(Display);
