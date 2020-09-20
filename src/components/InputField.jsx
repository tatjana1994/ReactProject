import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

const InputField = (props) => {
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.loadNameInfo();
    }
  };
  return (
    <div>
      <input
        maxLength="15"
        onKeyDown={_handleKeyDown}
        className="flex flex-col border-solid border-double border-red-900 w-1/2 h-8 w-full mt-20 font-mono text-lg text-gray-800 text-center text-xl"
        id="search-input-id"
        placeholder="Write a name here"
      ></input>
      <div className="flex flex-wrap justify-center">
        <button
          onClick={props.loadNameInfo}
          className="flex flex-wrap justify-center focus:outline-none mx-64 w-1/12 rounded-full bg-gray-400 hover:bg-gray-500 text-xl text-gray-800 font-bold py-2 px-4 rounded font-mono mt-8 text-center"
        >
          Search
        </button>
      </div>
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

export default connect(null, mapDispatchToProps)(InputField);
