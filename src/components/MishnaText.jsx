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
const formmatedMishna = this.changeText(mishna);
if(!data || !mishna) this.setState(({err: true}))
 else this.setState({text: formmatedMishna , isLoading: false})
})
   
}
changeText =(text)=>{
 
  const arr = text.split(" ");
  arr.pop();
  const newArr = [] ;
  arr.forEach((element, i) => {
  // if(element.includes(".")) {
  //   const newEl =element.split(".")[0];
  //   newArr.push(newEl)
  //   newArr.push(". "); 
   
  // } else {
    newArr.push(" "+ element )
  // }
  });
  const lastWord =  newArr.pop();
  const formatWord = lastWord.split(":")[0];
  newArr.push(formatWord)
  

  return newArr.join(" ")
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
       {err ? <p>This Mishna does not exist</p> : isLoading ? <p>Loading...</p> :<p>{text}</p> } 
      </div>
    );
  }
}

export default MishnaText;