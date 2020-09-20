import ReactDOM from "react-dom";
import InputField from "./components/InputField";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import React from "react";
import DisplayMap from "./components/DisplayMap";
import DisplayContent from "./components/DisplayContent";
import "./tailwind.output.css";
import DisplayGlobe from "./components/DisplayGlobe";
import Background from "./images/background.jpg";

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + Background + ")" }}
      className=" w-screen h-screen fixed"
    >
      <InputField />
      <div className="flex flex-row">
        <div className="w-2/4 ml-0 -mt-0 pb-4 flex flex-wrap justify-center">
          <DisplayMap />
        </div>
        <div className="ml-20">
          <DisplayGlobe />
        </div>
      </div>
      <DisplayContent />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
