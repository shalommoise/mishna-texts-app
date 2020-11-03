import React, { Component } from "react";
import {Router} from '@reach/router'
import Form from "./components/Form"
import Mishna from "./components/Mishna"
// import {ejs} from "ejs";
// import {fs} from "fs";
// import {pdf} from "html-pdf"

import "./App.css";

class App extends Component {
  state = { 
    name:'',end:'',masechta:''
  };

  formFunc = (name, value) => {
    this.setState({ [name]:value });
  };
  render() {
    const {start ,end, masechta} = this.state
    return (
      
      <div className="App">
     
        <Router>
 <Mishna path="mishna/:masechta/start/:start/end/:end"/> 
  <Form path="/" formFunc={this.formFunc} masechta={masechta} start={start} end={end}/> 
   </Router>

      </div>
    );
  }
}
export default App;
