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
    start:'',end:'',masechta:'', ready: false, err: true
  };

  formFunc = (name, value) => {

    this.setState({ [name]:value })
     
  };
checkNumbers =(num)=>{

 return num.split(".").length === 2 ? true: false 

}
  componentDidUpdate=(prevProps, prevState)=>{
      const {start, end , masechta} = this.state
if(prevState.masechta !== masechta  || prevState.start !== start ||prevState.end !== end) {

 
this.checkNumbers(start) ? this.setState({err: false}) : this.setState({err: true})
this.checkNumbers(end) ? this.setState({err: false}) : this.setState({err: true})
 if(Number(start) >= Number(end) || start === end ) this.setState({err: true})
  else if(Number(start) < Number(end)) this.setState({err: false})
  if(masechta === '' || start ==='' || end ==='') this.setState({err: true})
} 
  }
  render() {
    const {start ,end, masechta, err} = this.state
    return (
      
      <div className="App">
     
        <Router>
 <Mishna path="mishna/:masechta/start/:start/end/:end"/> 
  <Form path="/" formFunc={this.formFunc}  masechta={masechta} start={start} end={end} err={err}/> 
   </Router>

      </div>
    );
  }
}
export default App;
