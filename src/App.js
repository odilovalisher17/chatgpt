import React from "react";
import "./utils.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/configureStore";
import Homepage from "./Homepage/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
