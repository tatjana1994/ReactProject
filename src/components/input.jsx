import React from "react";
import "../custom.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

const Input = (props) => {
  return (
    <div>
      <input
        className="input"
        id="input-id"
        placeholder="Write a name here"
      ></input>
      <button className="submit" onClick={props.loadNameInfo}>
        Search
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNameInfo: () => {
      dispatch(actionCreators.loadNameInfo());
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
