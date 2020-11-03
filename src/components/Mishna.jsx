import React, { Component } from 'react';
import {getNumbers, mishnaSubHeading} from '../utils/utils';
import Heading from './Heading'
import MishnaText from './MishnaText'

class Mishna extends Component {
  
  render() {
        const {start ,end, masechta} = this.props
     
    return (
      <div>
   <Heading masechta={masechta} start={start} end={end}/>
    {getNumbers(start,end).map((mishna)=>{
      return (
        <div key={mishna} className="mishna">
        <h2>{mishnaSubHeading(mishna)}</h2>
        <MishnaText number={mishna} masechta={masechta}/>
        </div>
      )
    })}
      </div>
    );
  }
}

export default Mishna;