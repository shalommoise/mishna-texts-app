import React, { Component } from 'react';
import * as api from '../utils/api'
import {getChapter, getVerse} from '../utils/utils'
class MishnaText extends Component {
    
componentDidMount =()=>{
   const  {number, masechta} = this.props;

   if(Math.floor(number) === number) this.setState(({err: true}));
   else
api.getMishnaText(masechta, getChapter(number)).then((data)=>{
const mishna = data[getVerse(number)-1]
if(!data || !mishna) this.setState(({err: true}))
 else this.setState({text: mishna.split(":")[0], isLoading: false})
})
   
}

  state={
    text: '',
    err: false ,
    isLoading: true
  }
  render() {
const {text, err, isLoading} = this.state

    return (
      <div>
       {err ? <p>This Mishna does not exist</p> : isLoading ? <p>Loading...</p> :<p> {text}</p> } 
      </div>
    );
  }
}

export default MishnaText;