import React, { Component } from "react";

import { Router } from "@reach/router";
// import {ejs} from "ejs";
// import {fs} from "fs";
// import {pdf} from "html-pdf"
import "./App.css";

class App extends Component {
  state = {};

  formFunc = (dataFromForm) => {
    this.setState({ mishnaInfo: dataFromForm });
  };
  render() {
    return (
      <div className="App">
        
        {/* <Router>
          <Form path="/" formFilled={this.formFunc} />
          <MainPage path="mishna" mishnaInfo={this.state.mishnaInfo} />
        </Router> */}
      </div>
    );
  }
}
export default App;
