import ReactDOM from "react-dom";
import Input from "./components/input";
import Display from "./components/display";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import React from "react";
import DisplayMap from "./components/displayMap";

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <div>
      <DisplayMap />
      <Input />
      <Display />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
