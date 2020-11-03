import React, { Component } from 'react';
import * as api from '../utils/api'
import {getChapter, getVerse} from '../utils/utils'
class MishnaText extends Component {
    
componentDidMount =()=>{
   const  {number, masechta} = this.props;
api.getMishnaText(masechta, getChapter(number)).then((data)=>this.setState({text: data[getVerse(number)-1].split(":")[0]}))
   
}

  state={
    text: ''
  }
  render() {


    return (
      <div>
        {this.state.text}
      </div>
    );
  }
}

export default MishnaText;